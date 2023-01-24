import React from "react";
import Footer from "../components/Layout/Footer/Footer";
import ErrorMain from "../components/Error/ErrorMain";
import HeaderTwo from "../components/Layout/Header/HeaderStyleTwo";

const ErrorPage = () => {
  return (
    <React.Fragment>
      <HeaderTwo />
      <ErrorMain />
      <Footer />
    </React.Fragment>
  );
};

export default ErrorPage;
