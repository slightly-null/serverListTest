const redis = require('../config/redis')

module.exports = async (req, res) => {
    const data = await redis.get("foo");
    res.status(200).json(data);
}
