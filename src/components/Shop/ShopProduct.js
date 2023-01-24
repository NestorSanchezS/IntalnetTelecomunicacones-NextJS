import React from "react";
import { useIntalnetContext } from "../../hooks/useIntalnetContext";
import { CardProduct } from "./CardProduct";

const ShopProduct = () => {
  const { getProductCardApi } = useIntalnetContext();
  return (
    <div className="row">
      {getProductCardApi?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopProduct;
