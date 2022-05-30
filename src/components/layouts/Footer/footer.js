import React, {useState} from "react";

import './footer.css';

import styled, { keyframes } from "styled-components";

import flash from "react-animations/lib/flash";



const Footer = () => {

    const [footer, setFooter] = useState(false);

    const animation = () => {
        if (window.scrollY >= 2300) {
            setFooter(true);
        } else {
            setFooter(false)
        };
    }
    window.addEventListener("scroll", animation);
    return (
        <div>
            {
                footer &&
                (
                    <div className="footer">
                        <div className="row">
                            <Flash className="contact">
                                <div className="contact-title">
                                    CONTACT US
                                </div>
                                <div className="contact-add">
                                    201, 1st Floor, 4th Croos, CMR Road, <br />
                                    Kalyan Nagar, Bangalore-560023
                                </div>
                                <div className="contact-no">
                                    +916325544545
                                </div>
                                <div className="contact-email">
                                    franchise@pizzahut.in
                                </div>
                            </Flash>
                            <Flash className="time">
                                <div className="time-title">
                                    TIMINGS
                                </div>
                                <div className="time-day">
                                    MONDAY-SUNDAY <br />
                                    11:00 AM - 10:00 PM
                                </div>
                            </Flash>
                            <Flash className="better">
                                <div className="better-title">
                                    Help us in serving you Better
                                </div>
                                <div className="feedback">
                                    Give FeedBack
                                </div>
                            </Flash>
                        </div>
                        <div className="app-store">
                            <img src="https://t4.ftcdn.net/jpg/03/91/88/25/360_F_391882584_42M28Owo18MHXw4yNxSQ5tSjVWnnyb7s.jpg" className="app-s" alt="icon" />
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Footer;

const Flash = styled.div`animation: 7s ${keyframes`${flash}`} ease`;

