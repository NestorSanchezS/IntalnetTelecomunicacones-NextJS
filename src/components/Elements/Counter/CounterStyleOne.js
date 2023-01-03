import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const CounterStyleOne = () => {

    const [isViewCount, setIsViewCount] = useState(false);

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setIsViewCount(!isViewCount);
        }
    }

    const counters = [
        {
            countNum: 500,
            countTitle: 'Network Coverage Areas'
        },
        {
            countNum: 250,
            countTitle: 'Happy Customers'
        },
        {
            countNum : 230,
            countTitle: 'Experienced Employees'
        },
        {
            countNum : 10,
            countTitle: 'Certificate & Awards Winner'
        }
    ];

    return(

        <section className="counter-area pt-115 pb-65">
            <div className="container">
            {counters &&
                <div className="row">
                    {counters.map( (counter, num) => (
                    <div key={num} className="col-lg-3 col-sm-6">
                        <div className="counter-item">
                            <h2 className="title"><span className="counter">
                                 <VisibilitySensor onChange={onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={!isViewCount ? counter.countNum : 0} />
                                  </VisibilitySensor>
                                  </span><span className="plus-icon">+</span></h2>
                             <p>{counter.countTitle}</p>
                        </div>
                    </div>
                    ))}
                </div>
            }
            </div>
        </section>
    )
}
export default CounterStyleOne;