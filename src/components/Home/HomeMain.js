import React from 'react';
import dynamic from 'next/dynamic';
import Banner from './BannerSection';
import Blog from './BlogSection';
import Cta from './CtaSection';
import Price from './PricingSection';
import Service from './ServiceSection';
import SpeacialOffer from './SpeacialOfferSection';
import Subscription from './SubscribeSection';
import Video from './VideoSection';
const StreamSlider = dynamic(() => import('../Elements/Slider/StreamSlider'), {
    ssr: false
})
const Brand = dynamic(() => import('./BrandSection'), {
    ssr: false
})
const Faq = dynamic(() => import('./FaqSection'), {
    ssr: false
})



const HomeMain = () => {
	return (
		<main>

			{/* baanner-area-start */}
			<Banner />
			{/* baanner-area-end */}

			{/* price-area-start */}
			<Price />
			{/* price-area-end */}

			{/* video-area-start */}
			<Video />
			{/* video-area-end */}

			{/* service-area-start */}
			<Service />
			{/* service-area-end */}

			{/* cta-area-start */}
			<Cta />
			{/* cta-area-end */}

			{/* Speacial-area-start */}
			<SpeacialOffer />
			{/* Speacial-area-end */}

			{/* subscribe-area-start */}
			<Subscription />
			{/* subscribe-area-end */}

			{/* faq-area-start */}
			<Faq />
			{/* faq-area-end */}

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

export default HomeMain;