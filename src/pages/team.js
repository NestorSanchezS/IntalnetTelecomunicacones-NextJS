import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import TeamMain from '../components/Team/TeamMain';

const team = () => {
    return (
        <React.Fragment>
            <Header />
            <TeamMain />
            <Footer />
        </React.Fragment>
    );
};

export default team;

