import React from "react";

import styled, { keyframes } from "styled-components";

import './content.css';

import bounce from "react-animations/lib/bounce";

// import rollIn from "react-animations/lib/roll-in";

// import rollOut from "react-animations/lib/roll-out";

import rotateInDownLeft from "react-animations/lib/rotate-in-down-left";

import rotateInDownRight from "react-animations/lib/rotate-in-down-right";

// import pulse from "react-animations/lib/pulse";

import flash from "react-animations/lib/flash";

const Bounce = styled.div`animation: 4s ${keyframes`${bounce}`} ease`;

const Pulse = styled.div`animation: 2s ${keyframes`${flash}`} ease`;

const RollIn = styled.div`animation: 3s ${keyframes`${rotateInDownLeft}`} ease`;

const RollOut = styled.div`animation: 3s ${keyframes`${rotateInDownRight}`} ease`;

const Content = () => {
    return (
        <div className="main-content">
            <div className="content-title">
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
        </div>
    );
};

export default Content;