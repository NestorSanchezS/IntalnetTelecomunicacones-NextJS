import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Breadcrumb from "../Common/Breadcumb";
import ServiceThree from "./ServicesSectionThree";
import Link from "next/link";
import PricingThree from "../HomeTwo/PricingSectionThree";
import { BASE_URL } from "../constans/dominio";
import { useRouter } from "next/router";
import { ButtonGrillTv } from "../HomeTwo/ButtonGrillTv";
import { ServiceSectionCard } from "./ServiceSectionCard";

const Brand = dynamic(() => import("../Home/BrandSection"), {
  ssr: false,
});

const ServiceMain = () => {
  const router = useRouter();
  const [infoServiceCitie, setInfoServiceCitie] = useState([]);

  useEffect(() => {
    if (!router.query.id) {
      return;
    }
    // console.log("--ID:" + router.query.id)
    const getInfoServiceCities = async () => {
      try {
        const url = `${BASE_URL}cities/${router.query.id}`;
        const responseInfoServiceCitie = await fetch(url);
        const dataMonteria = await responseInfoServiceCitie.json();
        setInfoServiceCitie(dataMonteria);
      } catch (error) {
        console.log(error);
      }
    };
    getInfoServiceCities();
  }, [router.query.id]);
  const { plans, name } = infoServiceCitie;

  // console.log(infoServiceCitie)
  return (
    <main>
      {/* breadcrumb-area-start */}
      <Breadcrumb pageTitle={name} />
      {/* breadcrumb-area-end */}

      {/* about-area-start */}
      <ServiceThree />
      {/* about-area-end */}

      {/* service-area-start */}
      <ServiceSectionCard />
      {/* service-area-end */}

      {/* pricing-area-start */}
      <PricingThree plans={plans} name={name} />
      {/* pricing-area-end */}
      <div className="button-center">
        <ButtonGrillTv plans={plans} name={name} />
      </div>

      {/* brand-area-start */}
      <Brand />
      {/* brand-area-end */}
    </main>
  );
};

export default ServiceMain;
