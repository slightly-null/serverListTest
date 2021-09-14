const redis = require('../config/redis')

module.exports = async (req, res) => {
    await redis.set('test', '111');
    const data = await redis.get('test');
    res.json({
        body: JSON.stringify(data)
    })
}
