const router = require('express').Router();
const vendedores = require('../controller/vendedor.controller.js')

router.get('/consulta', vendedores.consultarVendedores);


module.exports = router;