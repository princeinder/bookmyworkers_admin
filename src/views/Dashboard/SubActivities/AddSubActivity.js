import React, { useEffect, useState } from "react";
import "assets/scss/manage-post.scss";
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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import { getActivityList } from "services/activityService";
import { addSingleSubActivity } from "services/subActivityService";

const AddSport = () => {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    subActivityName: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [activity, onChangeActivity] = useState();

  const userSignin = useSelector((state) => state.userSignin);
  const { authState } = userSignin;
  const activityData = useSelector((state) => state.activityData);
  const { activities } = activityData;
  const subActivityData = useSelector((state) => state.subActivityData);
  const { redirect } = subActivityData;

  useEffect(() => {
    dispatch(getActivityList(authState, ""));
  }, [authState]);

  const onAddSport = (data) => {
    dispatch(addSingleSubActivity(authState, activity, data));
  };
  if (redirect) {
    return <Redirect to="/admin/managesubactivity/list" />;
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="back-option">
                <NavLink to="/admin/managesport/list">
                  <button className="btn btn-primary">Back</button>
                </NavLink>
              </CardHeader>
              <div className="edit-detail-wrap">
                <CardBody>
                  <form onSubmit={handleSubmit(onAddSport)}>
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
                                <select
                                  ref={register}
                                  type="text"
                                  name="activityName"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  onChange={(e) =>
                                    onChangeActivity(e.target.value)
                                  }
                                  required
                                >
                                  <option value="">Select Activity</option>
                                  {activities.map((activity) => (
                                    <option value={activity._id}>
                                      {activity.activityName}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </Col>
                            <Col md="6">
                              <div class="mb-3 form-fileds">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Sub Activity Name
                                </label>
                                <input
                                  ref={register}
                                  type="text"
                                  name="subActivityName"
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

export default AddSport;
