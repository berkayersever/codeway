const express = require('express');
const router = express.Router();
const bigQuery = require('../lib/source/bigQueryService');

/* GET Daily Active Users */
router.get('/dailyActiveUsers', (req, res, next) => {
    bigQuery.queryDailyActiveUsers().then(r => {
        r && res.status(200).json(JSON.parse(r));
    });
});

/* GET Daily Average Durations */
router.get('/dailyAverageDurations', (req, res, next) => {
    bigQuery.queryDailyAverageDurations().then(r => {
        r && res.status(200).json(JSON.parse(r));
    });
});

/* GET Total Users */
router.get('/totalUsers', (req, res, next) => {
    bigQuery.queryTotalUsers().then(r => {
        r && res.status(200).json(JSON.parse(r));
    });
});

module.exports = router;