import React from "react";
import Todos from "../component/Todos";
import {connect} from "react-redux";
import {changeInput, insert, remove, toggle} from "../modules/todos";

//4. mapStateToProps에서 생성한 정보와 dispatch연결한 함수를 Props로 넘겨줌
const TodosContainer = ({todos, input, toggle, changeInput, insert, remove}) => {
    return <Todos todos={todos}
                  input={input}
                  onToggle={toggle}
                  onChangeInput={changeInput}
                  onInsert={insert}
                  onRemove={remove}/>
}

//3. Container에 넘겨줄 Props를 state에서 뽑아서 가공
const mapStateToProps = ({todos}) => ({
    input: todos.input,
    todos: todos.todos,
})

//2. state, dispatch 연결 함수를 제공하여 Container와 Redux 연결
export default connect(mapStateToProps, {
    toggle,
    changeInput,
    insert,
    remove
})(TodosContainer)