import React from 'react';

import Header from '../../layouts/Header/header';

import Banner from '../../layouts/Banner/banner';

import Content from '../../layouts/Content/content';

import HotProducts from '../../layouts/HotProducts/hotproducts';



const Home = () => {
    return (
        <div>
        <Header />
        <Banner />
        <HotProducts />
        <Content />
        </div>
    );
};

export default Home;