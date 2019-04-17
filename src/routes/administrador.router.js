const router = require('express').Router();
const administrador = require('../controller/administrador.controller');

router.get('/administrador/consulta/:hash', administrador.consultarAdmin);

module.exports = router;