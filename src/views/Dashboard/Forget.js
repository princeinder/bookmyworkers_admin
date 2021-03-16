import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import "views/Auth/node_modules/assets/scss/auth/login.scss?v=1.2.0";
// reactstrap components

class Forget extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div ref={this.mainPanel}>
            <div class="login-wrap">
              <div class="login-box">
                <div class="login-box-formbox">
                  <div class="login-box-login">
                    <div class="img-logo">
                      <figure>
                        <img src={require("assets/img/logo.png")} alt="" />
                      </figure>
                    </div>

                    <form action="#">
                      <div className="form-group">
                        <label for="email"> E-Mail</label>
                        <input
                          type="email"
                          name="email"
                          class="input-email"
                          required
                        />
                      </div>
                      {/* <div>
              <label for="password"> Password</label>
              <input type="password" name="password" class="input-password" />
            </div> */}
                      <div>
                        <input
                          type="button"
                          value="Forget Password"
                          class="btn"
                        />
                      </div>
                    </form>
                  </div>
                  {/* <div class="login-box-signup">
          Don't have an account? <a href="#">Sign Up</a>
        </div> */}
                </div>
                <div class="login-box-quotebox">
                  <div class="quote-container">
                    {/* <div class="quote">Make a Dream.</div>
          <div class="quote-small">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            repellendus cumque voluptatum animi, illum veniam?"
          </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Forget;
