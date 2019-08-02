import * as actionTypes from '../../actions/expModal/expModalActionTypes'

const initialState = {
    show: false,
    items: []
};

export const expModalReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_SHOW: {
            return{...state, show: action.value};
        }
        case actionTypes.SET_ITEMS: {
            return{...state, items: action.value};
        }
        default: return state;
    }
};