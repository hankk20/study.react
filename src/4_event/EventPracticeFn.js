import React, {useState} from "react";

const EventPracticeFn = () => {
    const [form, setForm] = useState({
        message: '',
        username: ''
    })
    const onChange = (e) => setForm({...form, [e.target.name]:e.target.value})

    const onClick = () => {
        console.log(form.username +", "+form.message);
        setForm({message: '', username: ''})
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type={"text"}
                name={"message"}
                placeholder={"아무거나"}
                value={form.message}
                onChange={onChange}
            />
            <input
                type={"text"}
                name={"username"}
                placeholder={"아무거나"}
                value={form.username}
                onChange={onChange}
            />
            <button onClick={onClick}
            >확인</button>
        </div>
    )

}

export default EventPracticeFn;