import { connection } from "@/utils/db"
import { NextResponse } from "next/server"
// coneectr to DB

export const POST=async(request)=>{
   

    // destructure the data sent by the front end
    const {firstName,lastName,email,password}=await request.json()
    try{
        // call our databse connection
        await connection()
        // validat uer data
        if(!firstName){
            return new NextResponse(JSON.stringify({msg:"provider firstname"}), {status:400})
        }
       else if(!lastName){
            return new NextResponse(JSON.stringify({msg:"provider lastName"}), {status:400})
        }
        else if(!email){
            return new NextResponse(JSON.stringify({msg:"provider email"}), {status:400})
        }
       else if(!password){
            return new NextResponse(JSON.stringify({msg:"provider passowrd"}), {status:400})
        }
    
        else{

            // save in database
            return new NextResponse(JSON.stringify({msg:"use data accepted successfully"}, {status:206}))
        }
    }

    catch(e){
        console.log(e.message)
        return new NextResponse(JSON.stringify({msg:"server error"}),{status:500})
    }
}