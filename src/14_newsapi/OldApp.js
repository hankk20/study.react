import React, {useCallback, useRef, useState} from "react";
import axios from "axios";
import NewsItem from "./component/NewsItem";
import NewsList from "./component/NewsList";
import Categories from "./component/Categories";

export default function App(){
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), [])

    return (
        <div>
            <Categories category={category} onSelect={onSelect}/>
            <NewsList category={category}/>
        </div>
    )
}