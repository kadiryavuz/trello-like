const router = require("express").Router();
const { check, validationResult } = require("express-validator");

const Board = require("../models/Board");

router.get('/', (req, res) => {
    res.send('Hello Boards responding');
})

module.exports = router;