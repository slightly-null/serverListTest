const mysql = require('../config/mysql')
const Result = require('../constants/result')

module.exports = async (req, res) => {
    const data = await mysql.transaction()
        .query('SELECT count(DISTINCT NewNonce.player) AS PlayAddresses FROM NewNonce')
        .query((T1) => {
            const result = ['SELECT count(StatisticsGameId.gameId) AS Games,sum(StatisticsGameId.scenes) AS Scenes,sum(StatisticsGameId.items) AS Items,sum(StatisticsGameId.randoms) AS Randoms,sum(StatisticsGameId.nonces) AS Nonces,T1.Playaddresses FROM StatisticsGameId'];
            return {
                T1,
                result
            }
        })
        .rollback(e => console.log(e))
        .commit();
    const result = Result.commonResult(0, data);
    res.status(200).json(result);
}
