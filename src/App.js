import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { onAuthStateChanged } from "firebase/auth";

import { selectCurrentUser } from "./redux/user/userSelector";
import { auth } from "./firebase/firebase.utilits";
import { setCurrentUser } from "./redux/user/userActions";
import ProtectedRoute from "./components/protected-route/protected-route";

import Header from "./components/header/header";
import Home from "./pages/homePage/home";
import Spinner from "./components/spinner/spinner";

import { GlobalStyled } from "./globalStyled.js";
import ResetPassword from "./pages/resetpassword/resetpassword";
import ErrorBoundary from "./pages/error-boundray/error-boundary";

const Checkout = lazy(() => import("./pages/checkout/checkout"));
const ForgetPassword = lazy(() =>
  import("./pages/forget-password/forget-password")
);
const SignIn = lazy(() => import("./pages/signIn/signIn"));
const SignUp = lazy(() => import("./pages/register/register"));
const Shop = lazy(() => import("./pages/shop/shop"));

// let unsubscribe = null;
const App = ({ setCurrentUser }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null);
    });
    return () => {
      unsubscribe();
    };
  }, [setCurrentUser]);

  return (
    <div>
      <GlobalStyled />
      <Header />
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />

            <Route
              path='/register'
              element={
                <ProtectedRoute>
                  <SignUp />
                </ProtectedRoute>
              }
            />

            <Route
              path='/forget-password'
              element={
                <ProtectedRoute>
                  <ForgetPassword />
                </ProtectedRoute>
              }
            />

            <Route
              path='/reset-password'
              element={
                <ProtectedRoute>
                  <ResetPassword />
                </ProtectedRoute>
              }
            />
            {/* <ProtectedRoute path='/signin' element={<SignIn />} />
        <ProtectedRoute path='/register' element={<SignUp />} />
        <ProtectedRoute path='/forget-password' element={<ForgetPassword />} />
      <ProtectedRoute path='/reset-password' element={<ResetPassword />} /> */}
            <Route path='/shop/*' element={<Shop />} />
            <Route
              path='/checkout'
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
