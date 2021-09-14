const redis = require('../config/redis')

module.exports = async (req, res) => {
    const data = await redis.get('test');
    res.json({
        body: JSON.stringify(data)
    })
}
