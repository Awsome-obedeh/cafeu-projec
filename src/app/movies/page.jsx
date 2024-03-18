"use client"
import Image from 'next/image'
import React, { useEffect,useState } from 'react'

export default function Movies() {
    const [movies,setMovies]=useState()
    const [pageNum,setPAgeNum]=useState(1)

    const fetchMovies=async ()=>{
        const res=await fetch(`https://www.episodate.com/api/most-popular?page=${pageNum}`)
        const data =await res.json()
       
        setMovies(data)
        
        console.log(data)
    }

     function nextHandler(){
        // setPAgeNum(prev=> 1+prev)
        setPAgeNum(pageNum+1)
    }
    useEffect(()=>{
        fetchMovies();
    }
    
    ,[pageNum])
  return (
    <div>
        {
            movies &&
            movies.tv_shows.map((movie)=>{
                return(
                    <>
                        <p>name {movie.name}</p>
                        <p>name {movie.start_date}</p>
                        <p>name {movie.status}</p>
                        <Image src={movie.image_thumbnail_path} width={200} height={200} alt={movie.title}/>
                    </>
                )
            })
        }
        <button onClick={nextHandler}>next</button>
        <p>{pageNum}</p>
        <h1>movuies</h1>
    </div>
  )
}
