import React, { useState } from "react";

// import { Link } from "react-router-dom";

import './header.css';


const Header = () => {

    const [Header, setHeader] = useState(false);

    const changeBg = () => {
        if(window.scrollY >=70) {
            setHeader(true);
        } else {
            setHeader(false)
        };
    }
    window.addEventListener("scroll", changeBg);

    return (
        <div className={Header ? "header2" :"header" }>
            <div className="logo-header">
                <img src="https://www.gifservice.fr/img/gif-vignette-small/05b060bc472184e54516086d7d75f130/13738-1999-food-fast-food-restaurant-pizza-pizza-hut-1999.gif" alt="iocn" />
            </div>
            <nav className="navbar">
                <li className="nav-list">Home</li>
                <li className="nav-list">About Us</li>
                <li className="nav-list">Produts</li>
                <li className="nav-list">Contact us</li>
                <li className="nav-list">Login</li>
            </nav>
        </div>
    );
};

export default Header;