import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Sample from "../component/Sample";
import {getPost, getUsers} from "../modules/sample";


export default function SampleContainer(){
    const post = useSelector(({sample}) => sample.post)
    const users = useSelector(({sample}) => sample.users);
    const loadingPost = useSelector(({sample}) => sample.loading.GET_POST);
    const loadingUsers = useSelector(({sample})=> sample.loading.GET_USERS);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost(1));
        dispatch(getUsers(1));
    }, [dispatch])
    return <Sample post={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers}/>
}