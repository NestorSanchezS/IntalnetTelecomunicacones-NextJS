import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import PriceMain from '../components/Pricing/PricingMain';


const PricingPage = () => {
    return (
        <React.Fragment>
            <Header />
            <PriceMain />
            <Footer />
        </React.Fragment>
    );
};

export default PricingPage;