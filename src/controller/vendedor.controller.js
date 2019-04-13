const db = require('../config/db.config');


//------------------------------------------------------
//Entidades de Sequelize
//------------------------------------------------------
const Vendedor = db.sequelize.import('../models/vendedor');
const ImgPerfil = db.sequelize.import('../models/img_perfil');

Vendedor.belongsTo(ImgPerfil, {
    as : 'imgPerfil',
    foreignKey: 'idImgPerfil' 
})

exports.consultarVendedores = (req,res) => {
    
    Vendedor.findAll({
        include: [
            {
                model: ImgPerfil, as: 'imgPerfil'
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

    Vendedor.create(nuevoVendedor)
        .then(vendedor => {
            res.json(vendedor)
        }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        })

}