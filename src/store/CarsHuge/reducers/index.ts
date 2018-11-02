export interface ICarsHuge {
    data: [];
    isFetching: boolean;
    page: number;
    countPage: number;
    error: string;
}

export const createInitialSate = (): ICarsHuge => ({
    countPage: 0,
    data: [],
    error: "",
    isFetching: false,
    page: 0
});



export const carsHugeReducer = (state = createInitialSate(), action: any) => {
    switch (action.type) {
        case "GET_DATA_REQUEST": {
            return {...state, page: action.payload, isFetching: true}
        }
        case "GET_DATA_SUCCESS": {
            return {...state, data: action.payload.data, countPage: action.payload.size, error: "", isFetching: false}
        }
        case "GET_DATA_ERROR": {
            return {...state, error: action.payload, isFetching: false}
        }
        default:{
            return state;
        }
    }
};
