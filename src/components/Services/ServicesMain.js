import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcumb';
import ServiceThree from './ServicesSectionThree';
import Link from 'next/link';
import PricingThree from '../HomeTwo/PricingSectionThree';
import { BASE_URL } from '../constans/dominio';
import { useRouter } from 'next/router';

const Brand = dynamic(() => import('../Home/BrandSection'), {
    ssr: false
})

const ServiceMain = () => {
	const router = useRouter();
	const [infoServiceCitie, setInfoServiceCitie] = useState([]);

	useEffect(() => {
		if(!router.query.id){
			return
		}
		console.log("--ID:" + router.query.id)
		const getInfoServiceCities = async () => {
		 try {
			const url = `${BASE_URL}cities/${router.query.id}`;
			const responseInfoServiceCitie = await fetch(url);
			const dataMonteria = await responseInfoServiceCitie.json();
			setInfoServiceCitie(dataMonteria);
		 } catch (error) {
			console.log(error)
		 }
		};
		getInfoServiceCities();
	}, [router.query.id]);
	const { plans, name } = infoServiceCitie;

	// console.log(infoServiceCitie)
	return (
		<main>

			{/* breadcrumb-area-start */}
			<Breadcrumb pageTitle={name}/>
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
									<h3 className="title"><Link href="/service-details"><a>Banda Ancha</a></Link></h3>
									<p>Ofrecemos internet banda ancha. Navegación ilimitada a bajo costo.</p>
									{/* <Link href="/service-details"><a className="btn btn-link">Read more</a></Link> */}
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="services-item">
								<div className="services-icon">
									<i className="flaticon-wifi-router"></i>
								</div>
								<div className="services-content">
									<h3 className="title"><Link href="/service-details"><a>WiFi Internet</a></Link></h3>
									<p>Todos los planes viene con Wi-Fi integrado, para que puedas conectar fácilmente tus dispositivos inalámbricos en tu casa.</p>
									{/* <Link href="/service-details"><a className="btn btn-link">Read more</a></Link> */}
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="services-item">
								<div className="services-icon">
									<i className="flaticon-satellite-dish"></i>
								</div>
								<div className="services-content">
									<h3 className="title"><Link href="/service-details"><a>Canales HD y SD</a></Link></h3>
									<p>Disfruta de canales HD, la mejor experiencia para nuestros clientes y empleados.</p>
									{/* <Link href="/service-details"><a className="btn btn-link">Read more</a></Link> */}
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="services-item">
								<div className="services-icon">
									<i className="flaticon-sync"></i>
								</div>
								<div className="services-content">
									<h3 className="title"><Link href="/service-details"><a>Televisión Digital</a></Link></h3>
									<p>Podrás disfrutar de canales de deportes, películas, infantiles, religiosos y mucho más.</p>
									{/* <Link href="/service-details"><a className="btn btn-link">Read more</a></Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* service-area-end */}

			{/* pricing-area-start */}
			<PricingThree />
			{/* pricing-area-end */}

			{/* brand-area-start */}
			<Brand />
			{/* brand-area-end */}

		</main>
	);
};

export default ServiceMain;