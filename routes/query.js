const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const bigQuery = require('../lib/source/bigQueryService');

const jsonParser = bodyParser.json()

/* GET Daily Active Users */
router.post('/dailyActiveUsers', jsonParser, (req, res, next) => {
    bigQuery.queryDailyActiveUsers().then(r => {
        r && res.status(200).json(parse(r));
    });
});

/* GET Daily Average Durations */
router.post('/dailyAverageDurations', jsonParser, (req, res, next) => {
    bigQuery.queryDailyAverageDurations().then(r => {
        r && res.status(200).json(parse(r));
    });
});

/* GET Total Users */
router.post('/totalUsers', jsonParser, (req, res, next) => {
    bigQuery.queryTotalUsers().then(r => {
        r && res.status(200).json(parse(r));
    });
});

module.exports = router;