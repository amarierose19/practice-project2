const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
// if statement is necessary for deplying my DB to the internet 
if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // this is normal sequelize call to coonect to my db in my computer
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.USER,
        process.env.PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306 //this is where my db lives in my computer 
        }
    );
}

module.exports = sequelize;