import * as actionTypes from './searchActionTypes';
import * as Config from '../../../config/config'

export const setUserInput = (userInput) => ({
    type: actionTypes.SET_INPUT,
    value: userInput
});

export const loadReposFailed = error => ({
    type: actionTypes.LOAD_REPOS_FAILED,
    value: error
});

export const loading = isLoading => ({
    type: actionTypes.LOADING,
    value: isLoading
});

export const setRepos = repos => ({
    type: actionTypes.SET_REPOS,
    value: repos
});

export const loadReposSuccess = () => ({
    type: actionTypes.LOAD_REPOS_SUCCESS
});


export const searchRepos = (userInput) => dispatch => {
    const repoSearchUrl = `https://api.github.com/users/${userInput}/repos`;

    dispatch(loading(true));
    fetch(repoSearchUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(response => {
            dispatch(setRepos(
                response
                    .filter(o => Config.EXCLUDE_LANG.indexOf(o.language.toUpperCase()) === -1)
                    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                )
            );
            dispatch(loading(false));
            dispatch(loadReposSuccess());
        })
        .catch(err => {
            dispatch(loadReposFailed(err));
            dispatch(loading(false));
        });
};