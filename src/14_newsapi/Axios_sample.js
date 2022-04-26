import React, {useState} from "react";
import axios from "axios";

export default function App(){
    const [data, setData] = useState(null);

    const onClick = () => {
        setData(null)
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.data)
            .then(data => setData(data))
        console.log("1")
    }

    const asynClick = async () => {
        setData(null)
        await axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.data)
            .then(data => setData(data))
        console.log("1")
    }

    return (
        <div>
            <button onClick={onClick}>가져오기</button><br/>
            <button onClick={asynClick}>Async 가져오기</button><br/>
            {
                data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}></textarea>
            }
            {
                console.log("bb")
            }
        </div>
    )
}