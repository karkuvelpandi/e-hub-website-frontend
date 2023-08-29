import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import {
  AddProductData,
  CreateProduct,
  GetProduct,
  UpdateProductData,
} from "../../types/product.type";
import { Actions } from "./product.saga";
import { ActionState, AsyncState } from "../../types";

export const getAllProduct = createAction(
  Actions.getAllProduct + ActionState.REQUEST
);
export const getProduct = createAction<string>(
  Actions.getProduct + ActionState.REQUEST
);
export const addProduct = createAction<CreateProduct>(
  Actions.addProduct + ActionState.REQUEST
);
export const updateProduct = createAction<UpdateProductData>(
  Actions.updateProduct + ActionState.REQUEST
);
export const deleteProduct = createAction<string>(
  Actions.removeProduct + ActionState.REQUEST
);

interface InitialStateStructure {
  availableProducts: GetProduct[];
  currentProduct: GetProduct;
  getAllProductStatus: string;
  getAllProductError: string;
  getProductStatus: string;
  getProductError: string;
  addProductStatus: string;
  addProductError: string;
  deleteProductStatus: string;
  deleteProductError: string;
  updateProductStatus: string;
  updateProductError: string;
}
const initialState: InitialStateStructure = {
  availableProducts: [],
  getAllProductStatus: AsyncState.IDLE,
  getAllProductError: "",
  currentProduct: {
    _id: "",
    name: "",
    image: "",
    info: "",
    price: 0,
    qty: 0,
  },
  getProductStatus: AsyncState.IDLE,
  getProductError: "",
  addProductStatus: AsyncState.IDLE,
  addProductError: "",
  deleteProductStatus: AsyncState.IDLE,
  deleteProductError: "",
  updateProductStatus: AsyncState.IDLE,
  updateProductError: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Get All products
    builder.addCase(Actions.getAllProduct + ActionState.PENDING, (state) => {
      state.getAllProductStatus = AsyncState.PENDING;
      state.getAllProductError = "";
    });
    builder.addCase(
      Actions.getAllProduct + ActionState.FULFILLED,
      (state, action: PayloadAction<GetProduct[]>) => {
        state.availableProducts = action.payload;
        state.getAllProductStatus = AsyncState.FULFILLED;
        state.getAllProductError = "";
      }
    );
    builder.addCase(
      Actions.getAllProduct + ActionState.REJECTED,
      (state, action: PayloadAction<any>) => {
        state.getAllProductStatus = AsyncState.REJECTED;
        state.getAllProductError = action.payload;
      }
    );
    // Get single product
    builder.addCase(Actions.getProduct + ActionState.PENDING, (state) => {
      state.getProductStatus = AsyncState.PENDING;
      state.getProductError = "";
    });
    builder.addCase(
      Actions.getProduct + ActionState.FULFILLED,
      (state, action: PayloadAction<GetProduct>) => {
        state.currentProduct = action.payload;
        state.getProductStatus = AsyncState.FULFILLED;
        state.getProductError = "";
      }
    );
    builder.addCase(
      Actions.getProduct + ActionState.REJECTED,
      (state, action: PayloadAction<any>) => {
        state.getProductStatus = AsyncState.REJECTED;
        state.getProductError = action.payload;
      }
    );
    // Add new product
    builder.addCase(Actions.addProduct + ActionState.PENDING, (state) => {
      state.addProductStatus = AsyncState.PENDING;
      state.addProductError = "";
    });
    builder.addCase(
      Actions.addProduct + ActionState.FULFILLED,
      (state, action: PayloadAction<AddProductData>) => {
        state.availableProducts = [
          ...state.availableProducts,
          action.payload.data.product,
        ];
        state.addProductStatus = AsyncState.FULFILLED;
        state.addProductError = "";
      }
    );
    builder.addCase(
      Actions.addProduct + ActionState.REJECTED,
      (state, action: PayloadAction<any>) => {
        state.addProductStatus = AsyncState.REJECTED;
        state.addProductError = action.payload;
      }
    );
    // Update product
    builder.addCase(Actions.updateProduct + ActionState.PENDING, (state) => {
      state.updateProductStatus = AsyncState.PENDING;
      state.updateProductError = "";
    });
    builder.addCase(
      Actions.updateProduct + ActionState.FULFILLED,
      (state, action: PayloadAction<GetProduct>) => {
        state.availableProducts = state.availableProducts.map((product) =>
          product._id === action.payload._id ? action.payload : product
        );
        state.updateProductStatus = AsyncState.FULFILLED;
        state.updateProductError = "";
      }
    );
    builder.addCase(
      Actions.updateProduct + ActionState.REJECTED,
      (state, action: PayloadAction<any>) => {
        state.updateProductStatus = AsyncState.REJECTED;
        state.updateProductError = action.payload;
      }
    );
    // Delete product
    builder.addCase(Actions.removeProduct + ActionState.PENDING, (state) => {
      state.deleteProductStatus = AsyncState.PENDING;
      state.deleteProductError = "";
    });
    builder.addCase(
      Actions.removeProduct + ActionState.FULFILLED,
      (state, action: PayloadAction<string>) => {
        state.availableProducts = state.availableProducts.filter(
          (product) => product._id !== action.payload
        );
        state.deleteProductStatus = AsyncState.FULFILLED;
        state.deleteProductError = "";
      }
    );
    builder.addCase(
      Actions.removeProduct + ActionState.REJECTED,
      (state, action: PayloadAction<any>) => {
        state.deleteProductStatus = AsyncState.REJECTED;
        state.deleteProductError = action.payload;
      }
    );
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
