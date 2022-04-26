import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";

export default function App(){
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}>홈</Link>
                </li>
                <li>
                    <Link to={"/about?test=abc&second=bbbb"}>소개</Link>
                </li>
                <li>
                    <Link to={"/about/info"}>정보</Link>
                </li>
                <li>
                    <Link to={"/profiles"}>사용자 정보</Link>
                </li>
            </ul>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about/*"} element={<About/>}/>
                <Route path={"/profiles/*"} element={<Profiles/>}/>
            </Routes>
        </div>
    )
}