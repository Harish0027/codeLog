import mongoose from "mongoose";

export const connectToMongoose=()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/codeLog")
        console.log("Mongoose connected successfully!!!")
    }catch(error){
        console.log(error);
    }
}