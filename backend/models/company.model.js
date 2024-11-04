import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    website:{
        type:String,
        // required:true
    },
    location:{
        type:String,
        // required:true
    },
    logo:{
        type:String,
        // required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
}, {timestamps:true});
// he didnt wrote
export const Company = mongoose.model('Company', userSchema);