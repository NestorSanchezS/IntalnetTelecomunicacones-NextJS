import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import AboutMain from '../components/About/AboutMain';

const About = () => {
    return (
        <React.Fragment>
            <Header />
            <AboutMain />
            <Footer />
        </React.Fragment>
    );
};

export default About;