const mysql = require('../config/mysql')
const Result = require('../constants/result')

module.exports = async (req, res) => {

    const gameId = parseInt(req.query.gameId) || 0;

    const sql = 'SELECT StatisticsGameId.scenes AS Scenes,StatisticsGameId.items AS Items,StatisticsGameId.randoms AS Randoms,NewGame.gameId AS GameId,NewGame.game AS GameContractAddress,NewGame.createTime AS Date,NewGame.mng AS AdminAddress FROM NewGame,StatisticsGameId WHERE NewGame.gameId=StatisticsGameId.gameId AND NewGame.gameId=?';

    const result = await mysql.query(sql, [gameId]);
    const data = Result.commonResult(result);

    res.status(200).json(data);
}
