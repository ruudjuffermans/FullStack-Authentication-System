import React, { useState } from "react";
import Icon from "../../components/Icon";

export const NotificationWrapper = ({ children }) => {
  return (
    <div className="fixed top-20 right-4 w-[350px] overflow-visible z-50">
      {children}
    </div>
  );
};

const Notification = ({ dispatch, id, status, message }) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const handleStartTimer = () => {
    const i = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(i);
        return prev;
      });
    }, 20);

    setIntervalID(i);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
        id: id,
      });
    }, 400);
  };

  React.useEffect(() => {
    if (width === 100) {
      handleCloseNotification();
    }
  }, [width]);

  React.useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`relative w-[350px] h-[70px] mb-4 rounded-md p-1 shadow-md opacity-95 animate-slide-in ${
        exit ? "animate-slide-out" : ""
      } ${{
        info: "bg-blue-500",
        warning: "bg-yellow-500",
        success: "bg-green-500",
        error: "bg-red-500",
      }[status]}`}
    >
      <span
        onClick={() => handleCloseNotification()}
        className="absolute top-0 right-0 w-5 h-5 m-1 rounded-full bg-black/20 text-white/70 cursor-pointer flex items-center justify-center text-xl font-bold"
      >
        <Icon size={"20px"} name={"close"} />
      </span>
      <span className="w-11 h-11 m-1 rounded-full bg-white/30 text-black/30 flex items-center justify-center">
        <Icon size={"44px"} name={"check_circle"} />
      </span>
      <div className="flex items-center justify-center h-full px-2">
        <span className="text-white font-semibold text-lg text-shadow">
          {message}
        </span>
        <div className="h-1 bg-gray-300" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export default Notification;
