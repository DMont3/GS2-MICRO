const express = require('express');
const router = express.Router();
const objetivoController = require('../controller/ObjetivoController');

router.get('/', objetivoController.get);

module.exports = router;
