import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import Dropdown from "../DropDown/Dropdown";
import { Category } from "../../../types/categories";
import { categories } from "../../Products/Category";
import { Container } from "../../StyledComponents/Styled";
import { filterProductByCategoryName } from "../../Products/product.slice";

export const CategoryBar = () => {
  const dispatch = useDispatch();
  const isMobileView = useSelector(
    (state: RootState) => state.visibility.isMobileView
  );
  const isCategoryBarVisible = useSelector(
    (state: RootState) => state.visibility.isCategoryBarVisible
  );
  return (
    <div className="relative">
      {isMobileView ? (
        <>
          {isCategoryBarVisible && (
            <Dropdown
              className="absolute z-30 top-full bg-white pageInEffectDown inset-x-0"
              dropdownItems={categories}
            />
          )}
        </>
      ) : (
        <Container className="bg-blue-500 border-t-[1px] border-blue-600 sticky top-20 z-20">
          {categories.map((category: Category, index) => {
            return (
              <>
                {category.categoryBar && (
                  <Link
                    key={index}
                    className="hover:no-underline flex justify-center items-center text-center text-white font-semibold px-2 my-2 mr-2 border-r-[1px] border-blue-600 hover:text-white"
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
                )}
              </>
            );
          })}
        </Container>
      )}
    </div>
  );
};
