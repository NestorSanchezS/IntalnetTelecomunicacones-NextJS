import React from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcumb';
import Cta from '../Home/CtaSection';
import About from './AboutSection';
import CounterStyleOne from '../Elements/Counter/CounterStyleOne';
const Brand = dynamic(() => import('../Home/BrandSection'), {
    ssr: false
})
const Faq = dynamic(() => import('../Home/FaqSection'), {
    ssr: false
})


const AboutMain = () => {
	return (
		<main>

	            {/* breadcrumb-area-start */}
	            <Breadcrumb pageTitle="About Us"/>
	            {/* breadcrumb-area-end */}

				{/* about-area-start */}
	            <About />
	            {/* about-area-end */}

                {/* about-area-start */}
	            <CounterStyleOne />
	            {/* about-area-end */}

                {/* cta-area-start */}
	            <Cta />
	            {/* cta-area-end */}

				{/* faq-area-start */}
	            <Faq />
	            {/* faq-area-end */}

				{/* faq-area-start */}
	            <Brand paddingclassName="ptt-0" />
	            {/* faq-area-end */}

        </main>
	);
};

export default AboutMain;