import React from 'react'
import { TypeServiceInPlan } from './TypeServiceInPlan'

export const PlanCitieService = ({plane}) => {
    const {name, price, services } = plane;
    const getNameBandwidth =  services.find(service => service.type === 'bandwidth');
    const getTypeService = services.filter((typeservice) => typeservice.type != 'bandwidth')

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
                       { getTypeService.map((typeservice) => <TypeServiceInPlan key={typeservice.id} typeservice={typeservice}/>)}
                    </ul>
                </div>
                <h2 className="pricing-three-price"><span>Desde</span> {price}<span>/mil</span></h2>
                {/* <Link href="/pricing"><a className="btn transparent-btn">Get Started</a></Link> */}
            </div>
        </div>
    </>
  )
}
