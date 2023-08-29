import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux";
import { CloseIcon } from "../../../ui/svgs/CloseIcon";
import { HamBurgerIcon } from "../../../ui/svgs/HamBurgerIcon";
import { updateCategoryBarVisibility } from "../../../redux/visibility.slice";
export const MobileMenu = () => {
  const dispatch = useDispatch();
  const isCategoryBarVisible = useSelector(
    (state: RootState) => state.visibility.isCategoryBarVisible
  );
  return (
    <div
      className="cursor-pointer flex justify-center w-8"
      onClick={() =>
        dispatch(updateCategoryBarVisibility(!isCategoryBarVisible))
      }
    >
      {isCategoryBarVisible ? (
        <CloseIcon size="20" color="white" />
      ) : (
        <HamBurgerIcon height="20" width="28" color="white" />
      )}
    </div>
  );
};
