// Require and initialize outside of your main handler
const mysql = require('serverless-mysql')({
    config: {
        host: 'rm-3nsbo8xy0h258g04yjo.mysql.rds.aliyuncs.com',
        database: 'test1_nulls_world',
        user: 'nullsw',
        password: 'ChXWZmmccsdhiStSI4'
    }
})

module.exports = mysql
