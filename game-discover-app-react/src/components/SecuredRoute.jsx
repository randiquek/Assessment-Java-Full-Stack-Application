import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const SecuredRoute = ({ component, authority }) => {
    // const { user } = useContext(UserContext);
    const user = localStorage.getItem('authority');
    console.log(localStorage.getItem('authority'), authority);

    if (!user) {
        return <Navigate to="/" />;
    }

    if (authority && !authority.includes(user)) {
        return <Navigate to="/" />;
    }
    console.log(component);
    return component;
};

export default SecuredRoute;

