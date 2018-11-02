import {GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS} from "../../../constants/actionTypes";

export default interface IGetDataRequest {
    type: string;
    payload: number;
}

export function loadInfo(page: number): IGetDataRequest {
    return {
        payload: page,
        type: GET_DATA_REQUEST
    }
}

export interface IData {
    data: any[];
    countElements: number;
}

export function requestDataSuccess(data: IData) {
    return {
        payload: data,
        type: GET_DATA_SUCCESS
    }
}

export function requestDataError(error: string) {
    return {
        payload: error,
        type: GET_DATA_ERROR
    }
}