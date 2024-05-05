const express = require('express');
const router = express.Router();
const { verifyToken } = require('../auth');

const UserController=require('../controllers/user');

// Get all users
router.get('/', verifyToken, UserController.get_users);

// Post a user
router.post('/', UserController.post_user);

// Login
router.post('/login', UserController.login_user);

module.exports = router;