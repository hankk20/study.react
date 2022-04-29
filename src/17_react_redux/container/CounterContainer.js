import React, {useCallback} from "react";
import Counter from "../component/Counter";
import {decrease, decreaseAsync, increase, increaseAsync} from "../modules/counter";
import {useDispatch, useSelector} from "react-redux";

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increaseAsync()), [dispatch])
    const onDecrease = useCallback(() => dispatch(decreaseAsync()), [dispatch])
    return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
}

export default CounterContainer;