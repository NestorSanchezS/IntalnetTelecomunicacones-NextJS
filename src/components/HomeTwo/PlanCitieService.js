import React from 'react'

export const PlanCitieService = ({plane}) => {
    console.log(plane)
    const {name, price, services } = plane;
    const getNameBandwidth =  services.find(service => service.type === 'bandwidth');
    
  return (
    <>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="pricing-three-item mb-30">
                <div className="pricing-three-head">
                    <h4 className="title">{name}</h4>
                    <span className="devices-support">{getNameBandwidth.name} Megas</span>
                    <ul className="devices-icon-wrap">
                        <li><i className="flaticon-sync"></i></li>
                        <li><i className="flaticon-satellite-dish"></i></li>
                        <li><i className="flaticon-device"></i></li>
                        <li><i className="flaticon-laptop"></i></li>
                    </ul>
                </div>
                <div className="pricing-three-list">
                    <ul>
                        <li>Home broadband</li>
                        <li>Satellite TV</li>
                        <li>Cell phone connection</li>
                        <li>Home security</li>
                        <li>Home broadband</li>
                    </ul>
                </div>
                <h2 className="pricing-three-price"><span>Desde</span> {price}<span>/mil</span></h2>
                {/* <Link href="/pricing"><a className="btn transparent-btn">Get Started</a></Link> */}
            </div>
        </div>
    </>
  )
}
