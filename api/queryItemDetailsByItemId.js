const mysql = require('../config/mysql')
const Result = require('../constants/result')

module.exports = async (req, res) => {

    const itemId = parseInt(req.query.itemId) || 0;

    const sql = 'SELECT NewGameItem.createTime AS DATA,NewGame.gameName,NewGame.gameId,NewGame.mng AS AdminAdress,NewGameScene.sceneName,NewGameScene.sceneId,NewGameItem.itemId,NewGameItem.pubkey FROM NewGame,NewGameScene,NewGameItem WHERE NewGame.gameId=NewGameItem.gameId AND NewGameScene.sceneId=NewGameItem.sceneId AND NewGameItem.itemId=?';
    const querySql = 'SELECT privateKey FROM PublishPrivateKey WHERE itemId=?';

    const result = await mysql.query(sql, [itemId]);
    const privateKey = await mysql.query(querySql, [itemId]);

    const data = Result.privateKeyResult(result, privateKey);

    res.status(200).json(data);
}
