const db = require('../config/db.config');


//------------------------------------------------------
//Entidades de Sequelize
//------------------------------------------------------

const ImgPerfil = db.sequelize.import('../models/img_perfil');

exports.guardarImgPerfil = (req,res) => {

    let nuevaImgPerfil = req.body;

    ImgPerfil.create(nuevaImgPerfil)
        .then(nuevaImgPerfil => {
            res.json(nuevaImgPerfil)
        }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        })

}