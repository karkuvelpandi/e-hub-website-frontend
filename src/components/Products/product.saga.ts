import { put, call, takeLatest } from "redux-saga/effects";
import { ActionState } from "../../types";
import { PayloadAction } from "@reduxjs/toolkit";
import * as API from "../../api/product.service";
import { CreateProduct, UpdateProductData } from "../../types/product.type";
export const Actions = {
  addProduct: "product/add-product ",
  getAllProduct: "product/get-all-product ",
  getProduct: "product/get-product ",
  updateProduct: "product/update-product ",
  removeProduct: "product/remove-product ",
};
// Add new contact
function* addProductSaga() {
  yield takeLatest(
    Actions.addProduct + ActionState.REQUEST,
    function* (action: PayloadAction<CreateProduct>): any {
      try {
        yield put({
          type: Actions.addProduct + ActionState.PENDING,
        });
        const data = yield call(() => API.addProduct(action.payload));
        if (!data) throw new Error();

        yield put({
          type: Actions.addProduct + ActionState.FULFILLED,
          payload: {
            postData: action.payload,
            data,
          },
        });
      } catch (error: any) {
        yield put({
          type: Actions.addProduct + ActionState.REJECTED,
          payload: error?.message || "Something wrong happened!",
        });
      }
    }
  );
}
// Get all contact
function* getAllProductSaga() {
  yield takeLatest(
    Actions.getAllProduct + ActionState.REQUEST,
    function* (): any {
      try {
        yield put({
          type: Actions.getAllProduct + ActionState.PENDING,
        });
        const data = yield call(() => API.getAllProduct());
        if (!data) throw new Error();

        yield put({
          type: Actions.getAllProduct + ActionState.FULFILLED,
          payload: data,
        });
      } catch (error: any) {
        yield put({
          type: Actions.getAllProduct + ActionState.REJECTED,
          payload: error?.message || "Something wrong happened!",
        });
      }
    }
  );
}
// Get single contact
function* getProductSaga() {
  yield takeLatest(
    Actions.getProduct + ActionState.REQUEST,
    function* (action: PayloadAction<string>): any {
      try {
        yield put({
          type: Actions.getProduct + ActionState.PENDING,
        });
        const data = yield call(() => API.getProduct(action.payload));
        if (!data) throw new Error();

        yield put({
          type: Actions.getProduct + ActionState.FULFILLED,
          payload: data,
        });
      } catch (error: any) {
        yield put({
          type: Actions.getProduct + ActionState.REJECTED,
          payload: error?.message || "Something wrong happened!",
        });
      }
    }
  );
}
// Delete contact
function* removeProductSaga() {
  yield takeLatest(
    Actions.removeProduct + ActionState.REQUEST,
    function* (action: PayloadAction<string>): any {
      try {
        yield put({
          type: Actions.removeProduct + ActionState.PENDING,
        });
        const data = yield call(() => API.deleteProduct(action.payload));
        if (!data) throw new Error();

        yield put({
          type: Actions.removeProduct + ActionState.FULFILLED,
          payload: action.payload,
        });
      } catch (error: any) {
        yield put({
          type: Actions.removeProduct + ActionState.REJECTED,
          payload: error?.message || "Something wrong happened!",
        });
      }
    }
  );
}
// Update COntact
function* updateProductSaga() {
  yield takeLatest(
    Actions.updateProduct + ActionState.REQUEST,
    function* (action: PayloadAction<UpdateProductData>): any {
      try {
        yield put({
          type: Actions.updateProduct + ActionState.PENDING,
        });
        const data = yield call(() =>
          API.updateProduct(action.payload._id, action.payload.data)
        );
        if (!data) throw new Error();

        yield put({
          type: Actions.updateProduct + ActionState.FULFILLED,
          payload: data.contact,
        });
      } catch (error: any) {
        yield put({
          type: Actions.updateProduct + ActionState.REJECTED,
          payload: error?.message || "Something wrong happened!",
        });
      }
    }
  );
}
//
export const productSagas = [
  getAllProductSaga(),
  getProductSaga(),
  removeProductSaga(),
  updateProductSaga(),
  addProductSaga(),
];
