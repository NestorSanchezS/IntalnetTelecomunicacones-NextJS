import React from "react";
import Footer from "../components/Layout/Footer/Footer";
import FaqMain from "../components/Faq/FaqMain";
import HeaderTwo from "../components/Layout/Header/HeaderStyleTwo";

const FaqPage = () => {
  return (
    <React.Fragment>
      <HeaderTwo />
      <FaqMain />
      <Footer />
    </React.Fragment>
  );
};

export default FaqPage;
