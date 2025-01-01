import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../../context/auth";

const AppLayout = ({ routes }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  // useEffect(() => {
  //   const currentRoute = routes.find((route) => route.path === location.pathname);

  //   if (currentRoute?.requiresAuth && !isLoggedIn) {
  //     setShowModal(true);
  //   } else {
  //     setShowModal(false);
  //   }
  // }, [location, routes, isLoggedIn]);

  const handleRedirectToLogin = () => {
    setShowModal(false);
    navigate("/login", { state: { from: location.pathname } });
  };

  return (
    <>
      <Outlet />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Authentication Required</h2>
            <p>You need to log in to access this page.</p>
            <button onClick={handleRedirectToLogin}>Go to Login</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AppLayout;
