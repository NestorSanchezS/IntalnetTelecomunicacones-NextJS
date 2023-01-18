import React from "react";
import HeaderTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import { PqrMain } from "../components/Pqr/PqrMain";

const pqr = () => {
  return (
    <React.Fragment>
      <HeaderTwo />
      <PqrMain />
      <Footer />
    </React.Fragment>
  );
};

export default pqr;
