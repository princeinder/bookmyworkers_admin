import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Admin from "../../layouts/Admin";

export default function AdminRoute({ children, ...rest }) {
  const userSignin = useSelector((state) => state.userSignin);
  if (userSignin)
    return <Route path="/auth" render={(props) => <Admin {...props} />} />;
  return <Redirect to="/auth/login" />;
}
