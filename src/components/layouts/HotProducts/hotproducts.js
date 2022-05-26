import React from "react";

import './hotproducts.css';

import styled, { keyframes } from "styled-components";

import bounce from "react-animations/lib/bounce";

import zoomIn from "react-animations/lib/zoom-in";

const HotProducts = () => {

    return (
        <div>
            (<div className="hot-produtcs">
                <div className="title">
                    <Bounce><h2>Our Most Popular Deals</h2></Bounce>
                </div>
                <div className="products-main">
                    <Swing className="produtcs">
                        <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/one-plus-one.0607352b2160a25a415a9f1985cc6d4f.1.jpg" className="deal" alt="icon" />
                    </Swing>
                    <Swing className="produtcss">
                        <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/one-plus-one-personal-san-francisco-style-meal-for-2.9347899b074e3f11e79698d056356262.1.jpg" className="deal" alt="icon" />
                    </Swing>
                </div>
            </div>
        </div>
    );
};

export default HotProducts;


const Bounce = styled.div`animation: 4s ${keyframes`${bounce}`} ease`;

const Swing = styled.div`animation: 4s ${keyframes`${zoomIn}`} ease`;