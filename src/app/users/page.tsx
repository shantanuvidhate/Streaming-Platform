"use client";
import { signOut } from "next-auth/react";

const User =()=>{
    return (
        <div className="text-white">
            User
            <div>
                <button className="text-white" onClick={()=>signOut()}> Sign Out</button>
            </div>
        </div>
    );
}
export default User;