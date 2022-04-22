import React, {useCallback, useRef, useState} from "react";
import TodoTemplate from "./component/TodoTemplate";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
const createBulk = () => {
    const array = [];
    for (let i = 0; i < 2500; i++) {
        array.push({
            id : i,
            text: `할일 ${i}`,
            checked: false
        })
    }
    return array;
}
const App = () => {
    const [todos, setTodos] = useState(createBulk);

    const nextId = useRef(4);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        }
        setTodos(todos => todos.concat(todo))
        nextId.current = ++nextId.current;
    }, [todos],)

    const onDelete = useCallback(id => {
        setTodos(todos => todos.filter(t => t.id !== id));
    }, [todos],)

    const onToggle = useCallback(id => {
        setTodos(todos => todos.map(todo => todo.id === id? {...todo, checked: !todo.checked}: todo))
    }, [todos],)

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle}/>
        </TodoTemplate>
    )
}
export default App;
