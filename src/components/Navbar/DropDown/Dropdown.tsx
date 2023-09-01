import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import { Category } from "../../../types/categories";
import { useDispatch } from "react-redux";
import { updateCategoryBarVisibility } from "../../../redux/visibility.slice";
import { filterProductByCategoryName } from "../../Products/product.slice";

type DropdownProps = {
  dropdownItems: Category[];
  className?: string;
};
const Dropdown: React.FC<DropdownProps> = ({ dropdownItems, className }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ul className={className + " "}>
        {dropdownItems.map((item, index) => {
          return (
            <li key={index} className="hover:bg-blue-500 text-center">
              <Link
                onClick={() => {
                  dispatch(
                    filterProductByCategoryName({
                      category: item.categoryName,
                      title: item.title,
                    })
                  );
                  dispatch(updateCategoryBarVisibility(false));
                }}
                className="text-lg hover:no-underline hover:text-white block p-2"
                to={item.linkTo}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
