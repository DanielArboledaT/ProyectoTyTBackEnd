const db = require('../config/db.config');
const administrador = require('./administrador.controller');


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

exports.guardarCliente = (req,res) => {

    let cliente = req.body;

    Cliente.create(cliente)
    .then(cliente => {
        res.json(cliente);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })
}

exports.actualizarCliente = (req,res) => {

    let cliente = req.body;

    Cliente.update(cliente,
            {
                where: { 
                    idCliente: cliente.idCliente
                }
            }
        )
        .then(cliente => {
            res.json(cliente)
        }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        })

}

exports.cambiarEstadoCliente = (req,res) =>{

    let cliente = req.body;

    if(cliente.estado === 'A'){

        Cliente.update({estado :'I'},
        {
            where: { 
                idCliente: cliente.idCliente 
            }
        }).then(cliente => {
            res.json(cliente)
        }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        })

    }else if(cliente.estado === 'I'){

        Cliente.update({estado :'A'},
        {
            where: { 
                idCliente: cliente.idCliente 
            }
        }).then(cliente => {
            res.json(cliente)
        }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        })

    }

}