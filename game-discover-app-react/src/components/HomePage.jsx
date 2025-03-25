import React, { useState, useEffect } from "react";
import Wishlist from "./Wishlist";
import Review from "./Review";
import '../App.css';
import '../index.css';
import video from '/public/video/gamepad.mp4';

import Header from "./Header";
import Footer from "./Footer";

export default function HomePage() {
    

    return (
        <>
        <div className="header">
            <Header/>
        </div>
        <div>
            <video width="640" height="500" loop autoPlay muted>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
        <div className="buttons-container">
        <button className="signup-btn">Sign Up</button>
        <button className="login-btn">Login</button>
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