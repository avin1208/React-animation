import React, {useState} from "react";

import './explore.css';

import bounce from "react-animations/lib/bounce";

import styled, { keyframes } from "styled-components";

import rubberBand from "react-animations/lib/rubber-band";

// import headShake from "react-animations/lib/head-shake";

// import fadeInUp from "react-animations/lib/fade-in-up";

import { fadeInLeft } from "react-animations";

// import fadeOutLeft from "react-animations/lib/fade-out-left";

// import tada from "react-animations/lib/tada";

const Explore = () => {

    const [explore, setExplore] = useState(false);

    const animation = () => {
        if (window.scrollY >= 1000) {
            setExplore(true);
        } else {
            setExplore(false)
        };
    }
    window.addEventListener("scroll", animation);
    return (
        <div>
            {
                explore &&
                (
                    <div className="explore">
                        <div className="title">
                            <Bounce><h1>Explore</h1></Bounce>
                        </div>
                        <div className="content-explore">
                            <HeadShake className="our-menu">
                                <div className="menu-icon">
                                    <img src="https://www.dominos.co.in/assets/menu.png" className="image-explore" alt="icon" />
                                </div>
                                <div className="menu-title">
                                    OUR MENU
                                </div>
                                <div className="menu-desc">
                                    Explore Our Range of Delicious Pizzas, delivered in 30 Minutes !!
                                </div>
                                <div className="menu-bottem">
                                    <Band>Discover Pizza</Band>
                                </div>
                            </HeadShake>
                            <HeadShake className="our-store">
                                <div className="store-icon">
                                    <img src="https://www.dominos.co.in/assets/store.png" className="image-explore" alt="icon" />
                                </div>
                                <div className="store-title">
                                    NEARBY STORE
                                </div>
                                <div className="store-desc">
                                    Find a Pizza Hut's Restaurant near your Home And Enjoy !!
                                </div>
                                <div className="store-bottem">
                                    <Band>Find Pizza Hut's Store </Band>
                                </div>
                            </HeadShake>
                            <HeadShake className="our-party">
                                <div className="party-icon">
                                    <img src="https://www.dominos.co.in/assets/birthday.png" className="image-explore" alt="icon" />
                                </div>
                                <div className="party-title">
                                    BIRTHDAY PARTY
                                </div>
                                <div className="party-desc">
                                    Celebrate the joy of birthday with Fresh & Hot pizzas !!
                                </div>
                                <div className="party-bottem">
                                    <Band>BOOK NOW</Band>
                                </div>
                            </HeadShake>
                            <HeadShake className="our-catering">
                                <div className="catering-icon">
                                    <img src="https://www.dominos.co.in/assets/catering.png" className="image-explore" alt="icon" />
                                </div>
                                <div className="catering-title">
                                    CATERING
                                </div>
                                <div className="catering-desc">
                                    Live Domino's Kitchen for weddings / corporate events !!
                                </div>
                                <div className="catering-bottem">
                                    <Band>BOOK NOW</Band>
                                </div>
                            </HeadShake>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Explore;



const HeadShake = styled.div`animation: 3s ${keyframes`${fadeInLeft}`} ease`;

const Band = styled.div`animation: 3s ${keyframes`${rubberBand}`} infinite`;

const Bounce = styled.div`animation: 5s ${keyframes`${bounce}`} ease`;