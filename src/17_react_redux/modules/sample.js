import * as api from '../lib/api'
import {createAction, createReducer} from "@reduxjs/toolkit";

const success = response =>
    ({payload: response.data});
const failure = error => ({payload: error});


const actionPost = createAction('sample/GET_POST');
const actionPostSuccess = createAction('sample/GET_POST_SUCCESS', success)
const actionPostFailure = createAction('sample/GET_POST_FAILURE', failure)

const actionUsers = createAction('sample/GET_USERS');
const actionUsersSuccess = createAction('sample/GET_USERS_SUCCESS', success)
const actionUsersFailure = createAction('sample/GET_USERS_FAILURE', failure)

export const getPostFn = function(id) {
    return async function (dispatch, getState){
        dispatch(actionPost()); //요청 시작
        try {
            const response = await api.getPost(id);
            dispatch(actionPostSuccess(response));
        }catch (e){
            dispatch(actionPostFailure(e));
            throw e;
        }
    }
}

export const getPost = id => async (dispatch, getState) => {
    debugger;
    dispatch(actionPost()); //요청 시작
    try {
        const response = await api.getPost(id);
        dispatch(actionPostSuccess(response));
    }catch (e){
        dispatch(actionPostFailure(e));
        throw e;
    }
}

export const getUsers = () => async dispatch => {
    dispatch(actionUsers())
    try{
        const response = await api.getUsers();
        dispatch(actionUsersSuccess(response))
    }catch (e) {
        dispatch(actionUsersFailure(e))
        throw e;
    }
}

const init = {
    loading : {
        GET_POST: false,
        GET_USERS: false
    },
    post: null,
    users: null,
}

const sample = createReducer(init, {
    [actionPost]: ({loading}) => {loading.GET_POST = true},
    [actionPostSuccess]: (state, {payload}) => {
        state.loading.GET_POST = false;
        state.post = payload;
    },
    [actionPostFailure]: ({loading}) => {loading.GET_POST = false},
    [actionUsers]: ({loading}) => {loading.GET_USERS = true},
    [actionUsersSuccess]: (state, {payload}) => {
        state.loading.GET_USERS = false;
        state.users = payload;
    },
    [actionUsersFailure]: ({loading}) => {loading.GET_USERS = false},

})

export default sample;
