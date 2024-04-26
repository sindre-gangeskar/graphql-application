const express = require('express');
const router = express.Router();
const db = require('../models');
const TeacherService = require('../services/TeacherService')
const teacherService = new TeacherService(db);

router.get('/', async function (req, res, next) {
    try {
        const teachers = await teacherService.getAll();
        res.status(200).send(teachers);
    } catch (error) {
        res.status(500).send('Internal server error');
        console.log(error);
    }
})
router.post('/', async function (req, res, next) {
    try {
        await teacherService.create(req.body.FirstName, req.body.LastName, req.body.SchoolId);
        res.status(201).send('Successfully created teacher');
    } catch (error) {
        res.status(500).send('Internal server error');
        console.log(error);
    }
})
router.delete('/', async function (req, res, next) {
    try {
        await teacherService.delete(req.body.id);
        res.status(201).send('Successfully deleted teacher');
    } catch (error) {
        res.status(500).send('Internal server error');
        console.log(error);
    }
})

module.exports = router;