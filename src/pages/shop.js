import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ShopMain from '../components/Shop/ShopMain';

const ShopPage = () => {
    return (
        <React.Fragment>
            <Header />
            <ShopMain />
            <Footer />
        </React.Fragment>
    );
};

export default ShopPage;
