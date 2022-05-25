import React from "react";

import './banner.css';

import { Carousel } from 'antd';

import 'antd/dist/antd.min.css';

const Banner = () => {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    return (
        <div className="banner">
            <Carousel autoplay={100} afterChange={onChange}>
                <div>
                    <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1653456567/cropped-1920-650-596343_pmaj6e.jpg" className="offer" alt="icon" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1653458622/cropped-1920-650-213822_ihbuhd.jpg" className="offer" alt="icon" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1653455498/cropped-1920-650-1235639_2_iwggvo.jpg" className="offer" alt="icon" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;