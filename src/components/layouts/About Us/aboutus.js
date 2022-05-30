import React, {useState} from "react";

import './aboutus.css';

import styled, { keyframes } from "styled-components";

import zoomIn from "react-animations/lib/zoom-in";

import fadeInUp from "react-animations/lib/fade-in-up";

const AboutUs = () => {

    const [aboutus, setAboutUs] = useState(false);

    const animation = () => {
        if (window.scrollY >= 1640) {
            setAboutUs(true);
        } else {
            setAboutUs(false)
        };
    }
    window.addEventListener("scroll", animation);

    return (
        <div>
            {
                aboutus &&
                (
                    <div className="aboutus">
                        <div className="first-about">
                            <div className="first-about-image">
                                <img src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/rzvgees5xslalswu7pre" className="aboutus-image" alt="icon" />
                            </div>
                            <div className="first-about-content">
                                <ZoomIn className="first-about-title">
                                    Welcome To Pizza Hut.
                                </ZoomIn>
                                <Fade className="first-about-desc">
                                    Pizza Hut is all about quality you can trust. As one of the original founding Pizza brands and the 3rd largest Pizza chain in India, our sole mission is making the freshest, tastiest and funnest Pizza around. Our classic pan pizza will always be a fan favourite, with a soft and chewy crust perfectly balancing out the healthy tomato puree and mozzarella - cheddar blended cheese. Our authentic Italian crust for those who would prefer a light and airy crust to more fully enjoy the toppings. Thin, light and delicious.
                                </Fade>
                                <Fade className="first-about-descs">
                                    Our newest addition of Puree sauces will blow your mind. Chose between a spicy buffalo, sweet bbq, tangy chipotle can creamy makhni to perfectly compliment your toppings and crust. Our suggestions of combinations might be helpful but ultimately the power lies with you.
                                </Fade>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default AboutUs;


const ZoomIn = styled.div`animation: 5s ${keyframes`${zoomIn}`} ease`;

const Fade = styled.div`animation: 5s ${keyframes`${fadeInUp}`} ease`;