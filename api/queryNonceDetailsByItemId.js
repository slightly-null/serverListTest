const mysql = require('../config/mysql')
const Result = require('../constants/result')

module.exports = async (req, res) => {

    const itemId = parseInt(req.query.itemId) || 0;
    const nonce = parseInt(req.query.nonce) || 0;

    const sql = 'SELECT NewNonce.nonce,NewNonce.createTime AS DATA,NewNonce.hv,NewNonce.transactionHash,NewNonce.player,NewGame.gameName,NewGame.gameId,NewGame.mng AS AdminAddress,NewGameScene.sceneName,NewGameScene.sceneId,NewNonce.itemId FROM NewNonce,NewGame,NewGameScene WHERE NewNonce.gameId=NewGame.gameId AND NewNonce.sceneId=NewGameScene.sceneId AND NewNonce.itemId=? AND NewNonce.nonce=?';
    const querySql = 'SELECT privateKey FROM PublishPrivateKey WHERE itemId=?';

    const result = await mysql.query(sql, [itemId, nonce]);
    const privateKey = await mysql.query(querySql, [itemId]);
    const data = Result.commonResult(result, privateKey);

    res.status(200).json(data);
}
