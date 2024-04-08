"use client"
import Image from "next/image";
import styles from "./page.module.css";
import HeroComp from "@/components/HeroComp";
import Card from "@/components/card";
import Head from "next/head";
import Banner from "@/components/banner";
import ThirdSection from "@/components/ThirdSection";
import Menu from "@/components/Menu";

export default  async function Home() {
  // making a get request to /api/movie
  // make a request /api/movies/
  const getMovies= async ()=>{
    const res=await fetch("http://localhost:3000/api/movie")
    // convert api response that is in json to object
    return await res.json()
  }

  const data=await getMovies()

  // make a post request
  const response=await fetch('http://localhost:3000/api/sendMovie',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",

    },
    body:JSON.stringify({name:"obed", sex:"male", phone:"0901838392913"})
  })
  console.log(response)

  await response.json()
  console.log(response)

 

console.log(data)
  return (
    

    <>

    <HeroComp/>


   
    <div className="card-con" data-aos="fade-down">
    <Card
      icon='https://cafeu.vercel.app/img/icon/1.png'
      title="100% Swiss Quality"
      body="lorem lorem lorem lore lorem lorem"
    />
    
    <Card
      icon='https://cafeu.vercel.app/img/icon/2.png'
      title="100% Swiss Quality"
      body="lorem lorem lorem lore lorem lorem"
    />
    
    <Card
      icon='https://cafeu.vercel.app/img/icon/3.png'
      title="100% Swiss Quality"
      body="lorem lorem lorem lore lorem lorem"
    />
    <Card
      icon="https://cafeu.vercel.app/img/icon/4.png"
      title="100% Swiss Quality"
      body="lorem lorem lorem lore lorem lorem"
    />
    </div>
    
    <Banner/>
    <ThirdSection/>
    <Menu/>
    </>
  );
}

import React from 'react'



