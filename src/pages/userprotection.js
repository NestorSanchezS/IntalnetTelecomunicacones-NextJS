import React from "react";
import HeaderTwo from "../components/Layout/Header/HeaderStyleTwo";
import Footer from "../components/Layout/Footer/Footer";
import { UserProtectionMain } from "../components/UserProtection/UserProtectionMain";

const userprotection = () => {
  return (
    <React.Fragment>
      <HeaderTwo />
      <UserProtectionMain />
      <Footer />
    </React.Fragment>
  );
};

export default userprotection;
