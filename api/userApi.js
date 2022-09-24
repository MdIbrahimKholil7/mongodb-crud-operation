const express = require('express');
const { insertUser, getUser, updateUser } = require('../controllers/userController');
const router=express.Router()

router.post('/user',insertUser)
router.get('/user',getUser)
router.put('/userUpdate',updateUser)
module.exports=router
