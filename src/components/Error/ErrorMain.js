import React from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcumb';
import ErrorSection from './ErrorSection';
const Brand = dynamic(() => import('../Home/BrandSection'), {
    ssr: false
})

const ErrorMain = () => {
	return (
		<main>

			{/* breadcrumb-area-start */}
			<Breadcrumb pageTitle="Error Page"/>
			{/* breadcrumb-area-end */}

			{/* error-area-start */}
			<ErrorSection />
			{/* error-area-end */}

			{/* faq-area-start */}
			<Brand />
			{/* faq-area-end */}

		</main>
	);
};

export default ErrorMain;