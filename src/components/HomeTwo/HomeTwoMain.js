import React from 'react';
import dynamic from 'next/dynamic';
import Fact from './FactSection';
import PricingTwo from './PricingSectionTwo';
import ServiceTwo from './ServiceSectionTwo';
import SpeacialOfferTwo from './SpeacialOfferSectionTwo';
import Cta from '../Home/CtaSection';
import PricingThree from './PricingSectionThree';
import SubscribeTwo from './SubscribeSectionTwo';
import Blog from '../Home/BlogSection';
import SliderTwo from '../Elements/Slider/SliderStyleTwo';
const StreamSlider = dynamic(() => import('../Elements/Slider/StreamSlider'), {
    ssr: false
})
const Brand = dynamic(() => import('../Home/BrandSection'), {
    ssr: false
})
const Faq = dynamic(() => import('../Home/FaqSection'), {
    ssr: false
})

const HomeTwoMain = () => {
	return (
		<main>
			{/* slider-area-start */}
			<SliderTwo />
			{/* pricing-area-end */}

			{/* slider-banner -company-start */}
			<PricingTwo />
			{/* slider-banner -company- */}

			{/* solutions-conectivity - start */}
			<Fact />
			{/* solutions-conectivity - end */}

			{/* explore our intalnet Services -start */}
			<ServiceTwo />
			{/* explore our intalnet Services -end */}

			{/* speed test-start */}
			<SpeacialOfferTwo />
			{/* speed test - end */}

			{/* fact-area-start */}
			<Cta />
			{/* fact-area-end */}

			{/* fact-area-start */}
			<PricingThree />
			{/* fact-area-end */}

			{/* fact-area-start */}
			<SubscribeTwo />
			{/* fact-area-end */}

			{/* fact-area-start */}
			<Faq />
			{/* fact-area-end */}

			{/* stream-area-start */}
			<StreamSlider />
			{/* stream-area-end */}

			{/* faq-area-start */}
			<Blog />
			{/* faq-area-end */}

			{/* faq-area-start */}
			<Brand />
			{/* faq-area-end */}

		</main>
	);
};

export default HomeTwoMain;