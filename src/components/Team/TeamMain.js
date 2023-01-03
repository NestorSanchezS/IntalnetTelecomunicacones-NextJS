import React from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcumb';
import PricingSection from './ProgressSection';
import Team from './TeamSection';
import Hire from './HireSection';

const Brand = dynamic(() => import('../Home/BrandSection'), {
    ssr: false
})

const TeamMain = () => {
	return (
		<main>

			{/* breadcrumb-area-start */}
			<Breadcrumb pageTitle="Team"/>
			{/* breadcrumb-area-end */}

			{/* progress-area-start */}
			<PricingSection />
			{/* progress-area-end */}

			{/* Team-area-start */}
			<Team />
			{/* Team-area-end */}

			{/* hire-area-start */}
			<Hire />
			{/* hire-area-end */}

			{/* brand-area-start */}
			<Brand />
			{/* brand-area-end */}

        </main>
	);
};

export default TeamMain;