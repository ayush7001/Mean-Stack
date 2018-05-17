const express = require('express');
const user_router = express.Router();
const userController = require('../controller/userController');
user_router.get('/getUser',userController.viewUser);
user_router.post('/insertUser',userController.insertUser);
module.exports= user_router;