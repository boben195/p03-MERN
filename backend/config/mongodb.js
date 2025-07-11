import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("Connection sucssesfull");
        
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/login`)
}

export default connectDB