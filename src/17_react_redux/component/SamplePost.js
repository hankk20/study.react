import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as api from "../lib/api";
import {actionPost, actionPostFailure, actionPostSuccess} from "../modules/sample";

export default function SamplePost() {

    const post = useSelector(({sample}) => sample.post)
    const loadingPost = useSelector(({sample}) => sample.loading.GET_POST);
    return (
        <div>
            <section>
                <h1>포스트2</h1>
                {loadingPost && '로딩중....'}
                {!loadingPost && post && (
                    <>
                        <div>
                            <h3>Title : {post.title}</h3>
                            <h3>Body : {post.body}</h3>
                        </div>
                    </>
                )}
            </section>
            <hr/>
        </div>
    )
}