const router = require('express').Router();
const vendedores = require('../controller/vendedor.controller.js')

router.get('/consulta', vendedores.consultarVendedores);

router.post('/guardar', vendedores.guardarVendedor);

router.put('/actualizar', vendedores.actualizarVendedor);

router.put('/cambiarEstado', vendedores.cambiarEstadoVendedor);

module.exports = router;