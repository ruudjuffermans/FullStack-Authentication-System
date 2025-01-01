import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "../layouts/auth";
import AppLayout from "../layouts/app";

import Home from "../pages/Home";
import Profile from "../pages/Profile";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const ActivateAccount = lazy(() => import("../pages/ActivateAccount"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout routes={["/"]} />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/profile"} element={<Profile />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route
            path={"/login"}
            element={
              <Suspense>
                <Login />
              </Suspense>
            }
          />
          <Route
            path={"/register"}
            element={
              <Suspense>
                <Register />
              </Suspense>
            }
          />
          <Route
            path={"/activate-account"}
            element={
              <Suspense>
                <ActivateAccount />
              </Suspense>
            }
          />
          <Route
            path={"/forgot-password"}
            element={
              <Suspense>
                <ForgotPassword />
              </Suspense>
            }
          />
        </Route>
        <Route path={"*"} element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;