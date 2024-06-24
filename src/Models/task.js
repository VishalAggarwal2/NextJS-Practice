import mongoose from "mongoose";
import user from "./user";
const newSchema = mongoose.Schema({
title:{
    type:String,
    required: true,
},
dsc:{
    type:String,
    reqired:true
},
iscomp:{
    type:Boolean,
    reqired:true
},
user:{
    type:mongoose.Schema.ObjectId,
    ref:user
}
})

const task = mongoose.models.Task || mongoose.model('Task', newSchema);
export default task; 