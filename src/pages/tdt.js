import React from "react";
import Footer from "../components/Layout/Footer/Footer";
import TdtMain from "../components/Tdt/TdtMain";
import HeaderTwo from "../components/Layout/Header/HeaderStyleTwo";

const tdt = () => {
  return (
    <React.Fragment>
      <HeaderTwo />
      <TdtMain />
      <Footer />
    </React.Fragment>
  );
};

export default tdt;
