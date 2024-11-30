const express = require('express');
const financeController = require('../controllers/financeController');

const router = express.Router();

router.get('/stocks', financeController.listAcoes);
router.get('/tickers', financeController.lisAllTickers);
router.get('/funds', financeController.listFundos);
router.get('/currencies', financeController.listMoedas);
router.get('/ticker/:ticker',financeController.listTickers);


module.exports = router;