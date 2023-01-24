import React from "react";
import dynamic from "next/dynamic";
import Breadcrumb from "../Common/Breadcumb";
import Pagination from "../Common/Pagination";
import ShopMeta from "./ShopMeta";
import ShopProduct from "./ShopProduct";
import ShopSidebarCategory from "./ShopSidebarCategory";
import ShopSidebarSearch from "./ShopSidebarSearch";
import ShopSidebarTags from "./ShopSidebarTags";
const Brand = dynamic(() => import("../Home/BrandSection"), {
  ssr: false,
});

const ShopMain = () => {
  return (
    <main>
      {/* breadcrumb-area-start */}
      <Breadcrumb pageTitle="Accesorios de Tecnología" />
      {/* breadcrumb-area-end */}

      <section className="shop-area pt-120 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              {/* <ShopMeta /> */}
              <ShopProduct />
              <Pagination />
            </div>
            <div className="col-xl-3 col-lg-4">
              <aside className="shop-sidebar">
                <ShopSidebarSearch />
                <ShopSidebarCategory />
                <ShopSidebarTags />
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* brand-area-start */}
      <Brand />
      {/* brand-area-end */}
    </main>
  );
};

export default ShopMain;
