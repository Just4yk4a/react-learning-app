import {call, put, takeEvery} from "redux-saga/effects";
import IGetDataRequest, {requestDataError, requestDataSuccess} from "../actions/CarsHugeActions";

export function* watchFetchData() {
    yield takeEvery("GET_DATA_REQUEST", fetchDataAsync);
}

function* fetchDataAsync(action: IGetDataRequest) {
    try {
        const data = yield call(() => {
            return fetch('http://127.0.0.1:8000/cars-huge?page=' + action.payload + '&limit=10')
                .then(response => response.json())
        });
        yield put(requestDataSuccess(data));
    }
    catch (e) {
        yield put(requestDataError("Ошибка получения информации"));
    }
}