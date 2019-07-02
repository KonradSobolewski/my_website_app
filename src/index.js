import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {searchReducer} from "./redux/reducers/searchMenu/searchReducer";
import {navbarReducer} from "./redux/reducers/navbar/navbarReducer";
import {mapReducer} from "./redux/reducers/googleMap/mapReducer";
import {languageReducer} from "./redux/reducers/language/languageReducer";
import thunk from 'redux-thunk';
import {cookiesReducer} from "./redux/reducers/cookies/cookiesReducer";
import {CookiesProvider} from 'react-cookie';

const reducer = combineReducers({
    search: searchReducer,
    navbar: navbarReducer,
    map: mapReducer,
    header: languageReducer,
    cookies: cookiesReducer
});

const store = createStore(reducer, compose(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </CookiesProvider>
    , document.getElementById('root')
);
