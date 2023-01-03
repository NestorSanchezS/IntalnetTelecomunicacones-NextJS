import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
 
export default () => (
    <div className="product-desc-wrap">
        <Tabs>
            <div className='product-desc-wrap-nav nav-tabs'>
                <TabList>
                    <Tab><button className="nav-link active" type="button">Description</button></Tab>
                    <Tab><button className="nav-link" type="button">Reviews (0)</button></Tab>
                </TabList>
            </div>

            <div className="tab-contentss">
                <TabPanel>
                    <div className="product-desc-content">
                        <p>Netbox is an unmatched attractive fragrance for men, belonging to the woody musk group. New from the manufacturer Oud Kalakas spray (100ml). Refined and impeccable perfume motif begins tart notes of lavender, bergamot and sage. Virtually intertwined with the sensual sound of iris, amber, and cocoa, it spreads in bright streams of notes of patchouli, cardamom, leather, and vetiver. Beautiful, noble, intelligent, having a fragrance with a dizzying train and excellent durability.</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="product-desc-review">
                        <div className="review-title mb-20">
                            <h4 className="title">Customer Reviews (0)</h4>
                        </div>
                        <div className="left-rc">
                            <p>No reviews yet</p>
                        </div>
                        <div className="right-rc">
                            <a href="#">Write a review</a>
                        </div>
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    </div>
);