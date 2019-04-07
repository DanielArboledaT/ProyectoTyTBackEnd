const db = require('../config/db.config');


//------------------------------------------------------
//Entidades de Sequelize
//------------------------------------------------------
const Vendedor = db.sequelize.import('../models/vendedor');

exports.consultarVendedores = (req,res) => {
    
    Vendedor.findAll({
        order: [
            ['estado', 'ASC'],
            ['primer_apellido', 'ASC']
        ]
    })
    .then(vendedor => {
        res.json(vendedor);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })

}