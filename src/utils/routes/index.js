import Dashboard from "views/Dashboard.js";
import Login from "views/Login.js";

import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import Edit from "views/Edit";
import Details from "views/Detail";
import Forget from "views/Forget";
import History from "views/History";
import Viewpost from "views/Viewpost";
import Addsports from "views/Addsports";
var routes = [
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-bank",
    component: Login,
    layout: "/auth",
    protected: "auth",
  },

  {
    path: "/forget",
    name: "Forget Password",
    icon: "nc-icon nc-bank",
    component: Forget,
    layout: "/auth",
    protected: "auth",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
    protected: "admin",
  },
  {
    path: "/history",
    name: "history",
    icon: "nc-icon nc-bank",
    component: History,
    layout: "/admin",
    protected: "admin",
  },
  {
    path: "/addsports",
    name: "addsports",
    icon: "nc-icon nc-bank",
    component: Addsports,
    layout: "/admin",
    protected: "admin",
  },
  {
    path: "/icons",
    name: "List",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
    protected: "admin",
  },
  {
    path: "/viewpost",
    name: "viewpost",
    icon: "nc-icon nc-diamond",
    component: Viewpost,
    layout: "/admin",
    protected: "admin",
  },
  {
    path: "/edit",
    name: "Edit",
    icon: "nc-icon nc-diamond",
    component: Edit,
    layout: "/admin",
    protected: "admin",
  },
  {
    path: "/detail",
    name: "Detail",
    icon: "nc-icon nc-diamond",
    component: Details,
    layout: "/admin",
    protected: "admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
    protected: "admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
    protected: "admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
    protected: "admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
    protected: "admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin",
    protected: "admin",
  },
];
export default routes;
