import React from "react";

import './footer.css';

import styled, { keyframes } from "styled-components";

import flash from "react-animations/lib/flash";

const Footer = () => {
    return (
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
            </div>
        </div>
    );
};

export default Footer;

const Flash = styled.div`animation: 4s ${keyframes`${flash}`} ease`;