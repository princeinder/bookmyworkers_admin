import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Auth from "../../layouts/Auth";

export default function AuthRoute({ children, ...rest }) {
  const userSignin = useSelector((state) => state.userSignin);
  if (!userSignin)
    return <Route path="/auth" render={(props) => <Auth {...props} />} />;

  return <Redirect to="/admin/dashboard" />;
}
