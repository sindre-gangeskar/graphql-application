const express = require('express');
const router = express.Router();
const db = require('../models');
const SchoolService = require('../services/SchoolService');
const schoolService = new SchoolService(db);

router.get('/', async function (req, res, next) {
    try {
        const schools = await schoolService.getAll();
        res.json(schools);
    } catch (error) {
        console.log(error);
    }
})
router.post('/', async function (req, res, next) {
    try {
        await schoolService.create(req.body.Name, req.body.Address, req.body.Description);
        res.status(201).send("School created successfully");

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
})
router.delete('/', async function (req, res, next) {
    try {
        await schoolService.delete(req.body.id);
        console.log(req.body);
        res.status(201).send('School successfully deleted');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
})


module.exports = router;
