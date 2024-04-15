import { NextResponse } from "next/server"

export const GET=async ()=>{
   const images={
        img:"https://plus.unsplash.com/premium_photo-1711508489210-80940a5bf60a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
        img:"https://plus.unsplash.com/premium_photo-1712844381902-8f65c580a5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
    }
    try{

        return new NextResponse(JSON.stringify(images),{status:200})
    }
    catch(e){
        console.log(e.message)
        return new NextResponse(JSON.stringify("server err"),{status:500})

    }
}