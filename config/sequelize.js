const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('test1_nulls_world', 'nullsw', 'ChXWZmmccsdhiStSI4', {
    host: 'rm-3nsbo8xy0h258g04yjo.mysql.rds.aliyuncs.com',
    port:3306,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
  });

  async function test(){
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      }catch(e){
        console.log('Connection has been established error.');
      }
  }
  test();

module.exports = sequelize;