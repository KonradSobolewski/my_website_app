import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {createStore, combineReducers,applyMiddleware,compose} from "redux";
import {searchReducer} from "./redux/reducers/searchMenu/searchReducer";
import {navbarReducer} from "./redux/reducers/navbar/navbarReducer";
import {mapReducer} from "./redux/reducers/googleMap/mapReducer";
import {languageReducer} from "./redux/reducers/language/languageReducer";
import thunk from 'redux-thunk';

const reducer = combineReducers({
    search: searchReducer,
    navbar: navbarReducer,
    map: mapReducer,
    header: languageReducer
});

const store = createStore(reducer, compose(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);
