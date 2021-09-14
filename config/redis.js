const Redis = require("redis");

const redis = Redis.createClient({
    url: process.env.REDIS_URL
});
redis.set('foo', 'bar')

module.exports = redis
