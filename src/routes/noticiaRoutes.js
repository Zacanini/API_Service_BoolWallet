const express = require('express');
const noticiaController = require('../controllers/noticiaController');

const router = express.Router();

router.get('/B3', noticiaController.listNoticiasB3);

module.exports = router;