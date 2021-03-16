import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../services/authService";
import logo from "assets/img/logo.png";
import "assets/scss/auth/login.scss?v=1.2.0";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { loading } = userSignin;
  const onLoginRequest = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  return (
    <>
      <div className="wrapper">
        <div className="login-wrap">
          <div className="login-box">
            <div className="login-box-formbox">
              <div className="login-box-login">
                <div className="img-logo">
                  <h3>
                    Book My Workers
                  </h3>
                </div>

                <form onSubmit={onLoginRequest}>
                  <div className="form-group">
                    <label htmlFor="email"> E-Mail</label>
                    <input
                      type="email"
                      name="email"
                      pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
                      className="input-email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password"> Password</label>
                    <input
                      type="password"
                      name="password"
                      className="input-password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <input
                      disabled={loading ? true : false}
                      type="submit"
                      value="Login"
                      class="btn"
                    />
                  </div>
                </form>
              </div>
              {/* <div class="login-box-signup">
                Don't have an account? <a href="#">Sign Up</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
