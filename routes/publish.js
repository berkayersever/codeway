const express = require('express');
const router = express.Router();
const axios = require('axios');
const publisher = require('../lib/source/publishBatchedMessages');

/* GET logs page. */
router.post('/batchedMessages', (req, res, next) => {
    axios.post('https://codeway-300003.uc.r.appspot.com/publishBatchedMessages/batchedMessages', {
        json: { key: 'value' }
    })
        .then(response => {
            if(response.status === 200) {
                publisher.publishBatchedMessages(response.data).then(() => {
                    console.log('Published Batched Messages!');
                    console.log(response);
                })
            }
        })
        .catch(err => {
            console.log('Catched!');
            console.log(err);
        });
    res.sendStatus(200);
});

module.exports = router;