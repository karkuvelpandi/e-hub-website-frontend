import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import Footer from "../Footer/Footer";
import "./Product.css";
import { ProductCard } from "./components/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { AsyncState } from "../../types";
import { Loader } from "../../ui/Loader/Loader";
import { ProductLoader } from "../../ui/Loader/ProductLoader";
const Products = ({ context = "" }) => {
  //
  const availableProducts = useSelector(
    (state: RootState) => state.product.availableProducts
  );
  const getAllProductStatus = useSelector(
    (state: RootState) => state.product.getAllProductStatus
  );
  //
  return (
    <>
      {getAllProductStatus === AsyncState.PENDING && (
        <div className="w-full h-full relative xxs:top-10 sm:top-7 flex justify-center items-start">
          <ProductLoader />
        </div>
      )}
      {availableProducts && getAllProductStatus === AsyncState.FULFILLED && (
        <div
          className={`container mt-5 flex flex-1 
          ${context === "Home" && "md:relative md:bottom-56 md:z-20"}
           `}
          style={{ minHeight: "50vh" }}
        >
          <div className="row flex flex-wrap justify-center gap-x-4 gap-y-4">
            {availableProducts.length > 0 ? (
              <>
                {availableProducts.map((product, index) => {
                  return (
                    <ProductCard key={index} index={index} product={product} />
                  );
                })}
              </>
            ) : (
              <>No Products are created</>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
