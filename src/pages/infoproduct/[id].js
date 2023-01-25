import React from "react";
import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import ShopDetailsMain from "../../components/ShopDetails/ShopDetailsMain";
import HeaderTwo from "../../components/Layout/Header/HeaderStyleTwo";

const ShopDetailsPage = () => {
  return (
    <React.Fragment>
      <HeaderTwo />
      <ShopDetailsMain />
      <Footer />
    </React.Fragment>
  );
};

export default ShopDetailsPage;
