
const express = require('express');
const carteiraController = require('../../controllers/dbControllers/carteiraController');

const router = express.Router();

router.get('/', carteiraController.listCarteiras);
router.get('/:id', carteiraController.getCarteira);
router.post('/', carteiraController.addCarteira);
router.put('/:id', carteiraController.updateCarteira);
router.delete('/:id', carteiraController.deleteCarteira);

module.exports = router;
