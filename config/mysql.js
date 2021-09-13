// Require and initialize outside of your main handler
const mysql = require('serverless-mysql')({
    config: {
        host: '172.16.1.230',
        database: 'router_events',
        user: 'game',
        password: 'winter123'
    }
})

module.exports = mysql
