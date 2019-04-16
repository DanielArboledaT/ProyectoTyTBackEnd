const router = require('express').Router();
const vendedores = require('../controller/vendedor.controller.js')

router.get('/vendedor/consulta', vendedores.consultarVendedores);

router.post('/vendedor/guardar', vendedores.guardarVendedor);

router.put('/vendedor/actualizar', vendedores.actualizarVendedor);

router.put('/vendedor/cambiarEstado', vendedores.cambiarEstadoVendedor);

module.exports = router;