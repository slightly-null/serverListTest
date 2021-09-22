const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('router_events', 'vercel', 'vercel123', {
    host: 'db4free.net',
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