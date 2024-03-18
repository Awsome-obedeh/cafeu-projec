import Image from 'next/image'
import React from 'react'
import { Poppins } from 'next/font/google'
import Button from './Button'

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight:'400'
})


export default function ThirdSection() {
    return (
        <div className='third-section'>
            <div className="img-con" data-aos="fade-right">
                <Image src="https://cafeu.vercel.app/img/image/exparience.png" fill={true} className='about-img'/>
            </div>

            <div className='third-section-text' data-aos="fade-left">
                <p className={poppins.className}>About us</p>
                <h2>Why We are the best</h2>
                <p>Quis autem vel eum iure reprehenderit qui in evoluptate velit esse qua nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quvoluptas nulla
                    pariatureaque ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.</p>
                    <Button name="About us"/>
            </div>
        </div>
    )
}
