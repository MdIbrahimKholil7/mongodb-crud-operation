require('dotenv').config()
const colors = require('colors');
const express = require('express');
const mongoose = require('mongoose');
const app=express()
const cors = require('cors');
const port =process.env.PORT || 8080
app.use(cors())
app.use(express.json())
const userApi=require('./api/userApi.js')

// connecting mongodb 
const run = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.qjdtst5.mongodb.net/MONGO_CRUD?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        ).then(()=>{
            console.log('connection success'.underline.red)
        })
    } catch (error) {
        console.log(error)
    }

}   
run()

app.use('/user',userApi)

app.get('/',(req,res)=>{
    res.json({
        message:'Server working',
        success:true,
        status:200
    })
})

app.listen(port,()=>{
    console.log('Server is running on port '.red,port)
})

