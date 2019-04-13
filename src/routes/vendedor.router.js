const router = require('express').Router();
const vendedores = require('../controller/vendedor.controller.js')

router.get('/consulta', vendedores.consultarVendedores);

router.post('/guardar', vendedores.guardarVendedor);

module.exports = router;