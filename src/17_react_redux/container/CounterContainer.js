import React from "react";
import Counter from "../component/Counter";
import {connect} from "react-redux";
import {decrease, increase} from "../modules/counter";
import {bindActionCreators} from "@reduxjs/toolkit";

const CounterContainer = ({number, increase, decrease}) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
}

const mapStateToProps = (state) => ({
    number: state.counter.number,
})

// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         dispatch(increase())
//     },
//     decrease: () => {
//         dispatch(decrease())
//     },
// })

const mapDispatchToProps = {
    increase,
    decrease
}

export default connect(mapStateToProps, mapDispatchToProps,)(CounterContainer)