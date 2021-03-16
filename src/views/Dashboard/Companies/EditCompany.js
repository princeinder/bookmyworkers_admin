import React, { useEffect, useState } from "react";
import "../../../assets/scss/edituser.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Redirect, useParams } from "react-router";
import { NavLink, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUser, updateUser } from "services/userService";
import Loader from "../../../utils/loader/Loader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const EditUser = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { userid } = params;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [baseProfilePic, setBaseProfilePic] = useState("");
  const [gallaryPic0, setGallaryPic0] = useState("");
  const [gallaryPic1, setGallaryPic1] = useState("");
  const [gallaryPic2, setGallaryPic2] = useState("");

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const userSignin = useSelector((state) => state.userSignin);
  const { authState } = userSignin;
  const userData = useSelector((state) => state.userData);
  const { loading, user, redirect } = userData;

  useEffect(() => {
    dispatch(getSingleUser(authState, userid));
  }, [authState, userid]);

  const setPhoneInput = (value, country, e, formattedValue) => {
    setPhoneNumber(value.replace(country.dialCode, ""));
    setCountryCode("+" + country.dialCode);
  };
  const onSubmitUser = (data) => {
    data.countryCode = countryCode;
    data.phoneNumber = phoneNumber;
    data.baseProfilePic = baseProfilePic;
    data.gallaryPic0 = gallaryPic0;
    data.gallaryPic1 = gallaryPic1;
    data.gallaryPic2 = gallaryPic2;
    dispatch(updateUser(authState, userid, data));
  };
  if (redirect) {
    return <Redirect to="/admin/manageuser/list" />;
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="back-option">
                <NavLink to="/admin/manageuser/list">
                  <button className="btn btn-primary">Back</button>
                </NavLink>
              </CardHeader>
              {loading ? (
                <Loader isActive={loading} />
              ) : (
                <div className="edit-detail-wrap">
                  <CardBody>
                    <form onSubmit={handleSubmit(onSubmitUser)}>
                      <Row>
                        <Col md="3">
                          <div class="mb-3 img">
                            <div className="profile-img">
                              <figure>
                                <img
                                  src={
                                    baseProfilePic
                                      ? URL.createObjectURL(baseProfilePic)
                                      : user.baseProfilePic
                                      ? "http://www.appgrowthcompany.com:6030" +
                                        user.baseProfilePic
                                      : "/assets/img/profile1.png"
                                  }
                                ></img>
                                <div className="choose-file">
                                  <input
                                    _ngcontent-orq-c118=""
                                    type="file"
                                    id="baseProfilePic"
                                    name="baseProfilePic"
                                    onChange={(e) =>
                                      setBaseProfilePic(e.target.files[0])
                                    }
                                  />
                                  <svg
                                    _ngcontent-orq-c118=""
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    class="bi bi-pencil-fill"
                                  >
                                    <path
                                      _ngcontent-orq-c118=""
                                      d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                                    ></path>
                                  </svg>
                                </div>
                              </figure>
                              <div className="gallary-img">
                                {user.gallaryProfilePic &&
                                  user.gallaryProfilePic.map((gimg) => (
                                    <figure>
                                      <img
                                        src={
                                          gallaryPic0
                                            ? URL.createObjectURL(gallaryPic0)
                                            : gimg
                                            ? "http://www.appgrowthcompany.com:6030" +
                                              gimg
                                            : "/assets/img/profile1.png"
                                        }
                                      />
                                      <div className="choose-file">
                                        <input
                                          _ngcontent-orq-c118=""
                                          type="file"
                                          id="gallaryProfilePic0"
                                          name="gallaryProfilePic0"
                                          onChange={(e) =>
                                            setGallaryPic0(e.target.files[0])
                                          }
                                        />
                                        <svg
                                          _ngcontent-orq-c118=""
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          viewBox="0 0 16 16"
                                          class="bi bi-pencil-fill"
                                        >
                                          <path
                                            _ngcontent-orq-c118=""
                                            d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                                          ></path>
                                        </svg>
                                      </div>
                                    </figure>
                                    // <figure>
                                    //   <img
                                    //     src={
                                    //       gallaryPic1
                                    //         ? URL.createObjectURL(gallaryPic1)
                                    //         : user.gallaryProfilePic[1] &&
                                    //           user.gallaryProfilePic[1]
                                    //         ? "http://www.appgrowthcompany.com:6030" +
                                    //           user.gallaryProfilePic[1]
                                    //         : "/assets/img/profile1.png"
                                    //     }
                                    //   />
                                    //   <div className="choose-file">
                                    //     <input
                                    //       _ngcontent-orq-c118=""
                                    //       type="file"
                                    //       id="gallaryProfilePic1"
                                    //       name="gallaryProfilePic1"
                                    //       onChange={(e) =>
                                    //         setGallaryPic1(e.target.files[0])
                                    //       }
                                    //     />
                                    //     <svg
                                    //       _ngcontent-orq-c118=""
                                    //       xmlns="http://www.w3.org/2000/svg"
                                    //       width="16"
                                    //       height="16"
                                    //       fill="currentColor"
                                    //       viewBox="0 0 16 16"
                                    //       class="bi bi-pencil-fill"
                                    //     >
                                    //       <path
                                    //         _ngcontent-orq-c118=""
                                    //         d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                                    //       ></path>
                                    //     </svg>
                                    //   </div>
                                    // </figure>
                                    // <figure>
                                    //   <img
                                    //     src={
                                    //       gallaryPic2
                                    //         ? URL.createObjectURL(gallaryPic2)
                                    //         : user.gallaryProfilePic[2] &&
                                    //           user.gallaryProfilePic[2]
                                    //         ? "http://www.appgrowthcompany.com:6030" +
                                    //           user.gallaryProfilePic[2]
                                    //         : "/assets/img/profile1.png"
                                    //     }
                                    //   />
                                    //   <div className="choose-file">
                                    //     <input
                                    //       _ngcontent-orq-c118=""
                                    //       type="file"
                                    //       id="gallaryProfilePic2"
                                    //       name="gallaryProfilePic2"
                                    //       onChange={(e) =>
                                    //         setGallaryPic2(e.target.files[0])
                                    //       }
                                    //     />
                                    //     <svg
                                    //       _ngcontent-orq-c118=""
                                    //       xmlns="http://www.w3.org/2000/svg"
                                    //       width="16"
                                    //       height="16"
                                    //       fill="currentColor"
                                    //       viewBox="0 0 16 16"
                                    //       class="bi bi-pencil-fill"
                                    //     >
                                    //       <path
                                    //         _ngcontent-orq-c118=""
                                    //         d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                                    //       ></path>
                                    //     </svg>
                                    //   </div>
                                    // </figure>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </Col>

                        <Col md="9">
                          <Row>
                            <Col md="6">
                              <div class="mb-3 form-fileds">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Name
                                </label>
                                <input
                                  name="name"
                                  ref={register}
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  defaultValue={user.name}
                                  required
                                />
                              </div>
                            </Col>
                            <Col md="6">
                              <div class="mb-3 form-fileds">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  ref={register}
                                  name="email"
                                  type="email"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  defaultValue={user.email}
                                  required
                                />
                              </div>
                            </Col>
                            <Col md="6">
                              <div class="mb-3 form-fileds">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Phone No.
                                </label>
                                <PhoneInput
                                  inputProps={{
                                    name: "phone",
                                    required: true,
                                  }}
                                  country="us"
                                  inputClass="phn-verify"
                                  onChange={(
                                    value,
                                    country,
                                    e,
                                    formattedValue
                                  ) =>
                                    setPhoneInput(
                                      value,
                                      country,
                                      e,
                                      formattedValue
                                    )
                                  }
                                  value={user.countryCode + user.phoneNumber}
                                  placeholder="Enter you phone number"
                                />
                              </div>
                            </Col>
                            <Col md="6">
                              <div class="mb-3 form-fileds">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Address
                                </label>
                                <input
                                  ref={register}
                                  type="text"
                                  name="address"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  defaultValue={user.address}
                                  required
                                />
                              </div>
                            </Col>
                            {/* <Col md="6">
                              <div class="mb-3 form-fileds">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Interest
                                </label>
                                <select
                                  class="form-control"
                                  name="interest"
                                  id="interest"
                                  multiple
                                  defaultChecked={}
                                >
                                  {user.interest &&
                                    user.interest.map((inter) => (
                                      <option value={inter._id}>
                                        {inter.name}
                                      </option>
                                    ))}
                                </select>
                              </div>
                            </Col> */}

                            <Col md="6">
                              <div class="mt-3 form-fileds">
                                <input
                                  className="btn btn-primary"
                                  type="submit"
                                  value="Update"
                                />
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </form>
                  </CardBody>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default withRouter(EditUser);
