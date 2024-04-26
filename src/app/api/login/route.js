import userModel from "@/models/user"
import { connectDb } from "@/utils/db"
import { NextResponse } from "next/server"
import bcrypt, { compareSync } from "bcryptjs"

export const POST = async (request) => {
    try {
        const { password, email } = await request.json()

        // make connection with atlas database
        await connectDb()

        // find where the inputed user email matches that of database
        const user = await userModel.findOne({ email: email });
        if (user) {
            // 
            // make your choice
            // return new NextResponse(user).json.status(200)
            console.log(user)
            // comapre user password t the hashed password in the databse
            const hashPassword=user.password
            console.log(hashPassword)
            // comapre the password
            const isPasswordTrue= compareSync(password,hashPassword)
            if(isPasswordTrue){
                return new NextResponse(JSON.stringify({msg:"successfully login ", user}), { status: 200 })
            }
            else{
                return new NextResponse(JSON.stringify({ msg: "Invalid credentials 2" }), { status: 400 })
            }
        }
        else {
            return new NextResponse(JSON.stringify({ msg: "Invalid credentials 1" }), { status: 400 })
        }
    }
    catch (e) {
        console.log(e.message)
        return new NextResponse(JSON.stringify({ msg: "server eror" }), { status: 500 })
    }



}