export interface ICarsHuge {
    data: [];
    isFetching: boolean;
    page: number;
}

const createInitialSate = (): ICarsHuge => ({
    data: [],
    isFetching: false,
    page: 4
});

export const carsHugeReducer = (state = createInitialSate(), action: any) => {
    switch (action.type) {
        case "NEXT_PAGE": {
            return {...state, page: action.payload}
        }
        case "GET_DATA_REQUEST": {
            return {...state, page: action.payload, isFetching: true}
        }
        case "GET_DATA_SUCCESS": {
            return {...state, data: action.payload, isFetching: false}
        }
    }
    return state;
};
