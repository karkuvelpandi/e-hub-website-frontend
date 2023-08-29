import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { useSelector } from "react-redux";
import { MobileMenu } from "./MobileMenu";
import { RootState } from "../../../redux";
import homeLogo from "../../../assets/logo.png";
import cartImg from "../../../ui/svgs/cart.svg";
import { Button } from "../../../ui/Button/Index";
import { Favorite } from "../../../ui/svgs/Favorite";

// Component that render brand, search bar and cart for navigation
export const BrandBar = () => {
  //
  const isMobileView = useSelector(
    (state: RootState) => state.visibility.isMobileView
  );

  return (
    <nav className="w-full bg-blue-500 flex justify-between xxs:pl-2 xxs:pr-4 sm:pl-10 sm:pr-10 sm:sticky sm:top-0 sm:inset-x-0 sm:z-30 relative">
      <div className="flex ">
        {isMobileView && (
          <div className=" flex items-center px-2 ">
            <MobileMenu />
          </div>
        )}
        <Link to="/" className="flex justify-start items-center">
          <img src={homeLogo} width="100px" alt="" />
        </Link>
      </div>
      <ul className="nav-right-list gap-2">
        {!isMobileView && (
          <li className="nav-item-li">
            <SearchBar />
          </li>
        )}
        <li className="nav-item-li">
          <Link className="nav-link-li" to="/">
            <Button
              textColor="white"
              className="w-12 h-12"
              bgColor="transparent"
              children={<Favorite size="30px" />}
            />
          </Link>
        </li>
        <li className="nav-item-li">
          <Link className="nav-link-li relative" to="/">
            <Button
              textColor="white"
              className="w-12 h-12"
              bgColor="transparent"
              children={
                <img src={cartImg} width="30px" height="30px" alt="cart" />
              }
            />
            <div className="absolute h-fit w-4 leading-none right-1 top-1 rounded-full bg-black border-[1px] border-gray-500 shadow-black shadow-2xl flex justify-center items-start text-white">
              <span>1</span>
            </div>
          </Link>
        </li>
        <li className="nav-item-li">
          <Link className="nav-link-li font-extrabold" to="/userLogin">
            LOG IN
          </Link>
        </li>
      </ul>
    </nav>
  );
};
