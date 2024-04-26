import mongoose from 'mongoose'



export const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL)

        if (connect) {
            console.log("Database connected")
        }
        return connect
    }
    catch(err){
        throw new Error (err.message)
    }
    
    
    
}

