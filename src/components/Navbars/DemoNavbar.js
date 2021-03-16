import React from "react";
import { connect } from "react-redux";
import { logout } from "../../services/authService";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Breadcrumb,
  BreadcrumbItem,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";
import ResetPassword from "components/ModalPopup/ResetPassword";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isModalOpen: false,
      dropdownOpen: false,
      color: "transparent",
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = React.createRef();
  }
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent",
      });
    } else {
      this.setState({
        color: "dark",
      });
    }
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  openResetModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeResetModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "dark",
      });
    } else {
      this.setState({
        color: "transparent",
      });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.sidebarToggle.current.classList.toggle("toggled");
    }
  }
  render() {
    return (
      <Navbar
        color={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "dark"
            : this.state.color
        }
        expand="lg"
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
              (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid>
          {/* <div>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#">Library</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
          </div> */}
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref={this.sidebarToggle}
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            {/* <NavbarBrand href="/">{this.getBrand()}</NavbarBrand> */}
          </div>

          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-end"
          >
            {/* <form>
              <InputGroup className="no-border">
                <Input placeholder="Search..." />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form> */}

            <Nav navbar>
              <ResetPassword
                closeResetModal={this.closeResetModal}
                isModalOpen={this.state.isModalOpen}
              />

              <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={(e) => this.dropdownToggle(e)}
              >
                <DropdownToggle caret nav>
                  <i className="nc-icon nc-circle-10" />
                  <p>
                    <span className="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a">Profile</DropdownItem>
                  <DropdownItem tag="a" onClick={() => this.openResetModal()}>
                    Reset Password
                  </DropdownItem>

                  <DropdownItem
                    tag="a"
                    onClick={() => this.props.logoutAdmin()}
                  >
                    Logout
                  </DropdownItem>
                  {/* <DropdownItem tag="a">Something else here</DropdownItem> */}
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <Link to="#pablo" className="nav-link btn-rotate">
                  <i className="nc-icon nc-bell-55" />

                  <p>
                    <span className="d-lg-none d-md-block">Notification</span>
                  </p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="#pablo" className="nav-link btn-rotate">
                  <i className="nc-icon nc-settings-gear-65" />
                  <p>
                    <span className="d-lg-none d-md-block">Setting</span>
                  </p>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: "LOGOUT_USER" }),
  };
};
const mapStateToProps = (state) => ({ userSignin: state.userSignin });
export default connect(mapStateToProps, mapDispatchToProps)(Header);
