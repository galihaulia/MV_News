const express = require('express');
const router = express.Router();

const authRouter = require('./auth')
// const usersRouter = require('./users')

router.use('/auth', authRouter)
// router.use('/user', usersRouter)

module.exports = router