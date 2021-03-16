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
import { NavLink } from "react-router-dom";

const AddPost = () => {
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
                  <form>
                    <Row>
                      <Col md="12">
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
                                type="text"
                                class="form-control"
                                id="exampleInputPassword1"
                                required
                                value=""
                              />
                            </div>
                          </Col>
                          <Col md="6">
                            <div class="mb-3 form-fileds">
                              <label
                                for="exampleInputPassword1"
                                required
                                class="form-label"
                              >
                                Email
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputPassword1"
                                required
                                value=""
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
                              <input
                                type="Number"
                                class="form-control"
                                id="exampleInputPassword1"
                                required
                                value=""
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
                                type="text"
                                class="form-control"
                                id="exampleInputPassword1"
                                required
                                value=""
                              />
                            </div>
                          </Col>
                          <Col md="6">
                            <div class="mb-3 form-fileds">
                              <label
                                for="exampleInputPassword1"
                                class="form-label"
                              >
                                Interests
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputPassword1"
                                required
                                value=""
                              />
                            </div>
                          </Col>
                          <Col md="6">
                            <div class="mb-3 form-fileds">
                              <label
                                for="exampleInputPassword1"
                                class="form-label"
                              >
                                Date Of Birth
                              </label>
                              <input
                                type="date"
                                class="form-control"
                                id="exampleInputPassword1"
                                required
                                value=""
                              />
                            </div>
                          </Col>
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
export default AddPost;
