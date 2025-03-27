import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const SecuredRoute = ({ component, authority }) => {
    // const { user } = useContext(UserContext);
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);

    if (!user) {
        return <Navigate to="/" />;
    }

    if (authority && !authority.includes(user.authority)) {
        return <Navigate to="/" />;
    }
    console.log(component);
    return component;
};

export default SecuredRoute;

