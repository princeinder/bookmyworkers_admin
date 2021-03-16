import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";
import "react-phone-input-2/lib/style.css";
import { Redirect, useParams } from "react-router";
import { NavLink, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "utils/loader/Loader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  getSingleSubActivity,
  updateSubActivity,
} from "services/subActivityService";

const EditSport = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { subactivityid } = params;
  const validationSchema = yup.object().shape({
    sportName: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const userSignin = useSelector((state) => state.userSignin);
  const { authState } = userSignin;
  const subActivityData = useSelector((state) => state.subActivityData);
  const { loading, subActivity, redirect } = subActivityData;

  useEffect(() => {
    dispatch(getSingleSubActivity(authState, subactivityid));
  }, [authState, subactivityid]);

  const onSubmitSubActivity = (data) => {
    dispatch(updateSubActivity(authState, subactivityid, data));
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
                <NavLink to="/admin/managesubactivity/list">
                  <button className="btn btn-primary">Back</button>
                </NavLink>
              </CardHeader>
              {loading ? (
                <Loader isActive={loading} />
              ) : (
                <div className="edit-detail-wrap">
                  <CardBody>
                    <form onSubmit={handleSubmit(onSubmitSubActivity)}>
                      <Row>
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
                                  name="sportName"
                                  ref={register}
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  defaultValue={subActivity.subActivityName}
                                  required
                                />
                              </div>
                            </Col>

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

export default withRouter(EditSport);
