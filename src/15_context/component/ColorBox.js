import React from "react";
import ColorContext, {ColorConsumer} from "../context/color";


export default function ColorBox() {
    return (
        <ColorConsumer>
            {
                value => (

                    <>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            background: value.state.color}}/>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            background: value.state.subcolor}}/>
                    </>
                )
            }
        </ColorConsumer>
    )
}