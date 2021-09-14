
const redis = require("redis");

module.exports = async(req, res) => {
    const client = redis.createClient ({
        url : process.env.REDIS_URL
    });

    await client.set('foo', 'bar');
    const data = await client.get("foo");

    res.json({
        body: data
    })
}
