const router = require('express').Router();
const vendedores = require('../controller/img_perfil.controller.js')

router.post('/guardarImg', vendedores.guardarImgPerfil);

module.exports = router;