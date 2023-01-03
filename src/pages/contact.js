import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ContactMain from '../components/Contact/ContactMain';

const Contact = () => {
    return (
        <React.Fragment>
            <Header />
            <ContactMain />
            <Footer />
        </React.Fragment>
    );
};

export default Contact;