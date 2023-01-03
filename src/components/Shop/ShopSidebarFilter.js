import React from 'react';

const ShopSidebarFilter = () => {

    return (
        <div className="widget">
            <h4 className="sidebar-widget-title">Filter by</h4>
            <div className="price_filter">
                <div id="slider-range"></div>
                <div className="price_slider_amount">
                    <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                    <input type="submit" className="filter-btn" value="Filter"/>
                </div>
            </div>
        </div>
    );
    
}

export default ShopSidebarFilter;