import mongoose from "mongoose"

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://belltop12:DIJ600dfxNNyPS94@cluster0.rf4tl.mongodb.net/trao-kitchen').then(()=>console.log("DB Connected"));
}