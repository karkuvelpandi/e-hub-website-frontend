import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./product.slice";
import { RootState } from "../../redux";
import { AsyncState } from "../../types";
import wipImg from "../../ui/images/wip.png";

export const ProductPage = () => {
  const dispatch = useDispatch();
  // Accessing product data form store
  const currentProduct = useSelector(
    (state: RootState) => state.product.currentProduct
  );
  const getProductStatus = useSelector(
    (state: RootState) => state.product.getProductStatus
  );
  const isLoading = getProductStatus === AsyncState.PENDING;
  useEffect(() => {
    const pathName = window.location.pathname;
    const parts = pathName.split("/");
    const productId = parts[parts.length - 1];
    dispatch(getProduct(productId));
  }, []);
  return (
    <div className="flex w-full h-full justify-center items-center">
      <img src={wipImg} width="350px" height="350px" alt="" />
      {/* {isLoading && <div className="loader-bg w-1/2 h-40">1</div>}
      <div className="w-1/2 bg-lime-200">2</div> */}
    </div>
  );
};
