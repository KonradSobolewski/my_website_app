import * as actionTypes from '../../actions/googleMap/mapActionTypes';

const initialState = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
};

export const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SELECTED_PLACE: return {...state, selectedPlace: action.value};
        case actionTypes.SET_SHOW_INFO: return {...state, showingInfoWindow: action.value};
        case actionTypes.SET_ACTION_MARKER: return {...state, activeMarker: action.value};
        default: return state;
    }
};