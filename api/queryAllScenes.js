const mysql = require('../config/mysql')
const Result = require('../constants/result')

module.exports = async (req, res) => {

    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const gameId = parseInt(req.query.gameId);

    let sql = 'SELECT NewGameScene.blockNumber,NewGameScene.transactionHash AS HASH,NewGame.gameName AS Game,NewGameScene.sceneName AS Scene,NewGameScene.sceneId,NewGameScene.sender AS AdminAddress,StatisticsSceneId.items AS Items,StatisticsSceneId.randoms AS Randoms,NewGameScene.createTime AS Time FROM NewGameScene,NewGame,StatisticsSceneId WHERE NewGameScene.gameId=NewGame.gameId AND NewGameScene.sceneId=StatisticsSceneId.sceneId';
    let querySql = 'SELECT sum(scenes) as count FROM StatisticsGameId';
    if (!isNaN(gameId)) {
        sql += ' and NewGameScene.gameId=' + gameId;
        querySql += ' where StatisticsGameId.gameId=' + gameId;
    }
    sql += ' ORDER BY NewGameScene.createTime DESC limit ? offset ?';

    const result = await mysql.query(sql, [limit, (page - 1) * limit]);
    const total = await mysql.query(querySql);
    const totalNumber = total[0].count;
    const data = Result.pageResult(0, page, limit, totalNumber, result);

    res.status(200).json(data);
}
