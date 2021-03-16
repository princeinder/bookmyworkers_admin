import React from "react";
import "views/Dashboard/SubActivities/node_modules/assets/scss/manage-post.scss";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader className="back-option">
                  <button className="btn btn-primary">Back</button>
                </CardHeader>
                <div className="edit-detail-wrap">
                  <CardBody>
                    <form>
                      <Row>
                        <Col md="3">
                          <div class="mb-3 img">
                            <div className="profile-img">
                              <figure>
                                <img
                                  src={require("assets/img/profile1.png")}
                                ></img>
                                <div className="choose-file">
                                  <input
                                    _ngcontent-orq-c118=""
                                    type="file"
                                    id="myfile"
                                    name="myfile"
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
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  value="Mick"
                                />
                              </div>
                            </Col>
                            <Col md="6">
                              <div class="mb-3 form-fileds">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  value="Jones"
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
                                  value="+512533"
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
                                />
                              </div>
                            </Col>
                            <Col md="6">
                              <div class="mb-3 form-fileds">
                                <label
                                  for="exampleInputPassword1"
                                  class="form-label"
                                >
                                  Hobbies
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  value="Criket, Cinema"
                                />
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </form>
                  </CardBody>{" "}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
