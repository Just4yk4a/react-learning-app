import {GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS} from "../../../constants/actionTypes";
import {carsHugeReducer, createInitialSate, ICarsHuge} from "./index";

describe("test CarsHuge reducer", () => {
    it('Get data request', () => {
        const state = createInitialSate();
        const action = {
            payload: 0,
            type: GET_DATA_REQUEST
        };

        expect(carsHugeReducer(state, action)).toEqual({
            ...state,
            data: [],
            isFetching: true,
            page: action.payload
        });
    });

    it('Get success response', () => {
        const state: ICarsHuge = {
            countPage: 0,
            data: [],
            error: "",
            isFetching: true,
            page: 0
        };

        const action = {
            payload: {
                data: [1, 2, 3],
                size: 30
            },
            type: GET_DATA_SUCCESS
        };

        expect(carsHugeReducer(state, action)).toEqual({
            ...state,
            countPage: action.payload.size,
            data: action.payload.data,
            error: "",
            isFetching: false
        });
    });

    it('Get bed response', () => {
        const state: ICarsHuge = {
            countPage: 0,
            data: [],
            error: "",
            isFetching: true,
            page: 0
        };
        const action = {
            payload: "500 Error",
            type: GET_DATA_ERROR
        };

        expect(carsHugeReducer(state, action)).toEqual({
            ...state,
            error: action.payload,
            isFetching: false
        })
    });

    it('Unknown action', () => {
        const state: ICarsHuge = {
            countPage: 0,
            data: [],
            error: "",
            isFetching: true,
            page: 0
        };
        const action = {
            payload: "500 Error",
            type: "UNKNOWN_ACTION"
        };

        expect(carsHugeReducer(state, action)).toEqual({
            ...state
        })
    });
});