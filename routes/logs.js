const express = require('express');
const router = express.Router();
const path = require('path');

/* GET logs page. */
router.get('/', (req, res, next) => {
    const fs = require("fs");
    try {
        const logs = JSON.parse(fs.readFileSync(path.resolve(__dirname, path.join('..', 'public', 'events', 'dummyEvents.json')), 'utf-8'));
        res.render('logs', { title: 'Logs', event_list: logs });
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;