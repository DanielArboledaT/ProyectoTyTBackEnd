const env = require('./env.js');

const Sequelize = require('sequelize');
var sequelize;
if(typeof sequelize === 'undefined'){
    console.log("creando nuevo sequelize!!!");

    var sequelize = new Sequelize(env.database, env.username, env.password, {
        host: env.host,
        dialect: env.dialect,
        define: {
            timestamps: false
        }
    });
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.vendedor = require('../models/vendedor.js')(sequelize,Sequelize);

module.exports = db;