import {combineReducers} from "redux";
import {carsHugeReducer, ICarsHuge} from "./CarsHuge/reducers/index";

export interface IRootReducer {
    carsHuge: ICarsHuge
}

export const rootReducer = combineReducers<IRootReducer>({
    carsHuge: carsHugeReducer
});