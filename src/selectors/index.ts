import {createSelector} from "reselect";

const data = (store: any) => store.carsHuge;

export const getData = createSelector(data, carsHuge => {
    return carsHuge;
});



