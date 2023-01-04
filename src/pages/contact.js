import React from 'react';
import HeaderTwo from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ContactMain from '../components/Contact/ContactMain';

const Contact = () => {
    return (
        <React.Fragment>
            <HeaderTwo />
            <ContactMain />
            <Footer />
        </React.Fragment>
    );
};

export default Contact;