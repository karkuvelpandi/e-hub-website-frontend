import React from "react";
import { Product } from "../../../types/product.type";

type ProductCardProps = {
  index: number;
  product: Product;
};

export const ProductCard = ({ index, product }: ProductCardProps) => {
  return (
    <div
      key={index}
      className="flex flex-col w-72 cursor-pointer border-2 px-2 py-4 shadow-lg"
    >
      <center>
        <img src={product.image} className="productImg" alt="" />
      </center>
      <ul className="">
        <li className="">
          <b> {product.name} </b>
        </li>
        <li className="my-1">
          <span className="p-1 bg-orange-500 text-white">
            🗲 Limited time deal
          </span>
        </li>
        <li className="">
          <b> &#8377; </b>
          {product.price}
        </li>
        <li className="">Save extra with No Cost EMI</li>
      </ul>
    </div>
  );
};
