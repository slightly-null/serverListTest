
const redis = require("redis");

module.exports = async(req, res) => {
    const client = redis.createClient ({
        url : process.env.REDIS_URL
    });

    await client.set('foo', 'bar');
    await client.set('22', 1);
    const data = await client.get('foo');
    const data1 = await client.get('22');
    res.json({
        body: [data,data1]
    })
}
