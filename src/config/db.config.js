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

db.administrador = require('../models/administrador.js')(sequelize,Sequelize);
db.cliente = require('../models/cliente.js')(sequelize,Sequelize);
db.codigo_pedido = require('../models/codigo_pedido.js')(sequelize,Sequelize);
db.img_perfil = require('../models/img_perfil.js')(sequelize,Sequelize);
db.img_recibo = require('../models/img_recibo.js')(sequelize,Sequelize);
db.pedido = require('../models/pedido.js')(sequelize,Sequelize);
db.producto = require('../models/producto.js')(sequelize,Sequelize);
db.vendedor = require('../models/vendedor.js')(sequelize,Sequelize);

module.exports = db;