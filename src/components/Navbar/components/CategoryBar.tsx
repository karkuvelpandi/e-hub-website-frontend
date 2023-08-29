import React from "react";
import { Container } from "../../StyledComponents/Styled";
import { Link } from "react-router-dom";
const categories = [
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
  return (
    <Container className="bg-blue-500 border-t-[1px] border-blue-600 sticky top-20 z-30">
      {categories.map((category) => {
        return (
          <Link
            className="hover:no-underline text-white font-semibold px-2 my-2 mr-2 border-r-[1px] border-blue-600 hover:text-white"
            to={category.linkTo}
          >
            {category.title}
          </Link>
        );
      })}
    </Container>
  );
};
