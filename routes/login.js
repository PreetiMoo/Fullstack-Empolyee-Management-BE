require("dotenv").config();
const express = require('express')
const router = express.Router()
const {generateAccessToken, generateRefreshToken} =  require('../util/generateToken')
const admins = require('../models/admin')




router.post('/',async(req,res) =>{
    try{
        if(!req.body.username){
            console.log('Username is undefined in request body')
            return res.status(400).json("Username is required")
        }
        if(!req.body.password){
            console.log('Password is undefined in request body')
            return res.status(400).json("Password is required")
        }

        const admin = await admins.findOne({where:{username:req.body.username}});

        if(admin){
         console.log('User found')
        

          
                if (admin.password === req.body.password) {
                const accessToken = generateAccessToken(admin);
                console.log("User logged in successfully!, Sending response: ", {accessToken: accessToken})
                return res.json({accessToken:accessToken})
            }else{
                console.log('Wrong credentials!')
                return res.status(400).json({error:"Wrong credentials"})
            }
        }else{
            console.log('User Not found!');
            return res.status(404).json({ error: "User Not found!" });
        }
    }catch(error) {
            console.error('Error processing request:', error);
            return res.status(500).json({ error: "Internal server error" });
    }


})





module.exports = router;