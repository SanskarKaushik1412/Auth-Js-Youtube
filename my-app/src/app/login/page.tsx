"use client";
import Link from "next/link";
import React,{useEffect} from "react";
import{useRouter} from "next/navigation";
import axios from "axios";
import {toast} from "react-hot-toast";





export default function Loginpage() {
    const router = useRouter();
    const[user,setUser] =React.useState({
        email:"",
        Password:"",
       
    })
    const [buttonDisabled, setButtonDisabled] = React .useState(false);
    const[loading,setLoading] = React.useState(false)

     const onLogin =async () => {

        try {
            setLoading(true);
           const response = await axios.post("/api/users/login",user);
           console.log("login success", response.data);
           toast.success("login success");
           router.push("/Profile");
            
         } catch (error:any) {
            console.log("Login failed", error.mesage);
            toast.error(error.message);
         }finally{
            setloading:(false);
         }
     }
     useEffect(()=>{
        if(user.email.length > 0  && user.Password.length > 0 ) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
        },[user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className=" text-2xl"> 
            {loading ? "processing":"Login"}
            </h1>
            <label htmlFor="email">email</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id=""
            type=""
            value={user.email}
            onChange={(e)=> setUser({...user,email: e.target.value})}
            placeholder="email"
            />
             <label htmlFor="Password">Password</label>
             <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id=""
            type=""
            value={user.Password}
            onChange={(e)=> setUser({...user,Password: e.target.value})}
            placeholder="Password"
            />
            <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"> Login here</button>
            <Link href="/signup">Visit Signup  page</Link>
        </div>
    )

}