const topicName = 'projects/codeway-300003/topics/logs';
const maxMessages = 10;
const maxWaitTime = 10;
const data = JSON.stringify([
    {
        "type": "event",
        "app_id": "com.codeway.test",
        "session_id": "vIfEMi9kJW",
        "event_name": "about",
        "event_time": 1598196427881,
        "page": "settings",
        "country": "US",
        "region": "New Jersey",
        "city": "Newark",
        "user_id": "9t0lrnYLQr"
    },
    {
        "type": "event",
        "app_id": "com.codeway.test",
        "session_id": "vIfEMi9kJW",
        "event_name": "purchase",
        "event_time": 1598196493043,
        "page": "paywall",
        "country": "US",
        "region": "New Jersey",
        "city": "Newark",
        "user_id": "9t0lrnYLQr"
    },
    {
        "type": "event",
        "app_id": "com.codeway.test",
        "session_id": "vIfEMi9kJW",
        "event_name": "background",
        "event_time": 1598196534763,
        "page": "app_delegate",
        "country": "US",
        "region": "New Jersey",
        "city": "Newark",
        "user_id": "9t0lrnYLQr"
    },
    {
        "type": "event",
        "app_id": "com.codeway.test",
        "session_id": "vIfEMi9kJW",
        "event_name": "click",
        "event_time": 1598196597774,
        "page": "main",
        "country": "US",
        "region": "New Jersey",
        "city": "Newark",
        "user_id": "9t0lrnYLQr"
    },
    {
        "type": "event",
        "app_id": "com.codeway.test",
        "session_id": "vIfEMi9kJW",
        "event_name": "about",
        "event_time": 1598196655911,
        "page": "settings",
        "country": "US",
        "region": "New Jersey",
        "city": "Newark",
        "user_id": "9t0lrnYLQr"
    },
    {
        "type": "event",
        "app_id": "com.codeway.test",
        "session_id": "vIfEMi9kJW",
        "event_name": "click",
        "event_time": 1598196682145,
        "page": "main",
        "country": "US",
        "region": "New Jersey",
        "city": "Newark",
        "user_id": "9t0lrnYLQr"
    },
    {
        "type": "event",
        "app_id": "com.codeway.test",
        "session_id": "IQGLasL3oc",
        "event_name": "click",
        "event_time": 1598210181726,
        "page": "main",
        "country": "US",
        "region": "California",
        "city": "Castro Valley",
        "user_id": "gGSNIrIrUK"
    },
    {
        "type": "event",
        "app_id": "com.codeway.test",
        "session_id": "IQGLasL3oc",
        "event_name": "purchase",
        "event_time": 1598210249692,
        "page": "paywall",
        "country": "US",
        "region": "California",
        "city": "Castro Valley",
        "user_id": "gGSNIrIrUK"
    },
    {
        "type": "event",
        "app_id": "com.codeway.test",
        "session_id": "IQGLasL3oc",
        "event_name": "background",
        "event_time": 1598210309652,
        "page": "app_delegate",
        "country": "US",
        "region": "California",
        "city": "Castro Valley",
        "user_id": "gGSNIrIrUK"
    },
    {
        "type": "event",
        "app_id": "com.codeway.test",
        "session_id": "IQGLasL3oc",
        "event_name": "search",
        "event_time": 1598210339929,
        "page": "main",
        "country": "US",
        "region": "California",
        "city": "Castro Valley",
        "user_id": "gGSNIrIrUK"
    }]);

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function publishBatchedMessages() {
    // const jsonData = JSON.stringify(data)
    const dataBuffer = Buffer.from(data);
    const batchPublisher = pubSubClient.topic(topicName, {
        batching: {
            maxMessages: maxMessages,
            maxMilliseconds: maxWaitTime * 1000,
        },
    });

    for (let i = 0; i < 10; i++) {
        await (async () => {
            const messageId = await batchPublisher.publish(dataBuffer);
            console.log(`Message ${messageId} published.`);
        })();
    }
}

publishBatchedMessages().catch(console.error);