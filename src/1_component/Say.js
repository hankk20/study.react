import React, {useEffect, useState} from "react";

const Say = () => {
    /* const b = useState();
    const message = b[0];
    const setMessage = b[1];
     */
    const [message, setMessage] = useState()
    const [color, setColor] = useState('')
    useEffect(() => {
        console.log("언제실행?"+ color)
    }, [color])

    return (
        /*주석*/
        //주석
        <div>
            <button onClick={() => setMessage('안녕하세요')}>입장</button>
            <button onClick={() => setMessage('안녕히가세요')}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color : 'red'}} onClick={() =>
                setColor('red')}>빨강</button>
            <button style={{color: 'blue'}} onClick={() => setColor('blue')}>파랑</button>
        </div>
    )
}

export default Say;