const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/', (req, res, next) => {
    const fs = require("fs");
    let data = JSON.parse(fs.readFileSync('dummyEvents.json', 'utf-8'));
    res.status(200).json(data);
});

module.exports = router;