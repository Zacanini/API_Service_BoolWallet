
const express = require('express');
const userController = require('../../controllers/dbControllers/userController');

const router = express.Router();

router.get('/', userController.listUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
