const router = require('express').Router();
const imgPefil = require('../controller/img_perfil.controller.js')

router.post('/imgPerfil/guardarImg', imgPefil.guardarImgPerfil);

module.exports = router;