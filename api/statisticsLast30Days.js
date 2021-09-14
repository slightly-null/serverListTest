const mysql = require('../config/mysql')
const Result = require('../constants/result')

module.exports = async (req, res) => {
    const sql = '\n' +
        'SELECT\n' +
        '\tIFNULL( temp.count, 0 ) AS count \n' +
        'FROM\n' +
        '\t(\n' +
        '\tSELECT\n' +
        '\t\t@s := @s + 1 AS indexs,\n' +
        '\t\tDATE_FORMAT( DATE( DATE_SUB( CURRENT_DATE, INTERVAL @s DAY ) ), \'%Y-%m-%d\' ) AS dates \n' +
        '\tFROM\n' +
        '\t\tmysql.help_topic,\n' +
        '\t\t( SELECT @s := -1 ) temp \n' +
        '\tWHERE\n' +
        '\t\t@s < 29 \n' +
        '\tORDER BY\n' +
        '\t\tdates \n' +
        '\t) date_table\n' +
        '\tLEFT JOIN (\n' +
        '\tSELECT LEFT\n' +
        '\t\t( createTime, 10 ) AS dateValue,\n' +
        '\t\tcount( * ) AS count \n' +
        '\tFROM\n' +
        '\t\tGameWrite\n' +
        '\tGROUP BY\n' +
        '\t\tLEFT ( createTime, 10 ) \n' +
        '\t) temp ON date_table.dates = temp.dateValue \n' +
        'ORDER BY\n' +
        '\tdate_table.dates\n';
    const body = await mysql.query(sql);
    const result = [];
    for (let index = 0; index < 30; index++) {
        result.push(body[index].count);
    }
    const data = Result.commonResult(0, result);
    res.status(200).json(data);
}
