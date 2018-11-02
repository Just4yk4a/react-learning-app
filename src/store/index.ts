import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from "./rootReducer";

import logger from "redux-logger";
import {watchFetchData} from "./CarsHuge/sagas/index";

const sagaMiddleware = createSagaMiddleware();

export const index = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(watchFetchData);