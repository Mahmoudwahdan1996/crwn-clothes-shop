import React from "react";
import { connect } from "react-redux";
import { Navigate , useLocation} from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/userSelector";

const ProtectedRoute = (props) => {
  const { currentUser, children  } = props;
  const location =useLocation()
  console.log(location.search)

  if (
    location.pathname === "/signin" ||
    location.pathname === "/register" ||
    location.pathname === "/forget-password" ||
    location.pathname === "/reset-password"
  ) {
    return currentUser ? (
      <Navigate to={location.state?.from ?? "/"} />
    ) : children
  }

  return currentUser ? children : (
    <Navigate
      to="/signin"
      replace
      state={{from: location.pathname} }
    />
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ProtectedRoute);
