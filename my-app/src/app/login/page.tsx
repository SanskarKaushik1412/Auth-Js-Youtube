"use client";
import Link from "next/link";
import React from "react";
import{useRouter} from "next/navigation";
import axios from "axios";
import css from "styled-jsx/css";




export default function Loginpage() {
    const[user,setUser] =React.useState({
        email:"",
        password:"",
       
    })

     const onLogin =async () => {

     }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className=" text-2xl"> 
            Login
            </h1>
            <label htmlFor="email">email</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id=""
            type=""
            value={user.email}
            onChange={(e)=> setUser({...user,email: e.target.value})}
            placeholder="email"
            />
             <label htmlFor="Password">Password</label>
             <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id=""
            type=""
            value={user.Password}
            onChange={(e)=> setUser({...user,Password: e.target.value})}
            placeholder="Password"
            />
            <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"> Login here</button>
            <Link href="/signup">Visit Signup  page</Link>
        </div>
    )

}