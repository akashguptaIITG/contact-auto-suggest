import { call, put, takeLatest, all } from "redux-saga/effects";
import * as actionType from "../action/action-type";
import * as action from "../action/action";
import * as api from "../../lib/api";
function* baseSaga(reqData, apiReq, action) {
  try {
    yield put(action.loading());
    let response = yield call(apiReq, reqData.reqData);
    yield put(action.success(response));
  } catch (err) {
    console.error(err, reqData, action);
    yield put(action.failure());
  }
}

function* watchGetcontactsByName() {
  yield takeLatest(actionType.GET_CONTACTS_BY_NAME.REQUEST, reqData =>
    baseSaga(reqData, api.get, action.getContactsByName)
  );
}
function* watchGetContactsAll() {
  yield takeLatest(actionType.GET_CONTACTS_ALL.REQUEST, reqData =>
    baseSaga(reqData, api.get, action.getContactsAll)
  );
}

export default function* rootSaga() {
  yield all([watchGetcontactsByName(), watchGetContactsAll()]);
}
