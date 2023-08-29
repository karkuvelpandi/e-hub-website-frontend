import React from "react";
import { GetProduct } from "../../../types/product.type";

type ProductCardProps = {
  index: number;
  product: GetProduct;
};

export const ProductCard = ({ index, product }: ProductCardProps) => {
  return (
    <div key={index} className="flex flex-col w-72 cursor-pointer px-2 py-4">
      <div className="flex justify-center items-center bg-slate-100 h-56">
        <img src={product.image} className="productImg" alt="" />
      </div>
      <ul className="">
        <li className="">
          <b> {product.name} </b>
        </li>
        <li className="my-1">
          <span className="p-1 bg-blue-600 text-white">
            🗲 Limited time deal
          </span>
        </li>
        <li className="">
          <b> &#8377; </b>
          {product.price} &nbsp;
          <span className=" line-through">
            &#8377;{Math.ceil(product.price + product.price / 10)}
          </span>
        </li>
        <li className="">Save extra with No Cost EMI</li>
      </ul>
    </div>
  );
};
