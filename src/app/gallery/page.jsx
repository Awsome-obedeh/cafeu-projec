import Image from 'next/image';
import React from 'react'

export default async function Gallery() {
    const getImages=async ()=>{
      try{
        const res= await fetch('http://localhost:3000/api/images');
       
        
          return res.json()
       
      }

      catch(e){
        console.log(e)
        console.log("server error")
      }
        
    }
    const datas=await getImages()
    console.log(datas)
  return (
    <div>
      <p>gallery</p>
      
        <Image src={datas.img1} width={100} height={300}/>
        <Image src={datas.img2} width={100} height={300}/>
        <Image src={datas.img1} width={100} height={300}/>
      </div>
//   
   
  )
}
