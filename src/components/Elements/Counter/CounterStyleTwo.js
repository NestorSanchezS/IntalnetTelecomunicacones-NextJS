import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const CounterStyleTwo = () => {

    const [isViewCount, setIsViewCount] = useState(false);

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setIsViewCount(!isViewCount);
        }
    }

    const counters = [
        {
            countNum: 4000,
            countTitle: 'Ultra HD Quality'
        },
        {
            countNum: 150,
            countTitle: 'Online TV Channels'
        },
        {
            countNum : 350,
            countTitle: 'Mbps Speed Internet'
        }
    ];

    return(
        

        <div className="fact-wrap">
            {counters &&
                <div className="row">
                    {counters.map( (counter, num) => (
                    <div key={num} className="col-md-4 col-sm-6">
                        <div className="fact-item">
                            <h4 className="title"><span className="counter">
                                <VisibilitySensor onChange={onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={!isViewCount ? counter.countNum : 0} />
                                 </VisibilitySensor>
                                 </span><span className="plus-icon">+</span></h4>
                            <p>{counter.countTitle}</p>
                        </div>
                    </div>
                    ))}
                </div>
            }
        </div>
    )
}
export default CounterStyleTwo;