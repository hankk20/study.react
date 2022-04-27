import React from "react";
import ColorBox from "./component/ColorBox";
import ColorContext, {ColorProvider} from "./context/color";


export default function App(){
    return (
        <ColorProvider>
            <div>
                <ColorBox/>
            </div>
        </ColorProvider>
    )
}