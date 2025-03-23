import React, { useState, useEffect } from "react";
import Wishlist from "./Wishlist";
import Review from "./Review";
import '../App.css';
import '../index.css';

import Header from "./Header";
import Footer from "./Footer";

export default function HomePage() {
    

    return (
        <>
        <div classname="header">
            <Header/>
        </div>
        <div className="buttons-container">
        <button className="signup-btn">Sign Up</button>
        <button className="login-btn">Login</button>
        </div>
        <div className="top-games-container">
            <h2 className="top-games-header">Top Featured Games</h2>
            <p>This is some text until I figure out how to implement a card component</p>
        </div>
        <Footer/>
        </>
    )
}