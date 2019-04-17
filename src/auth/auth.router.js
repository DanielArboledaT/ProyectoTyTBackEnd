const router = require('express').Router();
const auth = require('./auth.controller');

router.post('/crearAdmin', auth.createAdmin);

router.post('/login', auth.loginAdmin);

module.exports = router;