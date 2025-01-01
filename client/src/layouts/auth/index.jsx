import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Outlet context={123} />
        </div>
    );
};

export default AuthLayout;
