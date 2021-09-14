const redis = require("redis").createClient({
    url: process.env.REDIS_URL
});

module.exports = redis
