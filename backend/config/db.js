import mongoose from "mongoose"
const MONGODBURL = process.env.MONGODBURL;
export const connectDB = async () => {
await mongoose.connect(
MONGODBURL
).then(()=>console.log("DB connected"));   
};
