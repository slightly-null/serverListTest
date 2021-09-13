// const mysql = require('../config/mysql')

const mysql = require('serverless-mysql')({
    config: {
        host     : 'rm-3nsbo8xy0h258g04yjo.mysql.rds.aliyuncs.com',
        database : 'test1_nulls_world',
        user     : 'nullsw',
        password : 'ChXWZmmccsdhiStSI4'
    }
})

module.exports = async (req, res) => {
    // Run your query
    let results = await mysql.query('select * from config')
    res.status(200).json(results);
}
