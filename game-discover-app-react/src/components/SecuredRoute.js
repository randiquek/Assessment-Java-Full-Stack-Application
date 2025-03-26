import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const SecuredRoute = ({ children, authority }) => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <Navigate to="/" />;
    }

    if (authority && user.authority !== authority) {
        return <Navigate to="/" />;
    }

    return children;
};

export default SecuredRoute;

