import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import ServiceMain from '../../components/Services/ServicesMain';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';

const Services = () => {
    return (
        <React.Fragment>
            <HeaderTwo />
            <ServiceMain />
            <Footer />
        </React.Fragment>
    );
};

export default Services;