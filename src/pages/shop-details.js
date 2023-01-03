import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ShopDetailsMain from '../components/ShopDetails/ShopDetailsMain';

const ShopDetailsPage = () => {
    return (
        <React.Fragment>
            <Header />
            <ShopDetailsMain />
            <Footer />
        </React.Fragment>
    );
};

export default ShopDetailsPage;

