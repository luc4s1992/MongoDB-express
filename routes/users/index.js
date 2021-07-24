var express = require('express'),
    router = express.Router(),
    userController = require('../../controllers/users')

router.get('/register', userController.register)

module.exports = router