import React, {useCallback} from "react";
import Todos from "../component/Todos";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {changeInput, insert, remove, toggle} from "../modules/todos";

//4. mapStateToProps에서 생성한 정보와 dispatch연결한 함수를 Props로 넘겨줌
const TodosContainer = () => {

    const {todos, input} = useSelector(({todos}) => ({todos: todos.todos, input: todos.input}), shallowEqual);
    // const todos = useSelector(state => state.todos.todos)
    // const input = useSelector(state => state.todos.input)
    const dispatch = useDispatch();
    const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch])
    const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch])
    const onInsert = useCallback(todo => dispatch(insert(todo)), [dispatch])
    const onRemove = useCallback(id => dispatch(remove(id)),[dispatch]);

    return <Todos todos={todos}
                  input={input}
                  onToggle={onToggle}
                  onChangeInput={onChangeInput}
                  onInsert={onInsert}
                  onRemove={onRemove}/>
}

export default TodosContainer;

//3. Container에 넘겨줄 Props를 state에서 뽑아서 가공
// const mapStateToProps = ({todos}) => ({
//     input: todos.input,
//     todos: todos.todos,
// })

//2. state, dispatch 연결 함수를 제공하여 Container와 Redux 연결
// export default connect(mapStateToProps, {
//     toggle,
//     changeInput,
//     insert,
//     remove
// })(TodosContainer)