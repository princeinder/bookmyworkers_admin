import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "../../../assets/scss/detail.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";

import { getSingleUser } from "services/userService";
import { useHistory, useParams } from "react-router";
import Loader from "../../../utils/loader/Loader";

const ViewUser = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const userid = params.userid;
  const userSignin = useSelector((state) => state.userSignin);
  const { authState } = userSignin;
  const userData = useSelector((state) => state.userData);
  const { loading, user } = userData;
  useEffect(() => {
    dispatch(getSingleUser(authState, userid));
  }, [authState, userid]);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="back-option">
                <button
                  className="btn btn-primary"
                  onClick={() => history.goBack()}
                >
                  Back
                </button>
              </CardHeader>
              {loading ? (
                <Loader isActive={loading} />
              ) : (
                <div className="edit-detail-wrap">
                  <CardBody>
                    <form>
                      <Row>
                        <Col md="3">
                          <div class="mb-3 img">
                            <div className="profile-img">
                              <figure>
                                <img
                                  src={
                                    user.baseProfilePic
                                      ? "http://www.appgrowthcompany.com:6030" +
                                        user.baseProfilePic
                                      : "/assets/img/profile1.png"
                                  }
                                ></img>
                              </figure>
                              <div className="gallary-img">
                                {user.gallaryProfilePic &&
                                  user.gallaryProfilePic.map((gimg) => (
                                    <figure>
                                      <img
                                        src={
                                          gimg
                                            ? "http://www.appgrowthcompany.com:6030" +
                                              gimg
                                            : "/assets/img/profile1.png"
                                        }
                                      />
                                    </figure>
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
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  value={user.name}
                                  disabled
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
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  value={user.email}
                                  disabled
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
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  value={user.countryCode + user.phoneNumber}
                                  disabled
                                />
                              </div>
                            </Col>
                            <Col md="6">
                              <div class="mb-3 form-fileds">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Gender
                                </label>
                                <select
                                  type="Number"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  value={user.gender}
                                  disabled
                                >
                                  <option value="0">Male</option>
                                  <option value="1">Female</option>
                                </select>
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
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  value={moment(user.dob).format("DD-MM-YYYY")}
                                  disabled
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
                                  value="C-123 Street"
                                  value={user.address}
                                  disabled
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
                                  value={
                                    user.interest &&
                                    user.interest
                                      .map((inter) => inter.name)
                                      .join(" , ")
                                  }
                                  disabled
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

export default ViewUser;
