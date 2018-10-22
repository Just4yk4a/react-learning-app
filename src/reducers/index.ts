import {combineReducers} from "redux";
import {carsHugeReducer} from "./CarsHugeReducer";

export const rootReducer = combineReducers({
    carsHuge: carsHugeReducer
});