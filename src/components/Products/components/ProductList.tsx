import React from "react";
import { GetProduct } from "../../../types/product.type";
import { ProductCard } from "./ProductCard";
import emptyImg from "../../../ui/images/empty.jpg";
type ProductListProps = {
  products: GetProduct[];
};

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div
      className={`container flex flex-1 ${
        products.length > 0 ? "justify-start" : "justify-center"
      }`}
      style={{ minHeight: "auto" }}
    >
      <div className="row flex flex-wrap justify-center gap-x-4 gap-y-4">
        {products.length > 0 ? (
          <>
            {products.map((product, index) => {
              return (
                <ProductCard key={index} index={index} product={product} />
              );
            })}
          </>
        ) : (
          <>
            <div className="space-y-4 self-center">
              <img
                src={emptyImg}
                className="m-auto"
                height="100px"
                width="100px"
                alt=""
              />
              <p> No Products are created</p>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};
