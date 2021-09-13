const mysql = require('../config/mysql')

module.exports = async (req, res) => {
    const result = await mysql.query('select * from config')
    res.json({
        body: result,
        query: req.query,
        cookies: req.cookies,
    });
};
