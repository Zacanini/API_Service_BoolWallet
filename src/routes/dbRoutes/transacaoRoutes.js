
const express = require('express');
const transacaoController = require('../../controllers/dbControllers/transacaoController');

const router = express.Router();

router.get('/', transacaoController.listTransacoes);
router.get('/:id', transacaoController.getTransacao);
router.post('/', transacaoController.addTransacao);
router.put('/:id', transacaoController.updateTransacao);
router.delete('/:id', transacaoController.deleteTransacao);

module.exports = router;
