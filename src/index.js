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
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import {purple, grey} from '@material-ui/core/colors'
import * as serviceWorker from './serviceWorker';
import {expModalReducer} from "./redux/reducers/expModal/expModalReducer";

const theme = createMuiTheme({
    typography: {
        fontSize: 12,
        '@media (max-width:600px)': {
            fontSize: 6,
        }
    },
    palette: {
        primary: {
            main: purple["600"],
        },
        secondary: {
            main: grey["700"]
        },
        type: "light"
    }
});

const reducer = combineReducers({
    search: searchReducer,
    navbar: navbarReducer,
    map: mapReducer,
    header: languageReducer,
    cookies: cookiesReducer,
    modal: expModalReducer
});

const store = createStore(reducer, compose(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <CookiesProvider>
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MuiThemeProvider>
    </CookiesProvider>
    , document.getElementById('root')
);

serviceWorker.register();
