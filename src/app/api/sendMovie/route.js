import { NextResponse } from "next/server"
import { NodeNextRequest } from "next/dist/server/base-http/node"
export const POST= async (request)=>{
    // ddestructure the incoming data values
    const {name,sex,phone}=await request.json()
    console.log(name,sex,phone)
    return new NextResponse(JSON.stringify({name,sex,phone}),{status:200})
}