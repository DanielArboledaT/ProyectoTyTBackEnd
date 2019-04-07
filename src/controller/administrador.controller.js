const db = require('../config/db.config');


//------------------------------------------------------
//Entidades de Sequelize
//------------------------------------------------------
const Administrador = db.sequelize.import('../models/administrador');

exports.consultarAdministradores = (req,res) => {
    
    Administrador.findAll({
        order: [
            ['estado', 'ASC'],
            ['primer_apellido', 'ASC']
        ]
    })
    .then(administrador => {
        res.json(administrador);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })

}