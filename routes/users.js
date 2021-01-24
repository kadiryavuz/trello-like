const router = require("express").Router();
const { check, validationResult } = require("express-validator");

const Board = require("../models/User");

router.get('/', (req, res) => {
    res.send('Hello Users responding');
})

module.exports = router;