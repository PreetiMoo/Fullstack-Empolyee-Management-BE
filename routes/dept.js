require("dotenv").config();
const express = require('express')
const router = express.Router()
const authenticateToken=  require('../middleware/authenticateToken')
const department = require('../models/department')

router.post('/add', authenticateToken, async(req,res) =>{
    const dept = await department.create({
        name : req.body.name,
        description : req.body.description,
    })
    try{
        console.log("Department added with auto-generated id:",dept.id )
        console.log("Dept name:", dept.name)
        res.status(201).json("Department added")
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.get('/readAll', authenticateToken, async (req, res) => {
    try {
        const departments = await department.findAll(); 
        res.status(200).json(departments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});
  

module.exports = router;