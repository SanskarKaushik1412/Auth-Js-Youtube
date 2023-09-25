"use client";
import Link from "next/link";
import React,{useEffect} from "react";
import{useRouter} from "next/navigation";
import axios from "axios";
import{toast} from "react-hot-toast";



export default function signuppage() {
    const router = useRouter();
    const[user,setUser] =React.useState({
        email:"",
        password:"",
        username:"",
    })
      const [buttonDisabled, setButtonDisabled] = React .useState(false);
      const[loading,setLoading] = React.useState(false)

     const onsignup =async () => {
        console.log(user)
     try {
        setLoading(true);
       const response = await axios.post("/api/users/signup",user);
       console.log("signup success", response.data);
       router.push("/login");
        
     } catch (error:any) {
        console.log("signup failed", error.mesage);
        toast.error(error.message);
     }finally{
        setloading:(false);
     }
     }
     useEffect(()=>{
        if(user.email.length > 0 && user.email.length > 0 && user.email.length > 0 ) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
     },[user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className=" text-2xl"> 
            {loading ? "processing": "signup"}
            </h1>
            <label htmlFor="username">username</label>  
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id=""
            type=""
            value={user.username}
            onChange={(e)=> setUser({...user,username: e.target.value})}
            placeholder="username"
            />
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
            className="p-2 border border-color: coral; rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id=""
            type=""
            value={user.password}
            onChange={(e)=> setUser({...user,password: e.target.value})}
            placeholder="Password"
            />
            <button
            onClick={onsignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"> {buttonDisabled ? "No signup": "signup" }</button>
            <Link href="/login">Visit login  page</Link>
        </div>
    )

}