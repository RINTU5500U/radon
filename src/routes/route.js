const express = require('express');
const logger = require('../logger/logger');
const helper = require('../util/helper');
const formatter = require('../valiadator/formatter')
const router = express.Router();


router.get('/test-me', function (req, res) {
    console.log('the constant in logger route has a value '+logger.url);
    logger.log()
    res.send("my 1st api")
});

router.get('/test-me1', function (req,res) {
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()
    res.send("my 2nd ever api")
});

router.get('/test-me2', function (req, res) {
    formatter.trim()
    formatter.lowerCase()
    formatter.upperCase()
    res.send("my 3rd ever api")
});

module.exports = router;
// adding this comment for no reason