import React from "react";
import {useLocation} from "react-router-dom";
import qs from 'qs'

export default function About(){
    const query = qs.parse(useLocation().search, {ignoreQueryPrefix:true});

    return (
        <div>
            <h1>소개</h1>
            <p>{query.test} {query.second} :: 소개 페이지</p>
        </div>
    )
}