import React, { useState } from "react";
import "./Navbar.css";
import { TopBar } from "./components/TopBar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { BrandBar } from "./components/BrandBar";
import { CategoryBar } from "./components/CategoryBar";
import { SearchBar } from "./components/SearchBar";

const Navbar = () => {
  //
  const isMobileView = useSelector(
    (state: RootState) => state.visibility.isMobileView
  );

  return (
    <>
      {!isMobileView && <TopBar />}
      <BrandBar />
      {isMobileView && (
        <div className="p-2 bg-blue-500 sticky top-0 z-30">
          <SearchBar context="mobile" />
        </div>
      )}
      {!isMobileView && <CategoryBar />}
    </>
  );
};

export default Navbar;