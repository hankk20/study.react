import React from "react";
import ColorBox from "./component/ColorBox";
import ColorContext, {ColorProvider} from "./context/color";
import SelectColor from "./component/SelectColor";


export default function App(){
    return (

        <ColorProvider>  {/* Provider를 통해 value를 자식까지 전파 */}
            <div>
                <SelectColor/>
                <ColorBox/>
            </div>
        </ColorProvider>
    )
}