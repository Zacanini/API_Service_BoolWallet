
const express = require('express');
const dividendoController = require('../../controllers/dbControllers/dividendoController');

const router = express.Router();

router.get('/', dividendoController.listDividendos);
router.get('/:id', dividendoController.getDividendo);
router.post('/', dividendoController.addDividendo);
router.put('/:id', dividendoController.updateDividendo);
router.delete('/:id', dividendoController.deleteDividendo);

module.exports = router;
