const mysql = require('../config/mysql')

module.exports = async (req, res) => {
    const data = await mysql.query('select * from config')
    res.status(200).json(data);
}
