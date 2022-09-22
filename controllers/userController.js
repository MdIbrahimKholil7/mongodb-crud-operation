
const mongoose = require('mongoose');
const userSchema = require('../model/userSchema')
const User = new mongoose.model('User', userSchema)

exports.insertUser = async (req, res, next) => {
    const { name, address, profession, age, lang } = req.body
    try {
        /* const user =  new User({
            name,
            address,
            age,
            profession,
            lang
        })
        const result=await user.save()
        res.send(result) */

        const result = await User.insertMany(req.body)
        res.send(result)
        console.log(result)

    } catch (error) {
        next(error)
    }
}

exports.getUser = async (req, res) => {
    try {
        const { name, address, age, lang, profession } = req.body || {}
        // const result = await User.find({ name: { $exists: true } })
        // const result = await User.find({ age: { $in: 21 } })
        // const result = await User.find({ age: { $gte: 21 } })
        // const result = await User.find({ age: { $lte: 21 } })
        // const result = await User.find({ $and: [{ name: 'Chris' },{age:26}] })
        // const result = await User.find({ $or: [{ name: 'Chris' },{age:26}] })
        // const result = await User.find({ $and: [{ name: 'Chris' },{age:{$gt:20,$lt:30}}] })
        // const result = await User.find({lang:{$type:'array'} })
        // const result = await User.find({name:{$regex:/ch/i} })
        const result = await User.find({name:{$regex:/^\w{5}$/} })

        console.log(result)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}
