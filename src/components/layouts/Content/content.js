import React, { useState } from "react";

import styled, { keyframes } from "styled-components";

import './content.css';

import bounce from "react-animations/lib/bounce";

// import slideInLeft from "react-animations/lib/slide-in-left";

import flash from "react-animations/lib/flash";

import rollIn from "react-animations/lib/roll-in";

const Content = () => {

    const [product, setProduct] = useState(false);

    const animation = () => {
        if (window.scrollY >= 200) {
            setProduct(true);
        } else {
            setProduct(false)
        };
    }
    window.addEventListener("scroll", animation);
    return (
        <div>
        { product &&
            (
                <div className="main-content">
            <div className="title">
                <Bounce><h1>Products</h1></Bounce>
            </div>
            <div className="content-products">
                <div className="m-pizza">
                    <RollIn className="m-image">
                        <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1653470052/cropped-200-200-596343_ozrb2b.jpg" className="pizza" alt="icon" />
                    </RollIn>
                    <Pulse className="m-content">
                        Margherita Pizza
                    </Pulse>
                </div>
                <div className="i-pizza">
                    <RollIn className="i-image">
                        <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1653471341/cropped-200-200-888979_itsrgz.jpg" className="pizza" alt="icon" />
                    </RollIn >
                    <Pulse className="i-content">
                        Italian Pizza
                    </Pulse>
                </div>
                <div className="i-pizza">
                    <RollIn className="i-image">
                        <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1653473278/cropped-200-200-878386_aolrvz.jpg" className="pizza" alt="icon" />
                    </RollIn>
                    <Pulse className="i-content">
                        American Heat
                    </Pulse>
                </div>
            </div>
            <div className="contentt-products">
                <div className="m-pizza">
                    <RollOut className="m-image">
                        <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1653471558/cropped-200-200-895296_vw1dyo.jpg" className="pizza" alt="icon" />
                    </RollOut>
                    <Pulse className="m-content">
                        Cheese Blast
                    </Pulse>
                </div>
                <div className="i-pizza">
                    <RollOut className="i-image">
                        <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1653471805/cropped-200-200-350913_ojnnir.jpg" className="pizza" alt="icon" />
                    </RollOut>
                    <Pulse className="i-content">
                        Mushroom Olive Pizza
                    </Pulse>
                </div>
                <div className="i-pizza">
                    <RollOut className="i-image">
                        <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1653473320/cropped-200-200-286395_xeliol.jpg" className="pizza" alt="icon" />
                    </RollOut>
                    <Pulse className="i-content">
                        Mushroom Cheese Pizza
                    </Pulse>
                </div>
            </div>
        </div>)}
        </div>
    );
};

export default Content;



const Bounce = styled.div`animation: 4s ${keyframes`${bounce}`} ease`;

const Pulse = styled.div`animation: 5s ${keyframes`${flash}`} ease`;

const RollIn = styled.div`animation: 5s ${keyframes`${rollIn}`} ease`;

const RollOut = styled.div`animation: 5s ${keyframes`${rollIn}`} ease`;
