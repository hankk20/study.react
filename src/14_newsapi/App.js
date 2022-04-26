import React, {useState} from "react";
import axios from "axios";

export default function App(){
    const [data, setData] = useState(null);
    const newUrl = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=46b981dbed6a4cc080cec76d4372c484';
    const onClick = () => {
        setData(null)
        axios.get(newUrl)
            .then(response => response.data)
            .then(data => setData(data))
        console.log("1")
    }

    const asynClick = async () => {
        setData(null)
        await axios.get(newUrl)
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