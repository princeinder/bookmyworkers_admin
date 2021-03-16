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

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
               
                <CardBody>
                <div class="but_sell_tab">
            <ul class="nav nav-tabs">
                <li><a data-toggle="tab" href="#tab1" class="active">Contact Support </a></li>
                <li><a data-toggle="tab" href="#tab2">Legal</a></li>
                <li><a data-toggle="tab" href="#tab3">Privacy policy</a></li>
                <li><a data-toggle="tab" href="#tab4">FAQs</a></li>
            </ul>
            <div class="tab-content">
                <div id="tab1" class="tab-pane  active">
                    
                      <img src={require("assets/img/cms.PNG")} className="w-100"></img>
                      <div className="save-submit">
  <button className="btn btn-primary">Update</button>
  </div>
                      </div>
                <div id="tab2" class="tab-pane fade ">
                    
                      <img src={require("assets/img/cms.PNG")} className="w-100"></img>
                      <div className="save-submit">
  <button className="btn btn-primary">Update</button>
  </div>
                      </div>
                <div id="tab3" class="tab-pane fade ">
                    
                      <img src={require("assets/img/cms.PNG")} className="w-100"></img>
                      <div className="save-submit">
  <button className="btn btn-primary">Update</button>
  </div>
                      </div>
                      </div>
                      </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Typography;
