"use client"
import React, { useEffect, useState } from 'react'
import './form.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Form() {
    const router = useRouter()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    const [loader, setLoader] = useState(false)

    // useEffect(()=>{
    //     setTimeout(async()=>{

            
    //     },3000)
    // },[])

    const submitHandler = async (e) => {
        // prevent default form submission
        console.log(e)
        e.preventDefault()
        // validatate form inputs
        if (!firstName) {
            setErr('provide firstname')
        }
        else if (!lastName) {
            setErr('provide lastname')
        }
        else if (!email) {
            setErr('provide email')
        }
        else if (!password) {
            setErr('provide password')
        }
        else {
            setLoader(true)

            
            const data = { firstName, lastName, email, password }
            // move form data to api
            const url = "http://localhost:3000/api/register/"
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // you must strigify the data we are sending to json format
                body: JSON.stringify(data)

            })
            await res.json()
            console.log(res)

            // route to login page
            if (res.ok) {
                // redirect login page
                router.replace('/login')

            }
            if(res.status==500){
                setLoader(false)
                // clear the value of all inputs(david)
                // show user the err
                setErr("server Error")
            }
        }

    }




    return (
        <div className="container">
            <form action="" className='form' onSubmit={submitHandler}>
                {err ? <p className="err">{err}</p> : ''}

                <div className="formGroup">
                    <label htmlFor="" className="label">Firstname</label>
                    <input type="Text" className="formControl" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="formGroup">
                    <label htmlFor="" className="label">LastName</label>
                    <input type="Text" className="formControl" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="formGroup">
                    <label htmlFor="" className="label">Email</label>
                    <input type="Text" className="formControl" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="formGroup">
                    <label htmlFor="" className="label">Password</label>
                    <input type="password" className="formControl" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button className="btn2">Submit   </button>
                {/* render loader conditionally */}


                {


                    loader && <div className="loading-con">
                        <div className="loader "></div>
                    </div>


                }


            </form>
        </div>
    )
}
