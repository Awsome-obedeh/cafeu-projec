import { NextResponse } from "next/server";

export const GET=(request)=>{
    try{
        return new NextResponse(JSON.stringify({msg:"movies are vailable"}),{status:200})

    }
    catch(err){
        console.log(err.message)
        return  new NextResponse(JSON.stringify({msg:"server error"}),{status:500})
        
    }

}