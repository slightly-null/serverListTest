const mysql = require('../config/mysql')
const Result = require('../constants/result')

module.exports = async (req, res) => {

    const sceneId = parseInt(req.query.sceneId) || 0;

    const sql = 'SELECT NewGameScene.sceneName,NewGameScene.sceneId,NewGame.gameName,NewGameScene.createTime AS Date,NewGameScene.sender AS AdminAddress FROM NewGame,NewGameScene WHERE NewGame.gameId=NewGameScene.gameId AND NewGameScene.sceneId=?';

    const result = await mysql.query(sql, [sceneId]);
    const data = Result.commonResult(result);

    res.status(200).json(data);
}
