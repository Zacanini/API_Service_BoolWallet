const express = require('express');
const oauthController = require('../controllers/authController');

const router = express.Router();

router.get('/login', oauthController.login);
router.get('/callback', oauthController.callback);

module.exports = router;