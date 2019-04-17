const router = require('express').Router();
const cliente = require('../controller/cliente.controller.js');

router.get('/cliente/consultar', cliente.consultarClientes);

router.post('/cliente/guardarCliente', cliente.guardarCliente);

router.put('/cliente/actualizarCliente', cliente.actualizarCliente);

router.put('/cliente/cambiarEstado', cliente.cambiarEstadoCliente);


module.exports = router;