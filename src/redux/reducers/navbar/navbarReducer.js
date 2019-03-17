import * as actionTypes from '../../actions/navbar/navbarActionTypes';

const initialState = {
    view: 0
};

export const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_VIEW: return {...state, view: action.value};
        default: return state;
    }
};