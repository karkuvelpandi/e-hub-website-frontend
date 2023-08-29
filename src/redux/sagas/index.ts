import { all } from "redux-saga/effects";
import { productSagas } from "../../components/Products/product.saga";
export default function* rootSaga() {
  yield all([
    ...productSagas,
    // all sagas which will export form all saga files.
  ]);
}
