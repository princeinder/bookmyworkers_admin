/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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

class History extends React.Component {
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
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Send Request</th>
                        <th>Coming Request</th>
                        <th>Approved Request</th>
                        <th>Total Dates</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>20</td>
                        <td>30</td>
                        <td>15</td>
                        <td>17</td>
                      </tr>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>20</td>
                        <td>30</td>
                        <td>15</td>
                        <td>17</td>
                      </tr>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>20</td>
                        <td>30</td>
                        <td>15</td>
                        <td>17</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default History;
