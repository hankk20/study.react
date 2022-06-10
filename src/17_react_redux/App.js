import React from "react";
import Counter from "./component/Counter";
import Todos from "./component/Todos";
import CounterContainer from "./container/CounterContainer";
import TodosContainer from "./container/TodosContainer";
import SampleContainer from "./container/SampleContainer";
import SamplePost from "./component/SamplePost";

export default function App(){
    return (
        <div>
            <CounterContainer/>
            <hr/>
            <TodosContainer/>
            <hr/>
            <SampleContainer/>
            <SamplePost/>
        </div>
    )
}