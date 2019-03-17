import * as actionTypes from './searchActionTypes';

export const setUserInput = (userInput) => ({
    type: actionTypes.SET_INPUT,
    value: userInput
});