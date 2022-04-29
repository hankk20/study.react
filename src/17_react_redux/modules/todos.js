//ActionType 정의
import {createAction, createReducer} from "@reduxjs/toolkit";

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //Input 값 변경
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

//Action 함수
export const changeInput = createAction(CHANGE_INPUT, input => ({payload: input}))
// export const changeInput = (input) => ({
//     type:CHANGE_INPUT,
//     input
// })

let id = 3;
export const insert = createAction(INSERT, text =>
    ({payload: {
            id: id++,
            text,
            done: false}
        })

)
// export const insert = (text) => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false
//     }
// })

export const toggle = createAction(TOGGLE, id => ({payload: id}))
// export const toggle = id => ({
//     type: TOGGLE,
//     id
// })

export const remove = createAction(REMOVE, id => ({payload:id}))
// export const remove = (id) => ({
//     type: REMOVE,
//     id
// })

//초기값 정의
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 1',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스',
            done: false
        }
    ]
}

//Reducer 정의

//typeScript 용
// const todos = createReducer(initialState, (builder => {
//     builder.addCase(changeInput, (state, {payload}) => {state.input = payload})
//     builder.addCase(insert, (state, {payload}) => {
//         state.todos.push(payload)
//     })
// }))

//toolkit의 createReducer는 Immer 자동 적용
const todos = createReducer(initialState, {
    //화살표 함수가 한줄일때 {} 사용 하지 않으면 해당 문구는 return이 됨 immer는 리턴이 있으면 안되므로 {} 감싸준다
    //todos는 객체이기 때문에 proxy 객체로 생성하지만 input은 state의 값이므로 immer에서 proxy로 생성을 못한다.
    [changeInput]: (state, {payload}) => {state.input = payload},
    [insert]: ({todos}, {payload}) => {todos.push(payload)},
    [toggle]: ({todos}, {payload}) => {
        const todo = todos.find(todo => todo.id === payload);
        todo.done = !todo.done;
    },
    [remove]: ({todos}, {payload}) => {
        todos.splice(todos.findIndex(todo => todo.id === payload), 1)
    }
})

// const todos = (state = initialState, action) => {
//     switch (action.type){
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.payload.input
//             }
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             }
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo => todo.id === action.id? {
//                     ...todo,
//                     done: !todo.done
//                 }: todo)
//             }
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             }
//         default:
//             return state;
//     }
// }
export default todos;