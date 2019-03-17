import * as actionTypes from './mapActionTypes';

export const setInfoWindow = (value) => ({
    type: actionTypes.SET_SHOW_INFO,
    value: value
});

export const setActionMarker = (value) => ({
    type: actionTypes.SET_ACTION_MARKER,
    value: value
});

export const setSelectedPlace = (value) => ({
    type: actionTypes.SET_SELECTED_PLACE,
    value: value
});