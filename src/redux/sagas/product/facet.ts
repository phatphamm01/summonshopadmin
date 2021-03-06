import { IDataResponse } from "@common/interface/IAxiosResponse";
import { getFacetsSuccess } from "@redux/slices/product";
import fetchProduct from "@services/products";
import { call, put } from "redux-saga/effects";

export function* getFacetsSaga(action: any) {
  const { payload } = action;

  const response: IDataResponse = yield call(fetchProduct.getFacts, payload);

  const { data } = response;

  yield put(getFacetsSuccess(data));
}
