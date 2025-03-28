import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import '../styles/Navbar.css';

export default function Navbar() {
    const {user} = useContext(UserContext);

    return (
        <nav className="navbar">
            {user && user.authority === "USER" && (
                <div>
                    <Link to="/view-games" className="navbar-link">View Games</Link>
                    <Link to={`/user-profile/${user.username}`} className="navbar-link">My Profile</Link>
                </div>
            )}
            {user && user.authority === "ADMIN" && (
                <div>
                    <Link to="/admin" className="navbar-link">Admin Dashboard</Link>
                </div>
            )}
        </nav>
    );
}