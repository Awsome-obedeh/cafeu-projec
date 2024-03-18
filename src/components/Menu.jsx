import Image from 'next/image'
import React from 'react'
import './menu.css'
import MenuCard from './MenuCard'

export default function Menu() {
  return (
    <div className='menu-container'> 
      <div className="menu-header">
        <p>Specila menu</p>
        <h1>our special menu</h1>
        <div className="icons">
          <Image src="https://cafeu.vercel.app/img/category/icon/1.png" width={100} height={100} alt="images" />
          <Image src="https://cafeu.vercel.app/img/category/icon/1.png" width={100} height={100} alt="images" />
          <Image src="https://cafeu.vercel.app/img/category/icon/1.png" width={100} height={100} alt="images" />
          <Image src="https://cafeu.vercel.app/img/category/icon/1.png" width={100} height={100} alt="images" />

        </div>
      </div>
      <div className="collections">
        <MenuCard 
          src="https://cafeu.vercel.app/img/product/1.png"
          fee="$10.00"
          price="$50"
          desc="lorem lore mlorem lorel lorem"
        />
        <MenuCard 
          src="https://cafeu.vercel.app/img/product/2.png"
          fee="$10.00"
          price="$50"
          desc="lorem lore mlorem lorel lorem"
        />
        <MenuCard 
          src="https://cafeu.vercel.app/img/product/3.png"
          fee="$10.00"
          price="$50"
          desc="lorem lore mlorem lorel lorem"
        />
      </div>
      <div className="collections">
        <MenuCard 
          src="https://cafeu.vercel.app/img/product/4.png"
          fee="$10.00"
          price="$50"
          desc="lorem lore mlorem lorel lorem"
        />
        <MenuCard 
          src="https://cafeu.vercel.app/img/product/5.png"
          fee="$10.00"
          price="$50"
          desc="lorem lore mlorem lorel lorem"
        />
        <MenuCard 
          src="https://cafeu.vercel.app/img/product/6.png"
          fee="$10.00"
          price="$50"
          desc="lorem lore mlorem lorel lorem"
        />
      </div>
    </div>
  )
}
