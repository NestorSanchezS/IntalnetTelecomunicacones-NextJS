import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import ShopMain from "../components/Shop/ShopMain";
import HeaderTwo from "../components/Layout/Header/HeaderStyleTwo";

const ShopPage = () => {
  return (
    <React.Fragment>
      <HeaderTwo />
      <ShopMain />
      <Footer />
    </React.Fragment>
  );
};

export default ShopPage;
