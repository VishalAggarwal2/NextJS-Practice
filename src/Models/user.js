import mongoose from "mongoose";
const newSchema = mongoose.Schema({
name:{
    type:String,
    required: true,
},
phone:{
    type:Number,
    reqired:true
},
email:{
    type:String,
    reqired:true
},
password:{
    type:String,
    reqired:true
},
about:{
    type:String,

},
verified:{
    type:Boolean,
    default:false,
    required:true
},
isAdmin:{
    type:Boolean,
    default:false,
    required:true
}
})

const user = mongoose.models.User || mongoose.model('User', newSchema);
export default user; 