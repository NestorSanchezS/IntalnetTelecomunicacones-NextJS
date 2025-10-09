import React from 'react';
import Link from 'next/link';

const FooterBottom = () => {
    return (
        <div className="copyright-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="footer-logo">
                            <Link href="/"><a><img src="/assets/img/logo/fw_logo.png" alt="img not found"/></a></Link>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="copyright-text text-center text-md-end">
                            <p>Copyrighted 2023_INTALNET - Desarrollado por Néstor Sánchez S.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;