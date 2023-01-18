import React from "react";
import HeaderTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import { InternetSanoMain } from "../components/InternetSano/InternetSanoMain";

const internetsano = () => {
  return (
    <React.Fragment>
      <HeaderTwo />
      <InternetSanoMain />
      <Footer />
    </React.Fragment>
  );
};

export default internetsano;
