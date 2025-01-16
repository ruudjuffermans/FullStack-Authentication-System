import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import Card from "../../components/Card"
import Button from "../../components/Button";

const AppLayout = ({ routes }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [authBarrier, setAuthBarrier] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false); // New state to track initialization

  useEffect(() => {
    const currentRoute = routes.find((route) => route.pathname === location.pathname);

    console.log(currentRoute);

    if (currentRoute?.requiresAuth && !isLoggedIn) {
      setAuthBarrier(true);
    } else {
      setAuthBarrier(false);
    }

    setIsInitialized(true); // Mark as initialized after logic completes
  }, [routes, location.pathname, isLoggedIn]);

  const handleRedirectToLogin = () => {
    setAuthBarrier(false);
    navigate("/login", { state: { from: location.pathname } });
  };

  if (!isInitialized) {
    // Show a loader or nothing while initialization completes
    return <div>Loading...</div>;
  }

  return authBarrier ? (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <Card>
        <h2>Authentication Required</h2>
        <p>You need to log in to access this page.</p>
        <br/>
        <Button onClick={() => handleRedirectToLogin()}>Go to Login</Button>
    </Card>
    </div>
  ) : (
    <Outlet />
  );
};

export default AppLayout;
