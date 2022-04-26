import React from "react";
import {Link, Routes, Route} from "react-router-dom";
import Profile from "./Profile";

export default function Profiles(){
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to={"/profiles/han"}>Han</Link>
                </li>
                <li>
                    <Link to={"/profiles/jia"}>jia</Link>
                </li>
            </ul>
            <Routes>
                <Route path={"*"} element={<div>사용자를 선택 해주세요</div>}/>
                <Route path={":username"} element={<Profile/>}/>
            </Routes>
        </div>
    )
}