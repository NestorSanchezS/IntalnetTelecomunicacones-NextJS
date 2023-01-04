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

			{/* Need Fast & Secure Broandband-start */}
			{/* <Cta /> */}
			{/* Need Fast & Secure Broandband-end */}

			{/* plans-start */}
			{/* <PricingThree /> */}
			{/* plans-end */}

			{/* tv-start */}
			<SubscribeTwo />
			{/* tv-end */}

			{/* frecuenly questions -start */}
			{/* <Faq /> */}
			{/* frecuenly questions -end */}

			{/* intalflix-start */}
			<StreamSlider />
			{/* intalflix-end */}

			{/* blog-area-start */}
			<Blog />
			{/* blog-area-end */}

			{/* banner tv-area-start */}
			<Brand />
			{/* banner tv-area-end */}

		</main>
	);
};

export default HomeTwoMain;