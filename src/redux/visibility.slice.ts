import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface VisibilityState {
  isMobileView: boolean;
  isCategoryBarVisible: boolean;
  authModalVisibility: "hidden" | "visible";
}

const initialState: VisibilityState = {
  isMobileView: false,
  isCategoryBarVisible: false,
  authModalVisibility: "hidden",
};

const visibilitySlice = createSlice({
  name: "visibility",
  initialState: initialState,
  reducers: {
    setAuthModalVisibility: (state, action) => {
      state.authModalVisibility = action.payload.visibility;
    },
    switchMobileView: (state, action: PayloadAction<boolean>) => {
      state.isMobileView = action.payload;
    },
    updateCategoryBarVisibility: (state, action: PayloadAction<boolean>) => {
      state.isCategoryBarVisible = action.payload;
    },
  },
  extraReducers(builder) {},
});

export const {
  setAuthModalVisibility,
  switchMobileView,
  updateCategoryBarVisibility,
} = visibilitySlice.actions;
export default visibilitySlice.reducer;
