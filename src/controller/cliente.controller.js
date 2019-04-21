const db = require('../config/db.config');
const administradorController = require('./administrador.controller');
const util = require('../util');
const shortid = require('shortid');


//------------------------------------------------------
//Entidades de Sequelize
//------------------------------------------------------
const Cliente = db.sequelize.import('../models/cliente');
const Administrador = db.sequelize.import('../models/administrador');

Cliente.belongsTo(Administrador, {
    as: 'administrador',
    foreignKey: 'idAdministrador'
})

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

exports.consultarClientesByHash = (req, res) => {

    let hashCliente = req.params.hash;

    Cliente.findAll({
        include: [
            {
                model: Administrador, as: 'administrador'
            }
        ],
        where: {
            hash: hashCliente
        },
        order: [
            ['estado', 'ASC'],
            ['primer_apellido', 'ASC']
        ]
    })
        .then(cliente => {
            res.json(cliente);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: "error", details: err });
        })

}

exports.guardarCliente =async (req,res) => {

    let nuevoCliente = req.body;
    nuevoCliente.hash = shortid.generate(10);

    let clienteCreado = await crearCliente(nuevoCliente);
    if (clienteCreado !== 'undefined') {
        let historicoCliente = {
            cambioRealizado: "Creando cliente",
            fechaMovimiento: new Date(),
            idAdministrador: clienteCreado.dataValues.idAdministrador,
            idCliente: clienteCreado.dataValues.idCliente,
            movimiento: "Crear",
        }
        
        administradorController.guardarHistoricoAdminCliente(historicoCliente);

        return res.json(clienteCreado);
    } else {
        const response = util.setRespuesta(500, 'Error agregando cliente');
        return response;
    }

}

crearCliente = async (nuevo) => {

    try {

        let cliente = Cliente.create(nuevo);

        return cliente;

    } catch (e) {
        console.log(e);
        const response = util.setRespuesta(500, 'Error agregando cliente');
        return response;
    }

}

exports.actualizarCliente = async (req,res) => {

    let cliente = req.body;

    let historicoAdmin = await administradorController.guardarHistoricoAdminCliente(cliente.historicoCliente);

    if (historicoAdmin.dataValues !== 'undefined') {

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
            res.status(500).json({ msg: "error", details: err });
        });

    }else {
        const response = util.setRespuesta(500, 'Error agregando el historico');
        return response;
    }

}

exports.cambiarEstadoCliente = async (req,res) =>{

    let cliente = req.body;

    let historicoAdmin = await administradorController.guardarHistoricoAdminCliente(cliente.historicoCliente);

    if(historicoAdmin.dataValues !== 'undefined'){

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

    }else {
        const response = util.setRespuesta(500, 'Error agregando historico');
        return response;
    }

    

}