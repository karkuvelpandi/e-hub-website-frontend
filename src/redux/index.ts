import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./sagas";
import appSlice from "./app.slice";
import visibilitySlice from "./visibility.slice";
import productSlice from "../components/Products/product.slice";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = configureStore({
  reducer: {
    app: appSlice,
    visibility: visibilitySlice,
    product: productSlice,
  },
  middleware,
  //   devTools:,
  //   enhancers:,
});
// Setting up the store type
export type RootState = ReturnType<typeof store.getState>;

//
sagaMiddleware.run(rootSaga);

export default store;
