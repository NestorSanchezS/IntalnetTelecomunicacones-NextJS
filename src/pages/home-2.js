import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import HomeTwoMain from '../components/HomeTwo/HomeTwoMain';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';

const HomeTwo = () => {
    return (
        <React.Fragment>
            <HeaderTwo />
            <HomeTwoMain />
            <Footer />
        </React.Fragment>
    );
};

export default HomeTwo;

