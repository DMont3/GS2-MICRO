const express = require('express');
const router = express.Router();
const indicadorController = require('../controller/IndicadorController');

router.get('/:id', indicadorController.get);

module.exports = router;
