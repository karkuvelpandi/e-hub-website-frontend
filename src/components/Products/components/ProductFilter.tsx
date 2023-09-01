import React, { useState, useEffect } from "react";
import { categories } from "../Category";
import { Category } from "../../../types/categories";
import { Link } from "react-router-dom";
import {
  filterProductByCategoryName,
  toggleFilterOnMobile,
  updatePriceFilterData,
} from "../product.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProductFilter = () => {
  const dispatch = useDispatch();
  const highestPrice = useSelector(
    (state: RootState) => state.product.highestPrice
  );
  const lowestPrice = useSelector(
    (state: RootState) => state.product.lowestPrice
  );
  const priceFilterData = useSelector(
    (state: RootState) => state.product.priceFilterData
  );
  const isPriceFilterActive = useSelector(
    (state: RootState) => state.product.isPriceFilterActive
  );
  const isMobileView = useSelector(
    (state: RootState) => state.visibility.isMobileView
  );
  //   This function is to delay the dispatch for restricting the unnecessary rerendering
  let timeoutId: string | number | NodeJS.Timeout | undefined;
  const updatePriceWithDebounce = (value: number) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      // Update the price filter data after debounce
      dispatch(updatePriceFilterData(value));
    }, 300); // Adjust the debounce delay as needed
  };

  return (
    <>
      {isMobileView ? (
        <div className="">
          <FontAwesomeIcon
            onClick={() => dispatch(toggleFilterOnMobile(!isPriceFilterActive))}
            className="w-5 h-5"
            icon={faFilter}
          ></FontAwesomeIcon>
          {isPriceFilterActive && (
            <div className="absolute z-20 right-3 bg-slate-100 p-2 rounded-md shadow-md">
              <p className="font-semibold">Filter by Price Range</p>
              <p>{priceFilterData}</p>
              <input
                type="range"
                min={lowestPrice}
                max={highestPrice}
                value={priceFilterData}
                onChange={(e: any) => updatePriceWithDebounce(e.target.value)}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="sticky h-fit top-20 py-4 px-4 space-y-6">
          <div className="flex flex-col">
            <p className="font-semibold">Categories</p>
            {categories.map((category: Category, index) => {
              return (
                <Link
                  key={index}
                  className="hover:no-underline "
                  to={category.linkTo}
                  onClick={() => {
                    dispatch(
                      filterProductByCategoryName({
                        category: category.categoryName,
                        title: category.title,
                      })
                    );
                    console.log(category.categoryName);
                  }}
                >
                  {category.title}
                </Link>
              );
            })}
          </div>
          <div className="">
            <p className="font-semibold">Filter by Price Range</p>
            <p>{priceFilterData}</p>
            <input
              type="range"
              min={lowestPrice}
              max={highestPrice}
              value={priceFilterData}
              onChange={(e: any) => updatePriceWithDebounce(e.target.value)}
            />
          </div>
        </div>
      )}
    </>
  );
};
