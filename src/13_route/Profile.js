import React from "react";
import {useParams} from "react-router-dom";

const data = {
    han : {
        name : 'han kwang',
        description: 'hanhan'
    },
    jia : {
        name : 'han jia',
        description: 'daughter'
    }
};
const Profile = () => {
    const {username}  = useParams();
    const profile = data[username];
    if(!profile){
        return <div>존재하지 않은 사용자 입니다.</div>
    }

    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    )
}
export default Profile;