import React, { useState } from "react";
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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addSingleCustomField } from "../../../services/customFieldService";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";

const AddCustomField = () => {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    key: yup.string().required(),
    label: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const userSignin = useSelector((state) => state.userSignin);
  const { authState } = userSignin;
  const customFieldData = useSelector((state) => state.customFieldData);
  const { loading, redirect } = customFieldData;
  const onAddCustomField = (data) => {
    dispatch(addSingleCustomField(authState, data));
  };
  if (redirect) {
    return <Redirect to="/admin/managecustomfields/list" />;
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="back-option">
                <NavLink to="/admin/managecustomfields/list">
                  <button className="btn btn-primary">Back</button>
                </NavLink>
              </CardHeader>
              <div className="edit-detail-wrap">
                <CardBody>
                  <form onSubmit={handleSubmit(onAddCustomField)}>
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
                                  Key
                                </label>
                                <input
                                  ref={register}
                                  type="text"
                                  name="key"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Key"
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
                                  Label
                                </label>
                                <input
                                  ref={register}
                                  type="text"
                                  name="label"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Label"
                                  required
                                />
                              </div>
                            </Col>
                            <Col md="6">
                              <div class="form-fileds">
                                <button
                                  disabled={loading ? true : false}
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

export default AddCustomField;
