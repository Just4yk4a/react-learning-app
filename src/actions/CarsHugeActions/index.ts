export function nextPage() {
    return {
        type: "NEXT_PAGE",
    }
}

export function loadInfo(page: number) {
    return {
        payload: page,
        type: "GET_DATA_REQUEST"
    }
}

export function requestDataSuccess(data: []) {
    return {
        payload: data,
        type: "GET_DATA_SUCCESS"
    }
}

export function requestDataError() {
    return {
        type: "GET_DATA_ERROR"
    }
}