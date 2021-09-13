// Require and initialize outside of your main handler
const mysql = require('serverless-mysql')({
    config: {
        host: 'db4free.net',
        database: 'router_events',
        user: 'vercel',
        password: 'vercel123'
    }
})

module.exports = mysql
