import React, { useEffect } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { AsyncState } from "../../types";
import { ProductLoader } from "../../ui/Loader/ProductLoader";
import { ProductFilter } from "./components/ProductFilter";
import { ProductList } from "./components/ProductList";
import { filterProductByCategoryName } from "./product.slice";
import { categories } from "./Category";

const Products = ({ context = "" }) => {
  const dispatch = useDispatch();
  //
  const availableProducts = useSelector(
    (state: RootState) => state.product.availableProducts
  );
  const getAllProductStatus = useSelector(
    (state: RootState) => state.product.getAllProductStatus
  );
  const filteredProducts = useSelector(
    (state: RootState) => state.product.filteredProducts
  );
  const priceFilteredProducts = useSelector(
    (state: RootState) => state.product.priceFilteredProducts
  );
  const currentCategoryTitle = useSelector(
    (state: RootState) => state.product.currentCategoryTitle
  );
  const isMobileView = useSelector(
    (state: RootState) => state.visibility.isMobileView
  );
  const filterIsActive = priceFilteredProducts.length > 0;
  const isLoading = getAllProductStatus === AsyncState.PENDING;
  //Here filter the product while user load directly categories before all product.
  useEffect(() => {
    const pathname = window.location.pathname;
    const parts = pathname.split("/");
    const lastName = parts[parts.length - 1];
    let category = categories.filter(
      (category) => category.categoryName === lastName
    );
    if (category[0] && getAllProductStatus === AsyncState.FULFILLED) {
      dispatch(
        filterProductByCategoryName({
          category: category[0].categoryName,
          title: category[0].title,
        })
      );
    }
  }, [dispatch, getAllProductStatus]);
  //
  return (
    <>
      <div className={`flex ${context === "Home" && "justify-center"} `}>
        {context !== "Home" && !isMobileView && <ProductFilter />}
        <div className="h-screen sticky top-0 w-[2px] border-r-2" />
        <div className="flex flex-col flex-1">
          <div className="flex items-end justify-between pr-4">
            {context !== "Home" && (
              <>
                {!currentCategoryTitle ? (
                  <p className="loader-bg ml-4 mt-4 h-6 w-24"></p>
                ) : (
                  <p className="text-2xl pl-4 pt-4 font-bold">
                    {currentCategoryTitle || "All products"}
                  </p>
                )}
              </>
            )}
            {isMobileView && <ProductFilter />}
          </div>
          {availableProducts &&
            getAllProductStatus === AsyncState.FULFILLED && (
              <ProductList
                products={
                  context === "Home"
                    ? availableProducts
                    : filterIsActive
                    ? priceFilteredProducts
                    : filteredProducts
                }
              />
            )}
          {isLoading && (
            <div className="w-full h-full relative xxs:top-10 sm:top-7 flex justify-center items-start overflow-y-scroll">
              <ProductLoader />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
