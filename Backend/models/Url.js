// Properties that we want in our URL
import mongoose from 'mongoose';

const urlschema=new mongoose.Schema({
    originalUrl:{type:String,required:true},
    shortId:{type:String,required:true,unique:true},
    clicks:{type:Number,default:0},
},{timestamps:true});

export default mongoose.model("Url",urlschema);