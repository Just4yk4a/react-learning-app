import "bootstrap/dist/css/bootstrap.css";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import {App} from "./containers/App";
import {index} from "./store/index";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={index}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
