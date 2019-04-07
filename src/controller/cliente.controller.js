const db = require('../config/db.config');


//------------------------------------------------------
//Entidades de Sequelize
//------------------------------------------------------
const Cliente = db.sequelize.import('../models/cliente');

exports.consultarClientes = (req,res) => {
    
    Cliente.findAll({
        order: [
            ['estado', 'ASC'],
            ['nombre_negocio', 'ASC']
        ]
    })
    .then(cliente => {
        res.json(cliente);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })

}