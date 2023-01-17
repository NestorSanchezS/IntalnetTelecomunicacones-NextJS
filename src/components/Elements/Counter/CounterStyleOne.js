import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterStyleOne = () => {
  const [isViewCount, setIsViewCount] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsViewCount(!isViewCount);
    }
  };

  const counters = [
    {
      countNum: 100,
      countTitle: "Áreas de cobertura de red",
    },
    {
      countNum: 7000,
      countTitle: "Clientes Felices",
    },
    {
      countNum: 50,
      countTitle: "Empleados Con Experiencia",
    },
    {
      countNum: 4,
      countTitle: "Ubicados en 4 municipios del departamento de Córdoba",
    },
  ];

  return (
    <section className="counter-area pt-115 pb-65">
      <div className="container">
        {counters && (
          <div className="row">
            {counters.map((counter, num) => (
              <div key={num} className="col-lg-3 col-sm-6">
                <div className="counter-item">
                  <h2 className="title">
                    <span className="counter">
                      <VisibilitySensor
                        onChange={onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp end={!isViewCount ? counter.countNum : 0} />
                      </VisibilitySensor>
                    </span>
                    <span className="plus-icon">+</span>
                  </h2>
                  <p>{counter.countTitle}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default CounterStyleOne;
