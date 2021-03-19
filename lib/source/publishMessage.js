const topicName = 'projects/codeway-300003/topics/logs';

const {PubSub} = require('@google-cloud/pubsub');
const pubSubClient = new PubSub();

async function publishMessage(data) {

    try {
        for (const d of data) {
            let dataBuffer = Buffer.from(JSON.stringify(d));
            (async () => {
                const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
                console.log(`Message ${messageId} published.`);
            })();
        }
    } catch (err) {
        console.error(`Received error while publishing: ${err.message}`);
        process.exitCode = 1;
    }
}

module.exports = { publishMessage };