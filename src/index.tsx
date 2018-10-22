import "bootstrap/dist/css/bootstrap.css";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import {App} from "./components/App";
import {store} from "./store/configureStore";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
