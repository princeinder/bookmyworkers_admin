import React, { useRef } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import JoditEditor from "jodit-react";
import { useState } from "react";
const Cms = () => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <div class="but_sell_tab">
                  <ul class="nav nav-tabs">
                    <li>
                      <a data-toggle="tab" href="#tab1" class="active">
                        Contact Support
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab2">
                        Legal
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab3">
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab4">
                        FAQs
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="tab1" class="tab-pane  active">
                      <JoditEditor
                        ref={register}
                        name="contact"
                        value={content}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={(newContent) => {}}
                      />
                      <div className="save-submit">
                        <button className="btn btn-primary">Update</button>
                      </div>
                    </div>
                    <div id="tab2" class="tab-pane fade ">
                      <JoditEditor
                        ref={register}
                        name="legal"
                        value={content}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={(newContent) => {}}
                      />
                      <div className="save-submit">
                        <button className="btn btn-primary">Update</button>
                      </div>
                    </div>
                    <div id="tab3" class="tab-pane fade ">
                      <JoditEditor
                        ref={register}
                        name="privacy"
                        value={content}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={(newContent) => {}}
                      />
                      <div className="save-submit">
                        <button className="btn btn-primary">Update</button>
                      </div>
                    </div>
                    <div id="tab4" class="tab-pane fade ">
                      <JoditEditor
                        ref={register}
                        name="faq"
                        value={content}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={(newContent) => {}}
                      />
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
};

export default Cms;
