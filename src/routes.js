import Login from "views/Auth/Login.js";
import Forget from "views/Auth/Forget";
import ManageCompanies from "views/Dashboard/Companies/ManageCompanies";
import EditCompany from "views/Dashboard/Companies/EditCompany";
import ViewCompany from "views/Dashboard/Companies/ViewCompany";
var routes = [
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-bank",
    component: Login,
    layout: "/auth",
    protected: "auth",
    iconShow: true,
  },

  {
    path: "/forget",
    name: "Forget Password",
    icon: "nc-icon nc-bank",
    component: Forget,
    layout: "/auth",
    protected: "auth",
    iconShow: true,
  },


  {
    path: "/manageuser/list",
    name: "Manage Companies",
    icon: "bi bi-people-fill",
    component: ManageCompanies,
    layout: "/admin",
    protected: "admin",
    iconShow: true,
  },

  {
    path: "/manageuser/edituser/:userid",
    name: "Add User",
    icon: "bi bi-person-plus-fill",
    component: EditCompany,
    layout: "/admin",
    protected: "admin",
    iconShow: false,
  },
 
];
export default routes;
