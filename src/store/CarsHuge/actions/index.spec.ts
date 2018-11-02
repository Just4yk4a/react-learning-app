import * as types from "../../../constants/actionTypes";
import {IData, loadInfo, requestDataError, requestDataSuccess} from "./index";

describe("Action for CarsHugeAction", () => {
    it("Get request", () => {
        const page = 12;

        expect(loadInfo(page)).toEqual({
            payload: page,
            type: types.GET_DATA_REQUEST
        })
    });

    it("Get success request", () => {
        const data: IData = {
            countElements: 14,
            data: [1, 2, 3]
        };

        expect(requestDataSuccess(data)).toEqual({
            payload: data,
            type: types.GET_DATA_SUCCESS
        })
    });

    it("Get error request", () => {
        const error = "error";

        expect(requestDataError(error)).toEqual({
            payload: error,
            type: types.GET_DATA_ERROR
        })
    })
});