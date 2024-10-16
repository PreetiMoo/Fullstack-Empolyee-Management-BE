require("dotenv").config();
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const employee = require('../models/employee');
const { Op } = require('sequelize');


router.post('/add', authenticateToken, async (req, res) => {
    try {
        const emp = await employee.create({
            name: req.body.name,
            departmentId: req.body.departmentId,
            address: req.body.address
        });
        console.log("Employee added with auto-generated id:", emp.id);
        console.log(emp.name);
        res.status(201).json("Employee added");
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});


router.get('/readAll', authenticateToken, async (req, res) => {
    try {
        const { employee_id, employee_name, dept_id } = req.query;

        let whereClause = {};

        if (employee_name) {
            whereClause.name = {
                [Op.like]: `%${employee_name}%` 
            };
        }

        if (dept_id) {
            whereClause.departmentId = dept_id; 
        }

        const empList = await employee.findAll({
            where: whereClause
        });

        res.status(200).json(empList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;