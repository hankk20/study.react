import React, {useCallback, useMemo, useRef, useState} from "react";

const getAerage = numberList => {
    if(numberList.length == 0) {
        return 0;
    }
    const sum = numberList.reduce((a, b) => a+b)
    return sum / numberList.length;
}

const Avg = () => {
    const [list, setList] = useState([])
    const [number, setNumber] = useState('');
    const inputRef = useRef(null) //DOM 네임 지정

    const onInsert = useCallback((e) => {
        const conList = list.concat(parseInt(number)); //함수 갱신 하지 않으면 초기값 그대로 가지고 있음
        setList(conList);
        setNumber('')
    }, [list, number]) //list, number 값이 변경될때에 함수 새로 생성

    const onchange = useCallback((e) => {
        setNumber(e.target.value);
        console.log(inputRef)
    },[]) //한번 생성후 재사용

    const avge = useMemo(() => getAerage(list), [list])
    return (
        <div>
            <input value={number} onChange={onchange} ref={inputRef}/>
            <button onClick={onInsert}>추가</button>
            <ul>
                {
                    list.map((n, i) => <li key={i}>{n}</li>)
                }
            </ul>
            <div>
                평균값 : {avge}
            </div>
        </div>
    )
}
export default Avg;