import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {createStore, combineReducers} from "redux";
import {searchReducer} from "./redux/reducers/searchMenu/searchReducer";
import {navbarReducer} from "./redux/reducers/navbar/navbarReducer";
import {mapReducer} from "./redux/reducers/googleMap/mapReducer";

const reducer = combineReducers({
    search: searchReducer,
    navbar: navbarReducer,
    map: mapReducer
});

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);
