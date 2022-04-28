//ActionType 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //Input 값 변경
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

//Action 함수
export const changeInput = (input) => ({
    type:CHANGE_INPUT,
    input
})

let id = 3;
export const insert = (text) => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
})

export const toggle = id => ({
    type: TOGGLE,
    id
})

export const remove = (id) => ({
    type: REMOVE,
    id
})

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
const todos = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            }
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            }
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id? {
                    ...todo,
                    done: !todo.done
                }: todo)
            }
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        default:
            return state;
    }
}
export default todos;