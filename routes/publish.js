const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
/*const axios = require('axios');*/
const publisher = require('../lib/source/publishBatchedMessages');

const jsonParser = bodyParser.json()

/*const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};*/

/* GET logs page. */
router.post('/batchedMessages', jsonParser, (req, res, next) => {
    // console.log(`Request:\t ${JSON.stringify(req, getCircularReplacer())}`);
    publisher.publishBatchedMessages(req.body).then(response => {
        response && console.log(`Response:\t ${response}`);
    }).catch(next);
    /*console.log(`Request Body:\t ${JSON.stringify(req.body, getCircularReplacer())}`);
    publisher.publishBatchedMessages(req.body).then(response => {
        console.log(response);
    })*/
    res.sendStatus(200);
});

/*router.post('/batchedMessages', (req, res, next) => {
    axios.post('http://localhost:4000/publishBatchedMessages/batchedMessages', req )
        .then(response => {
            console.log(`Request Data:\n ${req.body}`);
            if(response.status === 200) {
                publisher.publishBatchedMessages(response.data).then(() => {
                    console.log(`Request:\n ${JSON.stringify(req.body)}`);
                    console.log('Published Batched Messages!');
                    // console.log(response);
                })
            }
        })
        .catch(err => {
            console.log(`Request:\n ${JSON.stringify(req, getCircularReplacer())}`);

            // JSON.stringify(circularReference, getCircularReplacer());
            console.log('Catched!');
            // console.log(err);
        });
    res.sendStatus(200);
});*/

module.exports = router;