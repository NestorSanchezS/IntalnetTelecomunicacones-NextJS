import React from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcumb';
import Queries from './QueriesSection';
const Brand = dynamic(() => import('../Home/BrandSection'), {
    ssr: false
})
const FaqAccordion = dynamic(() => import('../Elements/Accordion/FaqAccordion'), {
    ssr: false
})

const FaqMain = () => {
    return (
        <main>

            {/* breadcrumb-area-start */}
            <Breadcrumb pageTitle="FAQ"/>
            {/* breadcrumb-area-end */}

            {/* contact-area-start */}
            <FaqAccordion />
            {/* contact-area-end */}

            {/* map-area-start */}
            <Queries />
            {/* map-area-end */}

            {/* brand-area-start */}
            <Brand paddingclassName="ptt-120" />
            {/* brand-area-end */}

        </main>
    );
};

export default FaqMain;