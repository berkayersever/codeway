const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();
const bigQuery = require('../lib/source/bigQueryService');

// const jsonParser = bodyParser.json()

/* GET Daily Active Users */
router.get('/dailyActiveUsers', (req, res, next) => {
    bigQuery.queryDailyActiveUsers().then(r => {
        // r && res.status(200).json(parse(r));
        r && res.render('dailyActiveUsers', { title: 'Daily Active Users', event_list: JSON.parse(r) });
    });
});

/* GET Daily Average Durations */
router.get('/dailyAverageDurations', (req, res, next) => {
    bigQuery.queryDailyAverageDurations().then(r => {
        // r && res.status(200).json(parse(r));
        r && res.render('dailyAverageDurations', { title: 'Daily Average Durations', event_list: JSON.parse(r) });
    });
});

/* GET Total Users */
router.get('/totalUsers', (req, res, next) => {
    bigQuery.queryTotalUsers().then(r => {
        // r && res.status(200).json(parse(r));
        r && res.render('totalUsers', { title: 'Total Users', event_list: JSON.parse(r) });
    });
});

module.exports = router;