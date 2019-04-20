const db = require('../config/db.config');
const util = require('../util');

//------------------------------------------------------
//Entidades de Sequelize
//------------------------------------------------------
const Administrador = db.sequelize.import('../models/administrador');
const ImgPerfil = db.sequelize.import('../models/img_perfil');
const HistoricoAdminVendedor = db.sequelize.import('../models/historico_administrador_vendedor');
const HistoricoAdminCliente = db.sequelize.import('../models/historico_administrador_cliente');
const HistoricoAdminPedido = db.sequelize.import('../models/historico_administrador_pedido');
const HistoricoAdminProducto = db.sequelize.import('../models/historico_administrador_producto');

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

exports.guardarHistoricoAdminVendedor = async (historico) => {

   try{

        let historicoAgragado = await HistoricoAdminVendedor.create(historico);

        return historicoAgragado;

    }catch (e) {
        console.log(e);
        const response = util.setRespuesta(500, 'Error agregando historico');
        return response;
    }  

}

exports.guardarHistoricoAdminCliente = async (historico) => {

    try{

        let historicoAgragado = await HistoricoAdminCliente.create(historico);

        return historicoAgragado;

    }catch (e) {
        console.log(e);
        const response = util.setRespuesta(500, 'Error agregando historico');
        return response;
    }  

}

exports.guardarHistoricoAdminPedido = async (historico) => {

    try{

        let historicoAgragado = await HistoricoAdminPedido.create(historico);

        return historicoAgragado;

    }catch (e) {
        console.log(e);
        const response = util.setRespuesta(500, 'Error agregando historico');
        return response;
    }  

}

exports.guardarHistoricoAdminProducto = async (historico) => {

    try{

        let historicoAgragado = await HistoricoAdminProducto.create(historico);

        return historicoAgragado;

    }catch (e) {
        console.log(e);
        const response = util.setRespuesta(500, 'Error agregando historico');
        return response;
    }  

}

