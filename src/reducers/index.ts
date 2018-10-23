import {combineReducers} from "redux";
import {carsHugeReducer, ICarsHuge} from "./CarsHugeReducer";

export interface IRootReducer {
    carsHuge: ICarsHuge
};

export const rootReducer = combineReducers<IRootReducer>({
    carsHuge: carsHugeReducer
});