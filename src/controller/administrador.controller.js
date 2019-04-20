const db = require('../config/db.config');

//------------------------------------------------------
//Entidades de Sequelize
//------------------------------------------------------
const Administrador = db.sequelize.import('../models/administrador');
const ImgPerfil = db.sequelize.import('../models/img_perfil');

Administrador.belongsTo(ImgPerfil, {
    as : 'imgPerfil',
    foreignKey: 'idImgPerfil' 
})

exports.consultarAdmin = (req,res) => {
    
    let hashAdmin = req.params.hash;

    Administrador.findAll({
        include: [
            {
                model: ImgPerfil, as: 'imgPerfil', 
            }
        ],
        where: { hash:hashAdmin}
    })
    .then(administrador => {
        res.json(administrador);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })

}

