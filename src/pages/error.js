import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ErrorMain from '../components/Error/ErrorMain';

const ErrorPage = () => {
    return (
        <React.Fragment>
            <Header />
            <ErrorMain />
            <Footer />
        </React.Fragment>
    );
};

export default ErrorPage;