const db = require('../config/db.config');


//------------------------------------------------------
//Entidades de Sequelize
//------------------------------------------------------
const Pedido = db.sequelize.import('../models/pedido');

exports.consultarPedidos = (req,res) => {
    
    Pedido.findAll({
        order: [
            ['id_codigo_pedido', 'ASC'],
            ['id_pedido', 'ASC']
        ]
    })
    .then(pedido => {
        res.json(pedido);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })

}