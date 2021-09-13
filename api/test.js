const mysql = require('../config/mysql')

module.exports = async (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const gameAddress = req.query.gameAddress;

    let sql = 'SELECT NewGame.gameId,NewGame.gameName AS Game,NewGame.game AS GameAddress,StatisticsGameId.scenes AS Scenes,StatisticsGameId.items AS Items,StatisticsGameId.randoms AS Randoms,NewGame.createTime AS Time FROM NewGame,StatisticsGameId WHERE NewGame.gameId=StatisticsGameId.gameId';
    let querySql = 'SELECT count(StatisticsGameId.gameId) as count FROM StatisticsGameId';
    if (gameAddress !== undefined && gameAddress !== '') {
        sql += ' and NewGame.game=' + mysql.escape(gameAddress);
        querySql += ',NewGame WHERE StatisticsGameId.gameId=NewGame.gameId AND NewGame.game=' + mysql.escape(gameAddress);
    }
    sql += ' ORDER BY NewGame.createTime DESC limit ? offset ?';
    const result = await mysql.query(sql, [limit, (page - 1) * limit]);
    const total = await mysql.query(querySql);
    const totalNumber = total[0].count;
    const body = {
        code: 200,
        nowPage: page,
        totalPage: Math.ceil(totalNumber / limit),
        totalNumber,
        result,
    };
    res.json({
        body: body,
        query: req.query,
        cookies: req.cookies,
    });
};
