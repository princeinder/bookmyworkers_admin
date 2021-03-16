import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import routes from "routes.js";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info",
    };
    this.mainPanel = React.createRef();
  }
  componentDidMount(){
    if(this.props.userSignin.authState ){
      this.props.history.push('/admin/dashboard')
    }
  }
  componentDidUpdate(e) {
    if(this.props.userSignin.authState ){
      this.props.history.push('/admin/dashboard')
    }
  }
  handleActiveClick = (color) => {
    this.setState({ activeColor: color });
  };
  handleBgClick = (color) => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <Switch>
        {routes.map((prop, key) => {
          if (prop.protected === "auth") {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          }
        })}
      </Switch>
    );
  }
}

const mapStateToProps = state => ({ userSignin: state.userSignin })
export default connect(
  mapStateToProps
)(Auth);
