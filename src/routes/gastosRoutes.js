const express = require('express');
const router = express.Router();
const { getGastos, postGasto, deleteGasto } = require('../controllers/gastosController');

router.get('/', getGastos);
router.post('/', postGasto);
router.delete('/:id', deleteGasto);

module.exports = router;
