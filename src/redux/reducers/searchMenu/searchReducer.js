import * as actionTypes from '../../actions/searchMenu/searchActionTypes';

const initialState = {
    userInput: 'KonradSobolewski',
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INPUT: return {...state, userInput: action.value};
        default: return state;
    }
};