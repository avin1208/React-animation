import React from 'react';

import Header from '../../layouts/Header/header';

import Banner from '../../layouts/Banner/banner';

import Content from '../../layouts/Content/content';

import HotProducts from '../../layouts/HotProducts/hotproducts';

import Explore from '../../layouts/Explore/explore';

import './home.css';

import AboutUs from '../../layouts/About Us/aboutus';

import Footer from '../../layouts/Footer/footer';


const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <HotProducts />
            <Content />
            <Explore />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;