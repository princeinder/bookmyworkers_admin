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
import "assets/scss/manage-post.scss";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col,  Table } from "reactstrap";

class Addsports extends React.Component {
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
        <img src={require("assets/img/profile1.png")}></img>
        <div className="choose-file">
            <input _ngcontent-orq-c118="" type="file" id="myfile" name="myfile"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg></div>
    
        </figure>
       
  </div>
  </div>
  </Col>
  
  <Col md="9">
      <Row>
      <Col md="6">  
  <div class="mb-3 form-fileds">
    <label for="exampleInputPassword1" class="form-label">Sports Category</label>
    <div className="slect-user">
                    <div class="input-group">
                      <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option selected>Criket</option>
                        <option value="1">Basketball</option>
                        <option value="2">Bollyball</option>
                        
                      </select>
                    </div>
                  </div>
  </div>

  </Col>
      <Col md="6">  
  <div class="mb-3 form-fileds">
    <label for="exampleInputPassword1" class="form-label">Sports Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" value="Criket" />
  </div>

  </Col>
      <Col md="6">  
  <div class="mb-3 form-fileds">
    <label for="exampleInputPassword1" class="form-label">Created Date</label>
    <input type="Number" class="form-control" id="exampleInputPassword1" value="03-20/2019" />
  </div>

  </Col>
     
  </Row>
  <div className="save-submit">
  <button className="btn btn-primary">Save</button>
  </div>
</Col>

</Row>

</form>       
     </CardBody> </div>
              </Card>
            </Col>
            
          </Row>
         
        </div>
      </>
    );
  }
}

export default Addsports;
