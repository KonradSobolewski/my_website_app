import * as actionTypes from "../../actions/cookies/cookiesActionTypes";

const initialState = {
  show: true
};

export const cookiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_COOKIES: return{...state, show: action.value};
        default: return state;
    }
};