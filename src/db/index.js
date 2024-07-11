import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express"
const app = express();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    // app.on('error',(error)=>{
    //   console.log(`Error: `, error)
    //   throw error;
    // })
    console.log(`\n MongoDB Connect !! DB HOST: ${connectionInstance.connection.host}`)
  } catch (error) {
    console.error("MONGODB Connection error Failed !!!!!!!!!!",error);
    process.exit(1);
  }
}

export default connectDB