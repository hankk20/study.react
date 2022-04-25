import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function App(){
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}>홈</Link>
                </li>
                <li>
                    <Link to={"/about"}>소개</Link>
                </li>
                <li>
                    <Link to={"/about/info"}>정보</Link>
                </li>
            </ul>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about/*"} element={<About/>}/>
            </Routes>
        </div>
    )
}