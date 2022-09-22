const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({ 
    name:String,
    age:Number,
    profession:String,
    lang:Array,
    address:String
 });
module.exports=UserSchema

