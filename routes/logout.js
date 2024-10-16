require("dotenv").config();
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken'); 


router.post('/', authenticateToken, (req, res) => {
   
    res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;
