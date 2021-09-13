// Require and initialize outside of your main handler
const mysql = require('serverless-mysql')({
    config: {
        host: 'rm-3nsbo8xy0h258g04yjo.mysql.rds.aliyuncs.com',
        database: 'router_events',
        user: 'nullsw',
        password: 'ChXWZmmccsdhiStSI4'
    }
})

module.exports = mysql
