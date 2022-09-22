const express = require('express');
const { insertUser, getUser } = require('../controllers/userController');
const router=express.Router()

router.post('/user',insertUser)
router.get('/user',getUser)
module.exports=router
