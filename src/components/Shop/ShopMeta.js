import React from 'react';

const ShopMeta = () => {

    return (
        <div className="shop-meta">
            <p className="shop-showing-result">Showing 1–6 of 10 results</p>
            <div className="shop-short-by">
                <form action="#">
                    <select className="form-select" aria-label="Default select example">
                        <option value="">Sort by latest</option>
                        <option value="">Low to high</option>
                        <option value="">High to low</option>
                        <option value="">Popularity</option>
                    </select>
                </form>
            </div>
        </div>
    );
    
}

export default ShopMeta;