"use client"
import React, {useState} from 'react'
import './login.css'
export default function Login() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [err,setErr]=useState('')
    // a function to handle our login sumbit to the api
    const loginHandler=async (e)=>{
        // preven default submission/refresh the page 
        e.preventDefault()

        // validation
        if(!email){
            setErr("provide mail")
        }
        else if(!password){
            setErr('Provide password')
        }
        else{
                // make request to api/login/
                const res= await fetch("http://localhost:3000/api/login/",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({email,password})


                })
        }
    }
  return (
    <div className="container">
    <form action="" className='form' onSubmit={loginHandler} >
        {err ? <p className="err">{err}</p> : ''}


        <div className="formGroup">
            <label htmlFor="" className="label">Email</label>
            <input type="Text" className="formControl" onChange={(e) => {setEmail(e.target.value)} }/>
        </div>
        <div className="formGroup">
            <label htmlFor="" className="label">Password</label>
            <input type="password" className="formControl"  onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>

        <button className="btn2">Submit   </button>
        {/* render loader conditionally */}


        {/* {


            loader && <div className="loading-con">
                <div className="loader "></div>
            </div>


        } */}


    </form>
</div>
  )
}
