import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

class User extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader className="head">
                  <CardTitle tag="h5">Total Users </CardTitle>
                  <div className="filter dashbaord-filter">
                    <div className="inner-filter">
                      <div className="slect-user">
                        <div class="input-group">
                          <select
                            class="form-select"
                            id="inputGroupSelect04"
                            aria-label="Example select with button addon"
                          >
                            <option selected>All</option>
                            <option value="1">Weekly</option>
                            <option value="2">Monthly</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <img src={require("assets/img/graph.png")}></img>
                {/* <CardBody>
                  <Line
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody> */}
                {/* <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
