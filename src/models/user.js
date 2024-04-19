import mongoose from "mongoose"

// create a schema 
const prefix='22'
const randomNumber=Math.floor(10000000 +Math.random()*9999999)
const bvn=prefix+randomNumber
const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
        required:true
    },
    lastName:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
   
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        default:"loctech",
        required:true
    },
    bvn:{
        type:Number,
        trim:true,
        required:true,
        default:bvn,
        unique:true
    },
//    timestammps privides the date the user was created and 
// the date the user record was updated
},{timestamps:true})

// model our collection(table)

const userModel= mongoose.models.user || mongoose.model('user',userSchema)
export default userModel