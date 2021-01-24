const router = require("express").Router();
const { check, validationResult } = require("express-validator");

const Task = require("../models/Task");

router.get('/', (req, res) => {
    res.send('Hello Tasks responding');
})

module.exports = router;