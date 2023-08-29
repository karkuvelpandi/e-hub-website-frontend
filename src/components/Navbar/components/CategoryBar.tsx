import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import Dropdown from "../DropDown/Dropdown";
import { Category } from "../../../types/categories";
import { Container } from "../../StyledComponents/Styled";

export const categories: Category[] = [
  {
    title: "All products",
    linkTo: "/products",
  },
  {
    title: "Home appliances",
    linkTo: "",
  },
  {
    title: "Kitchen appliances",
    linkTo: "",
  },
  {
    title: "Audio & video",
    linkTo: "",
  },
  {
    title: "New arrivals",
    linkTo: "",
  },
  {
    title: "Today's deals",
    linkTo: "",
  },
];
export const CategoryBar = () => {
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
          {" "}
          {isCategoryBarVisible && (
            <Dropdown
              className="absolute z-30 top-full bg-white pageInEffectDown inset-x-0"
              dropdownItems={categories}
            />
          )}
        </>
      ) : (
        <Container className="bg-blue-500 border-t-[1px] border-blue-600 sticky top-20 z-30">
          {categories.map((category: Category, index) => {
            return (
              <Link
                key={index}
                className="hover:no-underline text-white font-semibold px-2 my-2 mr-2 border-r-[1px] border-blue-600 hover:text-white"
                to={category.linkTo}
              >
                {category.title}
              </Link>
            );
          })}
        </Container>
      )}
    </div>
  );
};
