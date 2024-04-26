import { connectDb } from "@/utils/db"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import mongoose from "mongoose"
import userModel from "@/models/user"
// coneectr to DB

export const POST=async(request)=>{
   

    // destructure the data sent by the front end
    const {firstName,lastName,email,password}=await request.json()
    try{
        // call our databse connection
        await connectDb()
        // validate user data
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
            // if the table column name (e.g firstName)is the same as the user 

            // hash user password before storing in database
            const salt= bcrypt.genSaltSync(16);
            const hashPassword=bcrypt.hashSync(password,salt)
            // insert user recored in our user collection(table)
            const user =await new userModel({firstName:firstName, lastName:lastName,email:email,password:hashPassword})
            await user.save()
            // if user records are stored successfully 
            if(user){
                return new NextResponse(JSON.stringify({msg:"user created successfully"}, {status:201}))

            }
            
        }
    }

    catch(e){
        console.log(e.message)
        return new NextResponse(JSON.stringify({msg:"server error"}),{status:500})
    }
}