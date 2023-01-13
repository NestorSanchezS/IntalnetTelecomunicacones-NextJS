import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import AboutMain from '../components/About/AboutMain';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';

const About = () => {
    return (
        <React.Fragment>
            <HeaderTwo />
            <AboutMain />
            <Footer />
        </React.Fragment>
    );
};

export default About;