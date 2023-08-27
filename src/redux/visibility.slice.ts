import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface VisibilityState {
  isMobileView: boolean;
  isSidebarVisible: boolean;
  authModalVisibility: "hidden" | "visible";
}

const initialState: VisibilityState = {
  isMobileView: false,
  isSidebarVisible: false,
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
    updateSidebarVisibility: (state, action: PayloadAction<boolean>) => {
      state.isSidebarVisible = action.payload;
    },
  },
  extraReducers(builder) {},
});

export const {
  setAuthModalVisibility,
  switchMobileView,
  updateSidebarVisibility,
} = visibilitySlice.actions;
export default visibilitySlice.reducer;
