//Action Type 정의
import {createAction, createReducer} from "@reduxjs/toolkit";
import {delay, put, takeEvery} from 'redux-saga/effects'

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//Action 함수 정의
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseS = createAction('counter/INCREASE_ASYNC', () => undefined)
export const decreaseS = createAction('counter/DECREASE_ASYNC', () => undefined)

function* increaseSaga() {
    yield delay(100);
    yield put(increase());
}

function* decreaseSaga() {
    yield delay(100);
    yield put(decrease());
}

export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase())
    }, 1000)
}
export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease())
    }, 1000)
}

// export const increase = () => ({type: INCREASE});
// export const decrease = () => ({type: DECREASE});

//Reducer 정의
const initialState = {
    number : 0
}

const counter = createReducer(initialState, {
    [INCREASE]: state => ({number: state.number+1}),
    [DECREASE]: state => ({number: state.number-1})
})

// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1
//             }
//         case DECREASE:
//             return {
//                 number: state.number - 1
//             }
//         default:
//             return state;
//     }
// }
export default counter;