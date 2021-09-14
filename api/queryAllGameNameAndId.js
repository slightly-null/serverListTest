const mysql = require('../config/mysql')
const Result = require('../constants/result')

module.exports = async (req, res) => {

    const sql = 'select gameId,gameName from NewGame';

    const result = await mysql.query(sql);
    const data = Result.commonResult(0, result);

    res.status(200).json(data);
}
