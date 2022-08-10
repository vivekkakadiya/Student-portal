import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'



export const Login = () => {
    
    let history = useNavigate();    
    
    const [id,setId]=useState("");
    const [password,setPassword]=useState("");
    
    
    const LoginUser = async(e) => {
        e.preventDefault();
        const res = await fetch('/login',{
            
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id,password
            })
        })
        
        
        if(res.status===400){
            alert("invalid")
            console.log("invaild");
        }else if (res.status===200) {
            alert("sucess")
            console.log("login");
            history("/Profile");
        }
    }

        

    return (

        <>
        <form method='POST'>
            
            <div className="container">
                <h2>Login Form</h2>
                <label htmlFor="uname">
                    <b>Username</b>
                </label>
                <input type="text" placeholder="Enter Username" name="id" onChange={(e)=>{ setId(e.target.value) }} required="" />
                <label htmlFor="psw">
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" id="password" onChange={(e)=>{ setPassword(e.target.value) }}/>
                <button type="button" onClick={LoginUser}>
                    Login
                </button>
            </div>

        </form>

        </>
    );

}