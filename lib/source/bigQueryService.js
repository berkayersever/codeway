const { BigQuery } = require('@google-cloud/bigquery');

/**
 * Daily Active Users Query
 * @returns {Promise<string>}
 */
async function queryDailyActiveUsers() {

    // Create a client
    const bigqueryClient = new BigQuery();

    // The SQL query to run
    const sqlQuery = `SELECT * FROM \`codeway-304923.codeway.DailyActiveUsers\``;

    const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'EU',
    };

    // Run the query
    const [rows] = await bigqueryClient.query(options);

    console.log('Rows:');
    rows.forEach(row => console.log(row));

    return JSON.stringify(rows);
}

/**
 * Daily Average Durations Query
 * @returns {Promise<string>}
 */
async function queryDailyAverageDurations() {

    // Create a client
    const bigqueryClient = new BigQuery();

    // The SQL query to run
    const sqlQuery = `SELECT * FROM \`codeway-304923.codeway.DailyAverageSessionTime\``;

    const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'EU',
    };

    // Run the query
    const [rows] = await bigqueryClient.query(options);

    console.log('Query Results:');
    console.log(JSON.stringify(rows));

    return JSON.stringify(rows);
}

/**
 * Total Users Query
 * @returns {Promise<string>}
 */
async function queryTotalUsers() {

    // Create a client
    const bigqueryClient = new BigQuery();

    // The SQL query to run
    const sqlQuery = `SELECT * FROM \`codeway-304923.codeway.TotalUserNumber\` ORDER BY date DESC LIMIT 1`;

    const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'EU',
    };

    // Run the query
    const [rows] = await bigqueryClient.query(options);

    console.log('Query Results:');
    console.log(JSON.stringify(rows));

    return JSON.stringify(rows);
}

module.exports = { queryDailyActiveUsers, queryDailyAverageDurations, queryTotalUsers };