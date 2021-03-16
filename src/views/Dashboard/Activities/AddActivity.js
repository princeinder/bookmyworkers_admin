import React from "react";
import "../../../assets/scss/manage-post.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import { addSingleActivity } from "../../../services/activityService";

const AddActivity = () => {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    activityName: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const userSignin = useSelector((state) => state.userSignin);
  const { authState } = userSignin;
  const activityData = useSelector((state) => state.activityData);
  const { loading, redirect } = activityData;
  const onAddActivity = (data) => {
    dispatch(addSingleActivity(authState, data));
  };

  if (redirect) {
    return <Redirect to="/admin/manageactivities/list" />;
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
              <div className="edit-detail-wrap">
                <CardBody>
                  <form onSubmit={handleSubmit(onAddActivity)}>
                    <Row>
                      <Col md="9">
                        <Row>
                          <div className="d-flex w-100 align-items-center">
                            <Col md="6">
                              <div class="mb-3 form-fileds">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Activity Name
                                </label>
                                <input
                                  ref={register}
                                  type="text"
                                  name="activityName"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  required
                                />
                              </div>
                            </Col>
                            <Col md="6">
                              <div class="form-fileds">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Add
                                </button>
                              </div>
                            </Col>
                          </div>
                        </Row>
                      </Col>
                    </Row>
                  </form>
                </CardBody>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default AddActivity;
