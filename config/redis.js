const Redis = require("redis");

const redis = Redis.createClient({
    url: process.env.REDIS_URL
});

module.exports = redis
