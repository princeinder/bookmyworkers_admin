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
import "assets/scss/detail.scss";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col,  Table } from "reactstrap";

class Viewpost extends React.Component {
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
{/* <Col md="3">
  <div class="mb-3 img">
    <div className="profile-img">
        <figure>
        <img src={require("assets/img/profile1.png")}    ></img>
        </figure>
    </div>
  </div>
  </Col> */}
  
  <Col md="12">
      <Row>
      <Col md="6">  
  <div class="mb-3 form-fileds">
    <label for="exampleInputPassword1" class="form-label">User Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" value="Mick" disabled/>
  </div>

  </Col>
      <Col md="6">  
  <div class="mb-3 form-fileds">
    <label for="exampleInputPassword1" class="form-label">Post Time</label>
    <input type="number" class="form-control" id="exampleInputPassword1" value="03/12/2020" disabled/>
  </div>

  </Col>
      <Col md="6">  
  <div class="mb-3 form-fileds">
    <label for="exampleInputPassword1" class="form-label">Post Type</label>
    <input type="text" class="form-control" id="exampleInputPassword1" value="Live" disabled/>
  </div>

  </Col>
      <Col md="6">  
  <div class="mb-3 form-fileds">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="text" class="form-control" id="exampleInputPassword1" value="C-123 Street" disabled/>
  </div>

  </Col>
      <Col md="6">  
  <div class="mb-3 form-fileds">
    <label for="exampleInputPassword1" class="form-label">Interested</label>
    <input type="number" class="form-control" id="exampleInputPassword1" value="15" disabled/>
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
  }
}

export default Viewpost;
