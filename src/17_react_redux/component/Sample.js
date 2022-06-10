import React, {useState} from "react";
import {useDispatch} from "react-redux";
import * as api from "../lib/api";
import {actionPost, actionPostFailure, actionPostSuccess} from "../modules/sample";

export default function Sample({loadingPost, loadingUsers, post, users}) {
    const [postNumber, setPostNumber] = useState("");

    const handleChange = (e) => {
        setPostNumber(e.target.value)
    }

    const dispatch = useDispatch();
    const handleClick = async () => {
        dispatch(actionPost()); //요청 시작
        console.log(`handle state ${loadingPost}`)
        try {
            const response = await api.getPost(postNumber);
            dispatch(actionPostSuccess(response));
            console.log(`handle state2 ${loadingPost}`)
        }catch (e){
            dispatch(actionPostFailure(e));
            throw e;
        }
        console.log(`handle state3 ${loadingPost}`)
    }

    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && '로딩중....'}
                {!loadingPost && post && (
                    <>
                        <div>
                            <h3>Title : {post.title}</h3>
                            <h3>Body : {post.body}</h3>
                        </div>
                        <div>
                            <input type={"text"} onChange={handleChange}/>
                            <button onClick={handleClick}>게시판번호 불러오기</button>
                        </div>
                    </>
                )}
            </section>
            <hr/>
            <section>
                <h1>사용자 목록</h1>
                {loadingUsers && '로딩중.....'}
                {!loadingUsers && users && (
                    <ul>
                        {users.map(user => <li key={user.id}>{user.name} ({user.email})</li>)}
                    </ul>
                    )
                }
            </section>
        </div>
    )
}