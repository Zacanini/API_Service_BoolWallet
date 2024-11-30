// src/routes/historicoRentabilidadeRoutes.js
const express = require('express');
const historicoRentabilidadeController = require('../../controllers/dbControllers/historicoRentabilidadeController');

const router = express.Router();

router.get('/', historicoRentabilidadeController.listHistoricoRentabilidade);
router.get('/:id', historicoRentabilidadeController.getHistoricoRentabilidade);
router.post('/', historicoRentabilidadeController.addHistoricoRentabilidade);
router.put('/:id', historicoRentabilidadeController.updateHistoricoRentabilidade);
router.delete('/:id', historicoRentabilidadeController.deleteHistoricoRentabilidade);

module.exports = router;
