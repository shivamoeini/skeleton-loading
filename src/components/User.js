import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const User = () => {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setProfile(data);
        }, 5000)
    })

    return (
        <div className="user">
            <h2>User Details</h2>
            {profile && profile.map(user => (
                <div className="profile">
                    <h3>{user.username}</h3>
                    <p>{user.email}</p>
                    <a href={user.website}>{user.website}</a>
                </div>
            ))}
            {!profile && <SkeletonProfile theme="light"/>}
        </div>

    )
}
export default User;