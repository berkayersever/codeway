const topicName = 'projects/codeway-300003/topics/logs';
const maxMessages = 100;
const maxWaitTime = 10;

const {PubSub} = require('@google-cloud/pubsub');
const pubSubClient = new PubSub();

async function publishBatchedMessages(data) {

    const batchPublisher = pubSubClient.topic(topicName, {
        batching: {
            maxMessages: maxMessages,
            maxMilliseconds: maxWaitTime * 1000,
        },
    });

    try {
        for (const d of data) {
            let dataBuffer = Buffer.from(JSON.stringify(d));
            (async () => {
                const messageId = await batchPublisher.publish(dataBuffer);
                console.log(`Message ${messageId} published.`);
            })();
        }
    } catch (err) {
        console.error(`Received error while publishing: ${err.message}`);
        process.exitCode = 1;
    }
}

module.exports = { publishBatchedMessages };