import React, { useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Wishlist from "./Wishlist";
import Review from "./Review";
import '../styles/HomePage.css';

import Header from "./Header";
import Footer from "./Footer";

export default function HomePage() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const handleSignUpClick = () => {
        navigate("/sign-up");
    };

    const handleLoginClick = () => {
        navigate("/login");
    };



    return (
        <>
        <div className="header">
            <Header/>
        </div>
        <div>
            
        </div>
        <div className="buttons-container">
            {!user && (
                <div>
                    <button className="signup-btn" onClick={handleSignUpClick}>Sign Up</button>
                    <button className="login-btn" onClick={handleLoginClick}>Login</button>
                </div>
            )}
        </div>
        <div className="top-games-container">
            <h2 className="top-games-header">Top Featured Games</h2>
            <div className="top-games-images">
                <img src="../public/images/marvelrivals.jpg" alt="Marvel Rivals" />
                <img src="../public/images/palworld.jpg" alt="Palworld" />
                <img src="../public/images/roblox.jpg" alt="Roblox" />
            </div>
        </div>
        <Footer/>
        </>
    )
}