import Image from "next/image";
import styles from "./page.module.css";
import HeroComp from "@/components/HeroComp";
import Card from "@/components/card";
import Head from "next/head";

export default function Home() {
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
    
    </>
  );
}
