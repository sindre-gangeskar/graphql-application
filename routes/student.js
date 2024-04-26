const express = require('express');
const router = express.Router();
const db = require('../models');
const StudentService = require('../services/StudentService');
const studentService = new StudentService(db);

router.get('/', async function (req, res, next) {
    try {
        const students = await studentService.getAll();
        res.status(201).send(students);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
})

router.post('/', async function (req, res, next) {
    try {
        await studentService.create(req.body.FirstName, req.body.LastName, req.body.SchoolId);
        res.status(201).send('Successfully created student');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
})

router.delete('/', async function (req, res, next) {
    try {
        await studentService.delete(req.body.id);
        res.status(201).send('Successfully deleted student');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
})


module.exports = router;