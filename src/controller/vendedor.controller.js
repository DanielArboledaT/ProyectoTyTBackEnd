const db = require('../config/db.config');
const shortid = require('shortid');

//------------------------------------------------------
//Entidades de Sequelize
//------------------------------------------------------
const Vendedor = db.sequelize.import('../models/vendedor');
const ImgPerfil = db.sequelize.import('../models/img_perfil');
const Administrador = db.sequelize.import('../models/administrador');

Vendedor.belongsTo(ImgPerfil, {
    as : 'imgPerfil',
    foreignKey: 'idImgPerfil' 
})

Vendedor.belongsTo(Administrador, {
    as : 'administrador',
    foreignKey: 'idAdministrador' 
})

exports.consultarVendedores = (req,res) => {
    
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
        res.status(500).json({msg: "error", details: err});
    })

}

exports.guardarVendedor = (req,res) => {

    let nuevoVendedor = req.body;
    nuevoVendedor.hash = shortid.generate(10);
    console.log("nuevoVendedor", nuevoVendedor);

    /*Vendedor.create(nuevoVendedor)
        .then(vendedor => {
            res.json(vendedor)
        }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        })*/

}

exports.actualizarVendedor = (req,res) => {

    let vendedor = req.body;

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
            res.status(500).json({msg: "error", details: err});
        })

}

exports.cambiarEstadoVendedor = (req,res) =>{

    let vendedor = req.body;
    console.log("Vendedor ********************", req.body)

    if(vendedor.estado === 'A'){

        Vendedor.update({estado :'I'},
        {
            where: { 
                idVendedor: vendedor.idVendedor 
            }
        }).then(vendedor => {
            res.json(vendedor)
        }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        })

    }else if(vendedor.estado === 'I'){

        Vendedor.update({estado :'A'},
        {
            where: { 
                idVendedor: vendedor.idVendedor 
            }
        }).then(vendedor => {
            res.json(vendedor)
        }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        })

    }


}