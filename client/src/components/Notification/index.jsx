import React, { useEffect, useState, useCallback, useRef } from "react";
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
  const intervalRef = useRef(null); // Use ref for interval ID

  const handleStartTimer = useCallback(() => {
    if (intervalRef.current) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }
        clearInterval(intervalRef.current);
        intervalRef.current = null; // Clear interval ref
        return prev;
      });
    }, 20);
  }, []);

  const handlePauseTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const handleCloseNotification = useCallback(() => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
        id: id,
      });
    }, 400);
  }, [dispatch, id, handlePauseTimer]);

  useEffect(() => {
    if (width === 100) {
      handleCloseNotification();
    }
  }, [width, handleCloseNotification]);

  useEffect(() => {
    handleStartTimer();
    return () => {
      handlePauseTimer(); // Clear interval on unmount
    };
  }, [handleStartTimer, handlePauseTimer]);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`relative w-[350px] h-auto p-2 mb-2 rounded-lg shadow-md opacity-95 animate-slide-in ${
        exit ? "animate-slide-out" : ""
      } ${{
        info: "bg-blue-500",
        warning: "bg-yellow-500",
        success: "bg-green-500",
        error: "bg-red-500",
      }[status]}`}
    >
      {/* Close Button */}
      <span
        onClick={handleCloseNotification}
        className="absolute top-2 right-2 w-5 h-5 rounded-full bg-black/20 text-white/70 cursor-pointer flex items-center justify-center text-xl"
      >
        <Icon size={"14px"} name={"close"} />
      </span>

      {/* Message Content */}
      <div className="flex items-start">
        {/* Status Icon */}
        <span className="w-8 h-8 flex-shrink-0 rounded-full bg-white/30 text-white/90 flex items-center justify-center mr-3">
          <Icon size={"24px"} name={"check_circle"} />
        </span>

        {/* Text */}
        <div className="flex-1">
          <p className="text-white text-sm font-semibold">{message}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-300 mt-3 rounded overflow-hidden">
        <div
          className="h-full bg-white"
          style={{ width: `${width}%`, transition: "width 0.1s linear" }}
        ></div>
      </div>
    </div>
  );
};

export default Notification;
