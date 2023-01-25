import React, { Component } from "react";
import dynamic from "next/dynamic";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
); // disable ssr
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default ({ description }) => (
  <div className="product-desc-wrap">
    <Tabs>
      <div className="product-desc-wrap-nav nav-tabs">
        <TabList>
          <Tab>
            <button className="nav-link active" type="button">
              Descripción
            </button>
          </Tab>
          <Tab>
            <button className="nav-link" type="button">
              Reviews (0)
            </button>
          </Tab>
        </TabList>
      </div>

      <div className="tab-contentss">
        <TabPanel>
          <div className="product-desc-content">
            <p>{description}</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="product-desc-review">
            <div className="review-title mb-20">
              <h4 className="title">Opiniones de los Usuarios (0)</h4>
            </div>
            <div className="left-rc">
              <p>Aún no hay opiniones</p>
            </div>
            <div className="right-rc">
              <a href="#">Escribe un comentario</a>
            </div>
          </div>
        </TabPanel>
      </div>
    </Tabs>
  </div>
);
