import React from "react";
import {useParams} from "react-router-dom";
import Categories from "../component/Categories";
import NewsList from "../component/NewsList";

export default function NewsPage(){
    const {category} = useParams();
    const categoryProc = category || 'all';
    return (
        <>
            <Categories/>
            <NewsList category={categoryProc}/>
        </>
    )
}