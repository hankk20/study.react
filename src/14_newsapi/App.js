import React, {useCallback, useRef, useState} from "react";
import {Routes, Route} from "react-router-dom";
import NewsPage from "./pages/NewsPaeg";

export default function App(){
    return (
       <Routes>
           <Route path={"/"} element={<NewsPage/>}></Route>
           <Route path={":category"} element={<NewsPage/>}></Route>
       </Routes>
    )
}