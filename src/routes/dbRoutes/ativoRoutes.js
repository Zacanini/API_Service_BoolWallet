
const express = require('express');
const ativoController = require('../../controllers/dbControllers/ativoController');

const router = express.Router();

router.get('/', ativoController.listAtivos);
router.get('/:id', ativoController.getAtivo);
router.post('/', ativoController.addAtivo);
router.put('/:id', ativoController.updateAtivo);
router.delete('/:id', ativoController.deleteAtivo);

module.exports = router;
