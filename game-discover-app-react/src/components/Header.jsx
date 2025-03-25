import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default function Header() {

    return (
        <>
            <div className="header-text">
                <Link to="/" className="header-link">
                <h1>XDiscovery</h1>
                </Link>
            </div>
            
        </>
    );
}