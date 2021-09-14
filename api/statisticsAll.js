const mysql = require('../config/mysql')
const Result = require('../constants/result')

module.exports = async (req, res) => {
    const sql = 'SELECT count(StatisticsGameId.gameId) AS Games,sum(StatisticsGameId.scenes) AS Scenes,sum(StatisticsGameId.items) AS Items,sum(StatisticsGameId.randoms) AS Randoms,sum(StatisticsGameId.nonces) AS Nonces,T1.Playaddresses FROM StatisticsGameId,(SELECT count(DISTINCT NewNonce.player) AS PlayAddresses FROM NewNonce) AS T1';
    const result = await mysql.query(sql);
    const data = Result.commonResult(0, result);
    res.status(200).json(data);
}
