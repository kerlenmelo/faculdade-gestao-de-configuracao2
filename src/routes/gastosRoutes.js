// src/routes/gastosRoutes.js
const express = require('express');
const router = express.Router();
const gastosController = require('../controllers/gastosController');

router.get('/', gastosController.getGastos)

router.post('/', gastosController.addGastos)

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = gastos.findIndex(gasto => gasto.id == id)

    if (index === -1){
        return res.status(404).json({ message: 'Gasto não encontrado' })
    }

    gastos.splice(index, 1)
    res.status(204).send()
})

module.exports = router;
