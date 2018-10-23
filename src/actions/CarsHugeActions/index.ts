export function nextPage() {
    return {
        type: "NEXT_PAGE",
    }
}

export default interface IGetDataRequest {
    type: string;
    payload: number;
}

export function loadInfo(page: number):IGetDataRequest {
    return {
        payload: page,
        type: "GET_DATA_REQUEST"
    }
}

interface IData {
    data: [];
    countElements: number;
}

export function requestDataSuccess(data: IData) {
    return {
        payload: data,
        type: "GET_DATA_SUCCESS"
    }
}

export function requestDataError(error: string) {
    return {
        payload: error,
        type: "GET_DATA_ERROR"
    }
}