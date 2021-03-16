import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";
import { logout } from "services/authService";

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info",
    };
    this.mainPanel = React.createRef();
  }
  componentDidMount() {
    // if (!this.props.userSignin.authState) {
    //   this.props.history.push("/auth/login");
    // }
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (!this.props.userSignin.authState) {
      this.props.history.push("/auth/login");
    }
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (!this.props.userSignin.authState) {
      this.props.history.push("/auth/login");
    }
  }
  handleActiveClick = (color) => {
    this.setState({ activeColor: color });
  };
  handleBgClick = (color) => {
    this.setState({ backgroundColor: color });
  };
  logoutAdmin = () => {
    this.props.logoutUser();
    this.props.history.push("/auth/login");
  };
  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoNavbar {...this.props} logoutAdmin={this.logoutAdmin} />
          <Switch>
            {routes.map((prop, key) => {
              if (prop.protected === "admin") {
                return (
                  <Route
                    {...this.props}
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              }
            })}
          </Switch>
          <Footer fluid />
        </div>
        <FixedPlugin
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
          handleActiveClick={this.handleActiveClick}
          handleBgClick={this.handleBgClick}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logout()),
  };
};
const mapStateToProps = (state) => ({ userSignin: state.userSignin });
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
