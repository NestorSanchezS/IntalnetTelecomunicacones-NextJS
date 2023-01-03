import React from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcumb';
import SubscribeTwo from '../HomeTwo/SubscribeSectionTwo';
import PricingFour from './PricingSectionFour';
import PricingThree from '../HomeTwo/PricingSectionThree';
import PricingCta from './PricingCta';
const Brand = dynamic(() => import('../Home/BrandSection'), {
    ssr: false
})


const PriceMain = () => {
	return (
		<main>

			{/* breadcrumb-area-start */}
			<Breadcrumb pageTitle="Pricing"/>
			{/* breadcrumb-area-end */}

			{/* pricing-area-start */}
			<PricingFour />
			{/* pricing-area-end */}

			{/* Subscribe-area-start */}
			<SubscribeTwo />
			{/* Subscribe-area-end */}

			{/* pricing-area-start */}
			<PricingThree />
			{/* pricing-area-end */}

			{/* cta-area-start */}
			<PricingCta />
			{/* cta-area-end */}

			{/* brand-area-start */}
			<Brand />
			{/* brand-area-end */}

		</main>
	);
};

export default PriceMain;