const db = require('../config/db.config');


//------------------------------------------------------
//Entidades de Sequelize
//------------------------------------------------------
const Codigo_Pedido = db.sequelize.import('../models/condigo_pedido');

exports.consultarCodigos = (req,res) => {
    
    Codigo_Pedido.findAll({
        order: [
            ['id_codigo_pedido', 'ASC']
        ]
    })
    .then(condigo_pedido => {
        res.json(condigo_pedido);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })

}