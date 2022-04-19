import React, {useReducer} from "react";

function reducer(state, action){
    return {
        ...state,  //useReducer 두번째 argument {name, nickname}
        [action.name] : action.value //onChange 메소드의 이벤트 e.target
    }
}

const Info = () => {
    const[state, dispatch] = useReducer(reducer, {name:'', nickname: ''});
    const {name, nickname} = state;
    const onChange = (e) => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <input name={'name'} value={name} onChange={onChange}/>
                <input name={'nickname'} value={nickname} onChange={onChange}/>
            </div>
            <div>
                <b>이름 : </b> {name}
            </div>
            <div>
                <b>닉네임 : </b> {nickname}
            </div>
        </div>
    )
}

export default Info;