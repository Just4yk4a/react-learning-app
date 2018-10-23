import * as  React from "react";
import {Redirect, Route, Switch} from "react-router";

import {CarsHuge} from "../../containers/CarsHuge";
import {Header} from "../Header";
import List from "../List/index";

export const App = () => (
    <div>
        <Header/>
        <Switch>
            <Route exact={true} path="/list" component={List}/>
            <Route exact={true} path="/list/cars-huge" component={CarsHuge}/>
            <Route path='*' component={redirect}/>
        </Switch>
    </div>
)
    function redirect() {
        return <Redirect to={{pathname: '/list'}}/>;
    };