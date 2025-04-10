const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:uid', userController.getUser);
router.post('/:uid', userController.createUser);
router.patch('/:uid', userController.updateUser);
router.get('/by-username/:username', userController.getUserByUsername);

router.patch('/follow/:username', userController.followUser);

module.exports = router;
