import { useContext } from "react";
import { v4 } from "uuid";
import { NotificationContext } from ".";

const useNotification = () => {
  const dispatch = useContext(NotificationContext);

  return (props) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        ...props,
      },
    });
  };
};

export default useNotification;