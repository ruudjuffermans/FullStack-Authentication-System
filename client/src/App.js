import {AuthProvider} from "./context/auth";
import NotificationProvider from "./context/notification";
import Router from "./router";

const App = () => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router />
      </NotificationProvider>
    </AuthProvider>

  )
};

export default App;