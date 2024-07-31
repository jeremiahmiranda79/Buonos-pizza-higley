//Import sequelize 
const Sequelize = require('sequelize');
//Import hidden variables as (environment var's)
require('dotenv').config();
//Create an empty let named sequelize to hold a local db
let sequelize;
//Since we are deploying to heroku we need this first, JAWS_DB environment variable
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} 
else {
  // Connecting to the sequelize database
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
module.exports = sequelize;