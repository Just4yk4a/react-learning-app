import {call, put, takeEvery} from "redux-saga/effects";
import {requestDataError, requestDataSuccess} from "../actions/CarsHugeActions";

export function* watchFetchData() {
    yield takeEvery("GET_DATA_REQUEST", fetchDataAsync);
}

function* fetchDataAsync() {
    try {
        const data = yield call(() => {
            return fetch('http://127.0.0.1:8000/cars-huge?page=' + 4 + '&limit=20')
                .then(response => response.json())
        });
        yield put(requestDataSuccess(data));
    }
    catch (e) {
        yield put(requestDataError());
    }
}