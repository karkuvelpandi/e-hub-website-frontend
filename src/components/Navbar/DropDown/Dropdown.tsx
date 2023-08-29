import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import { Category } from "../../../types/categories";

type DropdownProps = {
  dropdownItems: Category[];
  className?: string;
};
let Dropdown: React.FC<DropdownProps> = ({ dropdownItems, className }) => {
  return (
    <>
      <ul className={className + " "}>
        {dropdownItems.map((item, index) => {
          return (
            <li key={index} className="hover:bg-blue-500 text-center">
              <Link
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
