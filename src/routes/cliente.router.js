const router = require('express').Router();
const cliente = require('../controller/cliente.controller.js');

router.get('/cliente/consultar', cliente.consultarClientes);

router.post('/cliente/guardarCliente', cliente.guardarCliente);

router.post('/clientes/cambiarEstado', cliente.cambiarEstadoCliente)

module.exports = router;