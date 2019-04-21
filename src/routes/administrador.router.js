const router = require('express').Router();
const administrador = require('../controller/administrador.controller');

router.get('/administrador/consulta', administrador.consultarAministradores);

router.get('/administrador/consultaporhash/:hash', administrador.consultarAdminByHash);

router.get('/historicoAdmin/consultaVendedor/:id', administrador.consultarHistoricoAdminVendedor);

router.get('/historicoAdmin/consultaCliente/:id', administrador.consultarHistoricoAdminCliente);

module.exports = router;