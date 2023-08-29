import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux";
import { CloseIcon } from "../../../ui/svgs/CloseIcon";
import { HamBurgerIcon } from "../../../ui/svgs/HamBurgerIcon";
import { updateSidebarVisibility } from "../../../redux/visibility.slice";
export const MobileMenu = () => {
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector(
    (state: RootState) => state.visibility.isSidebarVisible
  );
  return (
    <div
      className="cursor-pointer flex justify-center w-8"
      onClick={() => dispatch(updateSidebarVisibility(!isSidebarVisible))}
    >
      {isSidebarVisible ? (
        <CloseIcon size="20" color="white" />
      ) : (
        <HamBurgerIcon height="20" width="28" color="white" />
      )}
    </div>
  );
};
