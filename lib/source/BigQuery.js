const { BigQuery } = require('@google-cloud/bigquery');

/**
 * Daily Active Users Query
 * @returns {Promise<void>}
 */
async function queryDailyActiveUsers() {
    // Queries a public Shakespeare dataset.

    // Create a client
    const bigqueryClient = new BigQuery();

    // The SQL query to run
    const sqlQuery = `SELECT word, word_count
            FROM \`bigquery-public-data.samples.shakespeare\`
            WHERE corpus = @corpus
            AND word_count >= @min_word_count
            ORDER BY word_count DESC`;

    const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US',
        params: {corpus: 'romeoandjuliet', min_word_count: 250},
    };

    // Run the query
    const [rows] = await bigqueryClient.query(options);

    console.log('Rows:');
    rows.forEach(row => console.log(row));
}

/**
 * Daily Average Durations Query
 * @returns {Promise<void>}
 */
async function queryDailyAverageDurations() {
    // Queries a public Shakespeare dataset.

    // Create a client
    const bigqueryClient = new BigQuery();

    // The SQL query to run
    const sqlQuery = `SELECT word, word_count
            FROM \`bigquery-public-data.samples.shakespeare\`
            WHERE corpus = @corpus
            AND word_count >= @min_word_count
            ORDER BY word_count DESC`;

    const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US',
        params: {corpus: 'romeoandjuliet', min_word_count: 250},
    };

    // Run the query
    const [rows] = await bigqueryClient.query(options);

    console.log('Rows:');
    rows.forEach(row => console.log(row));
}

/**
 * Total Users Query
 * @returns {Promise<void>}
 */
async function queryTotalUsers() {
    // Queries a public Shakespeare dataset.

    // Create a client
    const bigqueryClient = new BigQuery();

    // The SQL query to run
    const sqlQuery = `SELECT word, word_count
            FROM \`bigquery-public-data.samples.shakespeare\`
            WHERE corpus = @corpus
            AND word_count >= @min_word_count
            ORDER BY word_count DESC`;

    const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US',
        params: {corpus: 'romeoandjuliet', min_word_count: 250},
    };

    // Run the query
    const [rows] = await bigqueryClient.query(options);

    console.log('Rows:');
    rows.forEach(row => console.log(row));
}

function main() {

    // Import the Google Cloud client library
    // const {BigQuery} = require('@google-cloud/bigquery');

    async function queryShakespeare() {
        // Queries a public Shakespeare dataset.

        // Create a client
        const bigqueryClient = new BigQuery();

        // The SQL query to run
        const sqlQuery = `SELECT word, word_count
            FROM \`bigquery-public-data.samples.shakespeare\`
            WHERE corpus = @corpus
            AND word_count >= @min_word_count
            ORDER BY word_count DESC`;

        const options = {
            query: sqlQuery,
            // Location must match that of the dataset(s) referenced in the query.
            location: 'US',
            params: {corpus: 'romeoandjuliet', min_word_count: 250},
        };

        // Run the query
        const [rows] = await bigqueryClient.query(options);

        console.log('Rows:');
        rows.forEach(row => console.log(row));
    }

    queryShakespeare();
}

main();

// module.exports = { queryDailyActiveUsers, queryDailyAverageDurations, queryTotalUsers };