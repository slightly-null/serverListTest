const mysql = require('../config/mysql')

module.exports = async (req, res) => {
    // Run your query
    let results = await mysql.query('select * from config')
    res.status(200).json(results);
}
