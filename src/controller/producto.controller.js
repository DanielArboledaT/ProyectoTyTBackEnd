const db = require('../config/db.config');


//------------------------------------------------------
//Entidades de Sequelize
//------------------------------------------------------
const Producto = db.sequelize.import('../models/producto');

exports.consultarProductos = (req,res) => {
    
    Producto.findAll({
        order: [
            ['nombre', 'ASC']
        ]
    })
    .then(producto => {
        res.json(producto);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })

}