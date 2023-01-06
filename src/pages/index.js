import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import HomeTwoMain from '../components/HomeTwo/HomeTwoMain';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';
import { BASE_URL } from '../components/constans/dominio';

const HomeTwo = () => {
    console.log(BASE_URL)
    return (
        <React.Fragment>   
            
            <HeaderTwo />
            <HomeTwoMain />
            <Footer />
        </React.Fragment>
    );
};

export default HomeTwo;

