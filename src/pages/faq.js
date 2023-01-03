import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import FaqMain from '../components/Faq/FaqMain';

const FaqPage = () => {
    return (
        <React.Fragment>
            <Header />
            <FaqMain />
            <Footer />
        </React.Fragment>
    );
};

export default FaqPage;

