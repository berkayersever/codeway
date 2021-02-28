const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
/*router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});*/

/*router.get('/', (req, res, next) => {
    const fs = require("fs");
    let pathTest = path.relative(__dirname, '../public/events/dummyEvents.json');
    console.log(pathTest);
    console.log(path.join('..', 'public', 'events', 'dummyEvents.json'));
    // let data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'events', 'dummyEvents.json'), 'utf-8'));
    // let data = JSON.parse(fs.readFileSync(path.resolve(__dirname, path.join('..', 'public', 'events', 'dummyEvents.json')), 'utf-8'));
    let data = require(path.resolve(__dirname, path.join('..', 'public', 'events', 'dummyEvents.json')));
    res.status(200).json(data);
});*/

router.get('/', (req, res, next) => {
    let data = JSON.parse(fs.readFileSync(path.resolve(__dirname, path.join('..', 'public', 'events', 'dummyEvents.json')), 'utf-8'));
    res.render('logs', { title: 'Logs', events: data });
});

module.exports = router;