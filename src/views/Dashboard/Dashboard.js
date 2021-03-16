import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { getDashboardData } from "../../services/dashboardService";
import "../../assets/scss/dashbaord.scss";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components

import Loader from "../../utils/loader/Loader";
import BarChart from "../../components/Charts/BarChart";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("week");
  const userSignin = useSelector((state) => state.userSignin);
  const { authState } = userSignin;
  const dashboardData = useSelector((state) => state.dashboardData);
  const { loading, dashboard } = dashboardData;
  // useEffect(() => {
  //   dispatch(getDashboardData(authState, search));
  // }, [authState, search]);

  return (
    <>
      <div className="content">
        <Loader isActive={!loading} />
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="nc-icon nc-single-02 text-warning" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="text-warning bi bi-people-fill"
                      >
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path
                          fillRule="evenodd"
                          d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                        />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Total users</p>
                      <CardTitle tag="p">
                        {!loading ? dashboard.users : ""}
                      </CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> All Users
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="text-success bi bi-heart-fill"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                      </svg>
                      {/* <i className="nc-icon nc-money-coins text-success" /> */}
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Matches</p>
                      <CardTitle tag="p">115</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" />
                  All Matches
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="text-danger bi bi-person-fill"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>

                      {/* <i className="nc-icon nc-single-02 text-danger" /> */}
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">New User</p>
                      <CardTitle tag="p">
                        {!loading ? dashboard.newUsers : ""}
                      </CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-clock" /> Today
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="nc-icon nc-favourite-28 text-primary" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="text-primary bi bi-heart-fill"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                      </svg>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">New matches</p>
                      <CardTitle tag="p">26</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-clock" /> In the last day
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="">
              <CardHeader className="head d-flex justify-content-between">
                <CardTitle tag="h5">Total Users </CardTitle>
                <div className="filter dashbaord-filter">
                  <div className="inner-filter">
                    <div className="slect-user">
                      <div className="input-group">
                        <select
                          className="form-select"
                          id="inputGroupSelect04"
                          aria-label="Example select with button addon"
                          onChange={(e) => setSearch(e.target.value)}
                          defaultChecked={search}
                        >
                          <option value="week">Weekly</option>
                          <option value="month">Monthly</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <BarChart
                  legend="users"
                  label={!loading ? dashboard.userGraph.days : ""}
                  data={!loading ? dashboard.userGraph.count : ""}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader className="head d-flex justify-content-between">
                <CardTitle tag="h5">Total Activities </CardTitle>
                <div className="filter dashbaord-filter">
                  <div className="inner-filter">
                    <div className="slect-user">
                      <div className="input-group">
                        <select
                          className="form-select"
                          id="inputGroupSelect04"
                          aria-label="Example select with button addon"
                          onChange={(e) => setSearch(e.target.value)}
                          defaultChecked={search}
                        >
                          <option value="week">Weekly</option>
                          <option value="month">Monthly</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <BarChart
                  legend="activities"
                  label={!loading ? dashboard.userGraph.days : ""}
                  data={!loading ? dashboard.userGraph.count : ""}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Email Statistics</CardTitle>
                  <p className="card-category">Last Campaign Performance</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> Opened{" "}
                    <i className="fa fa-circle text-warning" /> Read{" "}
                    <i className="fa fa-circle text-danger" /> Deleted{" "}
                    <i className="fa fa-circle text-gray" /> Unopened
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" /> Number of emails sent
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                    <i className="fa fa-circle text-warning" /> BMW 5 Series
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row> */}
      </div>
    </>
  );
};

export default withRouter(Dashboard);
