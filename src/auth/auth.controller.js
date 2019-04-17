const db = require('../config/db.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Administrador = db.sequelize.import('../models/administrador');
const util = require('../util');

const SERCRET_KEY = "secretKey1234*";


exports.createAdmin = async(req, res, next) => {

    const admin = {
        email: req.body.email,
        password: bycrypt.hashSync(req.body.password)
    };

    try{

        //crea el admin y me lo guarda en una variable para luego hacer uso de el
        let adminNuevo = await crearAdministrador(req.body);

        console.log("admin nuevo", adminNuevo);
        if(adminNuevo.length > 0){

            const expires = 24 * 60 * 60;
            const accessToken = jwt.sign({id: adminNuevo.idAdministrador},
                SERCRET_KEY, {
                    expiresIn: expires
                });
            const dataAdmin = {

                email : admin.email,
                accessToken: accessToken,
                expiresIn: expires,
                administrador: adminActual[0].hash

            }    
    
            res.send({dataAdmin});

        }
        

    }catch (e) {
        console.log(e);
        const response = util.setRespuesta(500, e.message);
        res.send({response});
    }
    

}


crearAdministrador = async (admin) => {

    try{

		let administrador = Administrador.create(admin)

		return administrador;
	}catch (e) {
        console.log(e);
        const response = util.setRespuesta(500, e.message);
        res.send({response});
    }

}

exports.loginAdmin = async (req, res, next) => {

    const admin = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    };

    console.log("admin",admin)

    try{

        let adminActual = await consultarAdminById(admin);

        if(adminActual.length > 0){
            
            const expires = 24 * 60 * 60;
            const accessToken = jwt.sign({id: admin.idAdministrador},
                SERCRET_KEY, {
                    expiresIn: expires
                });
                
            const dataAdmin = {

                email : admin.email,
                accessToken: accessToken,
                expiresIn: expires,
                administrador: adminActual[0].hash

            }     

            res.send({dataAdmin});
            /*const resultPasword = bcrypt.compareSync(admin.password, adminActual[0].password);
            if(resultPasword){
                console.log("Entre!!");
                const expires = 24 * 60 * 60;
                const accessToken = jwt.sign({id: admin.idAdministrador},
                    SERCRET_KEY, {
                        expiresIn: expires
                    });
                 
                const dataAdmin = {

                    email : admin.email,
                    accessToken: accessToken,
                    expiresIn: expires
    
                }     

                res.send({dataAdmin});    
            }else{
                console.log("Noooo Entre!!");
            }*/

        }

    }catch (e) {
        console.log(e);
        const response = util.setRespuesta(500, e.message);
        res.send({response});
    }

}


consultarAdminById = async (admin) => {

    try{

		let adminActual =
			Administrador.findAll({
                where: {
                    email: admin.email
                }
            });

        return adminActual;
        
	}catch (e) {
        console.log(e);
        const response = util.setRespuesta(500, e.message);
        res.send({response});
    }

}   