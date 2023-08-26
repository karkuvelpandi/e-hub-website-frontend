import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootSaga from "./sagas";
import appSlice from "./app.slice";
import visibilitySlice from "./visibility.slice";
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
  sagaMiddleware,
];
const store = configureStore({
  reducer: {
    app: appSlice,
    visibility: visibilitySlice,
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
