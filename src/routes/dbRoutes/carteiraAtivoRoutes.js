
const express = require('express');
const carteiraAtivoController = require('../../controllers/dbControllers/carteiraAtivoController');

const router = express.Router();

router.get('/', carteiraAtivoController.listCarteiraAtivos);
router.get('/:id', carteiraAtivoController.getCarteiraAtivo);
router.post('/', carteiraAtivoController.addCarteiraAtivo);
router.put('/:id', carteiraAtivoController.updateCarteiraAtivo);
router.delete('/:id', carteiraAtivoController.deleteCarteiraAtivo);

module.exports = router;
