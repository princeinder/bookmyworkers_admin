import React, { useEffect, useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "services/adminService";

const ResetPassword = ({ isModalOpen, closeResetModal }) => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");

  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { authState } = userSignin;
  const adminData = useSelector((state) => state.adminData);
  const { loading, modalClose } = adminData;
  useEffect(() => {
    if (modalClose) closeResetModal();
  }, [modalClose]);

  const onResetPassword = (data) => {
    dispatch(resetPassword(authState, data.oldPassword, data.password));
  };
  return (
    <>
      <div>
        <Modal isOpen={isModalOpen} ClassName="reset-password">
          <form onSubmit={handleSubmit(onResetPassword)}>
            <ModalHeader ClassName="header">Reset Password</ModalHeader>
            <ModalBody ClassName="reset-body">
              <div class="form-group">
                <label for="exampleFormControlInput1">Old Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="old password"
                  ref={register}
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">New Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="new password"
                  ref={register({
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters",
                    },
                  })}
                  ref={register}
                  required
                />
                {errors.password && (
                  <p>
                    <div class="alert alert-danger mt-2" role="alert">
                      {errors.password.message}
                    </div>
                  </p>
                )}
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="password_repeat"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="confirm new password"
                  ref={register({
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                  required
                />
                {errors.password_repeat && (
                  <p>
                    <div class="alert alert-danger mt-2" role="alert">
                      {errors.password_repeat.message}
                    </div>
                  </p>
                )}
              </div>
            </ModalBody>
            <ModalFooter ClassName="footer">
              <Button
                type="submit"
                disabled={loading ? true : false}
                color="primary"
              >
                Submit
              </Button>
              <Button color="secondary" onClick={() => closeResetModal()}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default ResetPassword;
