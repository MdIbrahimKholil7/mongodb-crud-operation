const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({ 
    name:String,
    age:Number,
    profession:String,
    lang:Array,
    address:String,
    budget:Number,
    spent:Number
 });
module.exports=UserSchema

