const db = require('../config/db.config');
const shortid = require('shortid');
const administradorController = require('./administrador.controller');
const util = require('../util');

//------------------------------------------------------
//Entidades de Sequelize
//------------------------------------------------------
const Vendedor = db.sequelize.import('../models/vendedor');
const ImgPerfil = db.sequelize.import('../models/img_perfil');
const Administrador = db.sequelize.import('../models/administrador');

Vendedor.belongsTo(ImgPerfil, {
    as: 'imgPerfil',
    foreignKey: 'idImgPerfil'
})

Vendedor.belongsTo(Administrador, {
    as: 'administrador',
    foreignKey: 'idAdministrador'
})

exports.consultarVendedores = (req, res) => {

    Vendedor.findAll({
        include: [
            {
                model: ImgPerfil, as: 'imgPerfil',
            },
            {
                model: Administrador, as: 'administrador'
            }
        ],

        order: [
            ['estado', 'ASC'],
            ['primer_apellido', 'ASC']
        ]
    })
        .then(vendedor => {
            res.json(vendedor);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: "error", details: err });
        })

}

exports.consultarVendedoresByHash = (req, res) => {

    let hashVendedor = req.params.hash

    Vendedor.findAll({
        include: [
            {
                model: ImgPerfil, as: 'imgPerfil',
            },
            {
                model: Administrador, as: 'administrador'
            }
        ],
        where: {
            hash: hashVendedor
        },
        order: [
            ['estado', 'ASC'],
            ['primer_apellido', 'ASC']
        ]
    })
        .then(vendedor => {
            res.json(vendedor);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: "error", details: err });
        })

}

exports.guardarVendedor = async (req, res) => {

    let nuevoVendedor = req.body;
    nuevoVendedor.hash = shortid.generate(10);

    let vendedorCreado = await crearVendedor(nuevoVendedor);
    if (vendedorCreado !== 'undefined') {
        let historicoVendedor = {
            cambioRealizado: "Creando vendedor",
            fechaMovimiento: new Date(),
            idAdministrador: vendedorCreado.dataValues.idAdministrador,
            idVendedor: vendedorCreado.dataValues.idVendedor,
            movimiento: "Crear",
        }
        
        administradorController.guardarHistoricoAdminVendedor(historicoVendedor);

        return res.json(vendedorCreado);
    } else {
        const response = util.setRespuesta(500, 'Error agregando vendedor');
        return response;
    }

}

crearVendedor = async (nuevo) => {

    try {

        let vendedor = Vendedor.create(nuevo);

        return vendedor;

    } catch (e) {
        console.log(e);
        const response = util.setRespuesta(500, 'Error agregando vendedor');
        return response;
    }

}

exports.actualizarVendedor = async (req, res) => {

    let vendedor = req.body;

    let historicoAdmin = await administradorController.guardarHistoricoAdminVendedor(vendedor.historicoVendedor);

    if (historicoAdmin.dataValues !== 'undefined') {

        Vendedor.update(vendedor,
            {
                where: {
                    idVendedor: vendedor.idVendedor
                }
            }
        )
            .then(vendedor => {
                res.json(vendedor)
            }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "error", details: err });
            });

    }else {
        const response = util.setRespuesta(500, 'Error agregando historico');
        return response;
    }

}

exports.cambiarEstadoVendedor = async (req, res) => {

    let vendedor = req.body;
    console.log("Vendedor ********************", req.body);

    let historicoAdmin = await administradorController.guardarHistoricoAdminVendedor(vendedor.historicoVendedor);

    if(historicoAdmin.dataValues !== 'undefined'){

        if (vendedor.estado === 'A') {

            Vendedor.update({ estado: 'I' },
                {
                    where: {
                        idVendedor: vendedor.idVendedor
                    }
                }).then(vendedor => {
                    res.json(vendedor)
                }).catch(err => {
                    console.log(err);
                    res.status(500).json({ msg: "error", details: err });
                })
    
        } else if (vendedor.estado === 'I') {
    
            Vendedor.update({ estado: 'A' },
                {
                    where: {
                        idVendedor: vendedor.idVendedor
                    }
                }).then(vendedor => {
                    res.json(vendedor)
                }).catch(err => {
                    console.log(err);
                    res.status(500).json({ msg: "error", details: err });
                })
    
        }

    }else {
        const response = util.setRespuesta(500, 'Error agregando historico');
        return response;
    }

    


}