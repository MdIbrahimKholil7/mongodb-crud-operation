const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({ 
    name:{
        type:String,
        index:true
    },
    age:Number,
    profession:String,
    lang:Array,
    address:String,
    budget:Number,
    spent:Number,
    allAddress:Object,
    base:String,
   
 },
 {
    timeStamps:true
 });
module.exports=UserSchema

