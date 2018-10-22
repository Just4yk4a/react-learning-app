import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from "../reducers";

import logger from "redux-logger";
import {watchFetchData} from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(watchFetchData);