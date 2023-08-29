import React from "react";
import "./Navbar.css";
import { RootState } from "../../redux";
import { useSelector } from "react-redux";
import { TopBar } from "./components/TopBar";
import { BrandBar } from "./components/BrandBar";
import { SearchBar } from "./components/SearchBar";
import { CategoryBar } from "./components/CategoryBar";

const Navbar = () => {
  //Accessing the redux store
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
      <CategoryBar />
    </>
  );
};

export default Navbar;
