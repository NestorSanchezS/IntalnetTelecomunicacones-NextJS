import React from 'react';
import Link from 'next/link';

const ErrorSection = () => {

    return (
        <section className="error-area pt-120 pb-50">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                        <div className="error-img text-center mb-40">
                            <img src="/assets/img/images/404.png" alt="img not found"/>
                        </div>
                        <div className="error-content text-center">
                            <h3 className="title">Page Not Found</h3>
                            <p>The page you are looking for was moved, removed,renamed or might never existed.</p>
                            <Link href="/"><a className="btn">Go Back to Home</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default ErrorSection;