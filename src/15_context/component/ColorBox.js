import React, {useContext} from "react";
import ColorContext, {ColorConsumer} from "../context/color";


export default function ColorBox() {
    const {state} = useContext(ColorContext);
    return (
            <>
                <div style={{
                    width: '64px',
                    height: '64px',
                    background: state.color}}/>
                <div style={{
                    width: '64px',
                    height: '64px',
                    background: state.subcolor}}/>
            </>
    )
}