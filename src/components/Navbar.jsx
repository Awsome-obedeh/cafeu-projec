"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { IoSearch } from "react-icons/io5";
import { MdPhoneBluetoothSpeaker } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { IoCloseCircleSharp } from "react-icons/io5";
import './firstsection.css'
import ThemeToggle from './ThemeToggle';




export default function Navbar() {

    const [nav, setNav] = useState(false)

    function navHandler() {
        setNav(true)
    }
    function hideNavHandler(){
        setNav(false)
    }
    return (
        <>
            <nav className='navbar'>
                <div className="image-con">

                    <Image src="https://cafeu.vercel.app/img/logo/logo.png" fill={true} className='logo' />
                </div>

                <ThemeToggle/>
                <ul className='nav-links'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Menu</Link></li>
                    <li><Link href="/">Blog</Link></li>
                    <li><Link href="/">Pages</Link></li>
                    <li><Link href="/">Contact</Link></li>
                    <IoSearch />
                    <MdPhoneBluetoothSpeaker />
                    <p>1123445677</p>


                </ul>
                <CgMenu className='hamburger' onClick={navHandler} />
            </nav>

            <div className="mobile-nav">
                <ul className={`${nav ? 'show' : ' '} mobile-nav-links`}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Menu</Link></li>
                    <li><Link href="/">Blog</Link></li>
                    <li><Link href="/">Pages</Link></li>
                    <li><Link href="/">Contact</Link></li>
                    <li><IoSearch /></li>
                    <li><MdPhoneBluetoothSpeaker /></li>


                    <p>1123445677</p>

                <IoCloseCircleSharp className='close' onClick={hideNavHandler}/>
                </ul>
            </div>


        </>


    )
}
