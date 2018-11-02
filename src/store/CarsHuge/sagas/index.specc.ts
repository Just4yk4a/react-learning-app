import {call, put} from "redux-saga/effects";
import {GET_DATA_REQUEST, GET_DATA_SUCCESS} from "../../../constants/actionTypes";
import {fetchDataAsync} from "./index";

describe("Movies fetching flow", () => {
   it("Fetch the movies succssfully", () => {
       const action = {
           payload: 12,
           type: GET_DATA_REQUEST
       };

       const generator = fetchDataAsync(action);

       expect(generator.next().value)
           .toEqual(call(() => {
               return fetch('http://127.0.0.1:8000/cars-huge?page=' + 12 + '&limit=10')
                   .then(response => response.json())
           }));

       expect(generator.next().value)
           .toEqual(put(
               {type: GET_DATA_SUCCESS, payload: undefined}
           ));
   })
});