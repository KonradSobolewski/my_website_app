import * as actionTypes from "./cookiesActionTypes";

export const showCookies = (value) => ({
    type: actionTypes.SHOW_COOKIES,
    value: value
});