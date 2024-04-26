import Image from 'next/image';
import Link from 'next/link';
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
      
    <Link href={`/gallery/img1`}><Image src={datas.img1} width={400} height={600}/></Link>  
    <Link href={`/gallery/img2`}><Image src={datas.img2} width={400} height={600}/></Link>  
    <Link href={`/gallery/img3`}><Image src={datas.img1} width={400} height={600}/></Link>  
        
      </div>
//   
   
  )
}
