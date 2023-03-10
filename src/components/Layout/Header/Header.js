import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import TopHeader from './TopBar';
import BurgerMenus from './BurgerMenus';
import ShoppingCart from './ShoppingCart';

const Header = () => {

	const [menuOpen, setMenuOpen] = useState(false)

	const router = useRouter()
	const [path, setPath] = useState("")
	useEffect(() => {
		setPath(router.pathname)
	}, [router])

	// Sticky Menu Area start
	useEffect(() => {
		window.addEventListener('scroll', sticky);
		return () => {
			window.removeEventListener('scroll', sticky);
		};
	});
  
	 const sticky = (e) => {
		const header = document.querySelector('.menu-area');
		const scrollTop = window.scrollY; 
		scrollTop >= 50 ? header.classList.add('sticky-menu') : header.classList.remove('sticky-menu');
	 };
	 // Sticky Menu Area End

	return (
		<React.Fragment>
			<Head>
				<title>Intalnet Telecomunicaciones</title>
				<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
            </Head>
			<header>
				<TopHeader />
				<div id="sticky-header" className="menu-area">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="mobile-nav-toggler" onClick={() => {setMenuOpen(!menuOpen)}}><i className="fas fa-bars"></i></div>
								<div className="menu-wrap">
									<nav className="menu-nav">
										<div className="logo">
											<Link href="/"><a><img src="/assets/img/logo/logo.png" alt="img not found"/></a></Link>
										</div>
										<div className="navbar-wrap main-menu d-none d-lg-flex">
											<ul className="navigation">
												<li className="active menu-item-has-children"><Link href="/"><a>Home</a></Link>
													<ul className="sub-menu">
														<li><Link href="/"><a>Home One</a></Link></li>
														<li><Link href="/home-2"><a>Home Two</a></Link></li>
													</ul>
												</li>
												<li><Link href="/about"><a>About</a></Link></li>
												<li className="menu-item-has-children"><Link href="/services"><a>Services</a></Link>
													<ul className="sub-menu">
														<li><Link href="/services"><a>Our Services</a></Link></li>
														<li><Link href="/service-details"><a>Services Details</a></Link></li>
													</ul>
												</li>
												<li className="menu-item-has-children"><a href="#">Pages</a>
													<ul className="sub-menu">
														<li><Link href="/pricing"><a></a></Link></li>
														<li><Link href="/team"><a>Creative Team</a></Link></li>
														<li><Link href="/faq"><a>Faq Page</a></Link></li>
														<li><Link href="/shop"><a>Our Shop</a></Link></li>
														<li><Link href="/shop-details"><a>Shop Details</a></Link></li>
														<li><Link href="/error"><a>404 Page</a></Link></li>
													</ul>
												</li>
												<li className="menu-item-has-children"><Link href="/blog"><a>News</a></Link>
													<ul className="sub-menu">
														<li><Link href="/blog"><a>Our News</a></Link></li>
														<li><Link href="/blog-details"><a>News Details</a></Link></li>
													</ul>
												</li>
												<li><Link href="/contact"><a>Contact</a></Link></li>
											</ul>
										</div>
										<div className="header-action d-none d-md-block">
											<ul>
												<li className="header-shop-cart"><a href="#!"><i className="flaticon-shopping-cart"></i><span>0</span></a>
													<ShoppingCart />
												</li>
												<li className="header-btn">
													<Link href="/contact"><a className="btn transparent-btn">Get a Quote</a></Link>
												</li>
											</ul>
										</div>
									</nav>
								</div>

								
							</div>
						</div>
					</div>
				</div>

				<BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            	<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

			</header>
		</React.Fragment>
	);
}

export default Header;