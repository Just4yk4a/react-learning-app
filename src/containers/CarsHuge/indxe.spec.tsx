import {shallow} from "enzyme";
import * as React from "react";
import Row from "./row";

describe("Test Row component", () => {
    it("Row", () => {
        const prop:any = {
            brand: "VOLVO",
            color: "RED",
            vin: 123,
            year: 1990
            };

        const output = shallow(<Row car={prop}/>);
        expect(output).toMatchSnapshot();
    });
});