import React from 'react';
import Link from 'next/link';

const Breadcrumb = (props) => {
const { pageTitle } = props;
  return (
	<section className="breadcrumb-area breadcrumb-bg">
	    <div className="container">
	        <div className="row">
				<div className="col-xl-6 col-lg-7 col-md-9">
					<div className="breadcrumb-content">
					<h3 className="title">{ pageTitle ? pageTitle : 'About Us'}</h3>
	                    <ul className="breadcrumb-menu" aria-label="breadcrumb">
	                        <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
	                        <li className="breadcrumb-item active" aria-current="page">{ pageTitle ? pageTitle : 'Blog'}</li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </div>
	</section>
  );
}

export default Breadcrumb;




