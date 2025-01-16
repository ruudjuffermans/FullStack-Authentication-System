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

const appRoutes = [
  {pathname: "/", element: <Home />, requiresAuth: false},
  {pathname: "/profile", element: <Profile/>, requiresAuth: true}
]

const authRoutes = [
  { pathname: "/login", element: <Login /> },
  { pathname: "/register", element: <Register /> },
  { pathname: "/forgot-password", element: <ForgotPassword /> },
  { pathname: "/activate-account", element: <ActivateAccount /> },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout routes={appRoutes} />}>
          {appRoutes.map((route) => <Route key={route.pathname} path={route.pathname} element={route.element} />)}
        </Route>
        <Route element={<AuthLayout />}>
          {authRoutes.map((route) => (
            <Route
              key={route.pathname}
              path={route.pathname}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {route.element}
                </Suspense>
              }
            />
          ))}
        </Route>
        <Route path={"*"} element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;