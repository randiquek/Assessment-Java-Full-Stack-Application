import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Logout from './Logout';
import Navbar from './Navbar';
import '../styles/Header.css';

export default function Header() {
    const { user } = useContext(UserContext);

    return (
        <div className="header-text">
            <Link to="/" className="header-link">
                <h1>XDiscovery</h1>
            </Link>
            <div className="header-actions">
                {user ? (
                        <div className="header-user">
                            <span>Welcome, {user.username}!</span>
                            <Logout />
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <Navbar />
            </div>
    );
}