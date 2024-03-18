import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { Roboto_Mono } from 'next/font/google'
import { IoPlay } from "react-icons/io5";

const roboto_mono = Roboto_Mono({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function HeroComp() {
    return (

        <div className="container">
        <div className='hero'>
            <div className="first-sec" data-aos="fade-right">
                <h2 className={`${roboto_mono.className} title`}>Best In Cafeu </h2>
                <h1 className="intro-text">Different  <span className='underline'>Spice</span> 
                <br></br>For A different Taste</h1>
                <p className="dummy">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia
                    dolore obcaecati beatae impedit fuga dignissimos illo facere voluptatum veritatis.
                    Totam, consequuntur aliquam unde officia suscipit debitis ipsum a! Cupiditate!
                </p>

                <div className='play-btn'>
                    <Button name="order" />
                    <button className='play-btn-vid'><IoPlay className='play-icon'/></button>
               
                </div>
            </div>

            <div className="image-section " data-aos="fade-left">
                <div className="hero-image-con">
                    <Image src="https://cafeu.vercel.app/img/slider/baner1.png" fill={true} className='hero-image' /> 
                </div>
            </div>
        </div>

        </div>
    )
}
