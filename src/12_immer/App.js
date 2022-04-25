import React, {useCallback, useRef, useState} from "react";
import produce from "immer";

export default function App() {
    const nextId = useRef(1);
    const [form, setForm] = useState({name : '', username: ''})
    const [data, setData] = useState({array:[], uselessValue: null});

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setForm(prevState => {return {...prevState, [name]:value}})
        // setForm(
        //     produce(draft => {
        //         draft[name] = value
        //     }))
    }, [])

    const onSubmit = useCallback( e => {
        e.preventDefault();
        const info = {
            id: nextId.current,
            name: form.name,
            username: form.username
        };

        setData(
            produce(draft => {
                draft.array.push(info)
        }))

        setForm({
            name: '',
            username: ''
        })
        nextId.current += 1;
    },[form.name, form.username])

    const onRemove = useCallback(id => {

        setData(produce(draft => {
            draft.array.splice(
                draft.array.findIndex(info => info.id === id)
                , 1)
        }))
    }, [])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name={"username"}
                       placeholder={"아이디"}
                       value={form.username}
                       onChange={onChange}
                />
                <input name={"name"}
                       placeholder={"이름"}
                       value={form.name}
                       onChange={onChange}
                />
                <button onSubmit={onSubmit}>확인</button>
                <div>
                    <ul>
                        {data.array.map(info => <li key={info.id} onClick={() => onRemove(info.id)}>{info.username} {info.name}</li> )}
                    </ul>
                </div>
            </form>
        </div>
    )
}