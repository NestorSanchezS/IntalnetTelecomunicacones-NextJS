import React from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcumb';
import ServiceThree from './ServicesSectionThree';
import PricingFour from './PricingSectionFour';
import Link from 'next/link';
const Brand = dynamic(() => import('../Home/BrandSection'), {
    ssr: false
})


const ServiceMain = () => {
	return (
		<main>

			{/* breadcrumb-area-start */}
			<Breadcrumb pageTitle="Services"/>
			{/* breadcrumb-area-end */}

			{/* about-area-start */}
			<ServiceThree />
			{/* about-area-end */}

			{/* service-area-start */}
			<section className="services-area pt-120 pb-90">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="services-item">
								<div className="services-icon">
									<i className="flaticon-internet-banking"></i>
								</div>
								<div className="services-content">
									<h3 className="title"><Link href="/service-details"><a>Broadband</a></Link></h3>
									<p>Many desktop Wifi packages and web page editors now use Lorem Ipsum budgets</p>
									<Link href="/service-details"><a className="btn btn-link">Read more</a></Link>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="services-item">
								<div className="services-icon">
									<i className="flaticon-wifi-router"></i>
								</div>
								<div className="services-content">
									<h3 className="title"><Link href="/service-details"><a>WIFI Internet</a></Link></h3>
									<p>Many desktop Wifi packages and web page editors now use Lorem Ipsum budgets</p>
									<Link href="/service-details"><a className="btn btn-link">Read more</a></Link>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="services-item">
								<div className="services-icon">
									<i className="flaticon-satellite-dish"></i>
								</div>
								<div className="services-content">
									<h3 className="title"><Link href="/service-details"><a>Satellite TV</a></Link></h3>
									<p>Many desktop Wifi packages and web page editors now use Lorem Ipsum budgets</p>
									<Link href="/service-details"><a className="btn btn-link">Read more</a></Link>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="services-item">
								<div className="services-icon">
									<i className="flaticon-sync"></i>
								</div>
								<div className="services-content">
									<h3 className="title"><Link href="/service-details"><a>Netbox TV box</a></Link></h3>
									<p>Many desktop Wifi packages and web page editors now use Lorem Ipsum budgets</p>
									<Link href="/service-details"><a className="btn btn-link">Read more</a></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* service-area-end */}

			{/* pricing-area-start */}
			<PricingFour />
			{/* pricing-area-end */}

			{/* brand-area-start */}
			<Brand />
			{/* brand-area-end */}

		</main>
	);
};

export default ServiceMain;