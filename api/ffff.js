const mysql = require('../config/mysql')

// Main handler function
exports.handler = async (req, res) => {
    // Run your query
    let results = await mysql.query('select * from config')

    // Run clean up function
    await mysql.end()

    // Return the results
    return results
}
