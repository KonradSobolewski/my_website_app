import * as actionTypes from "./expModalActionTypes";

export const setShow = (value) => ({
    type: actionTypes.SET_SHOW,
    value: value
});

export const setItems = (value) => ({
    type: actionTypes.SET_ITEMS,
    value: value
});