import React, {useState} from "react";

const Say = function() {
    const [message, setMessage] = useState()
    const [color, setColor] = useState('')

    return (
        <div>
            <button onClick={() => setMessage('안녕하세요')}>입장</button><br/>
            <button onClick={() => setMessage('안녕히가세요')}>퇴장</button><br/>
            <h1 style={color}>{message}</h1>
            <button style={{color : 'red'}} onClick={() => setColor('red')}>빨강</button>
            <button style={{color: 'blue'}} onClick={() => setColor('blue')}>파랑</button>
        </div>
    )
}

export default Say;