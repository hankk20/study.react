import {useState} from "react";

const Iterator = () => {
    const [names, setNames] = useState([
        {id: 1, text: '1번'},
        {id: 2, text: '2번'},
        {id: 3, text: '3번'},
        {id: 4, text: '4번'},
    ])
    const [inputText, setInputText] = useState('')
    const [nextId, setNextId] = useState(5);
    const nameList = names.map(n => <li key={n.id} onClick={() => {
        const postNames = names.filter(f => f.id != n.id)
        setNames(postNames)
    }}>{n.text}</li>)
    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextName = names.concat({
            id:nextId, text: inputText
        })
        setNextId(nextId+1)
        setNames(nextName)
        setInputText('')
    }
    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
}
export default Iterator;