const mysql = require('../config/mysql')
const Result = require('../constants/result')

module.exports = async (req, res) => {

    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const gameId = parseInt(req.query.gameId);
    const sceneId = parseInt(req.query.sceneId);

    let sql = 'SELECT NewGameItem.blockNumber,NewGameItem.transactionHash AS HASH,NewGame.gameName AS Game,NewGameScene.sceneName AS Scene,NewGameItem.sender AS AdminAddress,NewGameItem.itemId AS ItemId,StatisticsItemId.randoms AS Randoms,NewGameItem.createTime AS Time FROM NewGameItem,NewGame,NewGameScene,StatisticsItemId WHERE NewGameItem.gameId=NewGame.gameId AND NewGameItem.sceneId=NewGameScene.sceneId AND NewGameItem.itemId=StatisticsItemId.itemId';
    let querySql = 'SELECT sum(items) as count FROM StatisticsGameId';
    if (!isNaN(gameId)) {
        sql += ' and NewGameItem.gameId=' + gameId;
        querySql += ' where StatisticsGameId.gameId=' + gameId;
    }
    if (!isNaN(sceneId)) {
        sql += ' and NewGameItem.sceneId=' + sceneId;
        querySql = 'SELECT sum(items) as count FROM StatisticsSceneId where StatisticsSceneId.sceneId=' + sceneId;
    }
    sql += ' ORDER BY NewGameItem.createTime DESC limit ? offset ?';

    const result = await mysql.query(sql, [limit, (page - 1) * limit]);
    const total = await mysql.query(querySql);
    const totalNumber = total[0].count;
    const data = Result.pageResult(page, limit, totalNumber, result);

    res.status(200).json(data);
}
