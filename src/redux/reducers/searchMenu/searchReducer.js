import * as actionTypes from '../../actions/searchMenu/searchActionTypes';

const initialState = {
    userInput: 'KonradSobolewski',
    loading: false,
    repositories: [],
    error: null
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INPUT: return {...state, userInput: action.value};
        case actionTypes.SET_REPOS: return {...state, repositories: action.value.sort()};
        case actionTypes.LOADING: return {...state, loading: action.value};
        case actionTypes.LOAD_REPOS_FAILED: return {...state, error: action.value};
        case actionTypes.LOAD_REPOS_SUCCESS: return {...state, error: null};
        default: return state;
    }
};