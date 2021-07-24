var express = require('express'),
    router = express.Router(),
    userRouter = require('./users')

router
  .use('/users', userRouter)

module.exports = router