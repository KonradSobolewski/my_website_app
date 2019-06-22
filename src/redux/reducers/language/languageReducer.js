import * as actionTypes from '../../actions/language/languageActionTypes';

const initialState = {
    switch: true
};

export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ENG: return{...state, switch: action.value};
        default: return state;
    }
};