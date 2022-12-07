const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {

    res.render('pages/masmorras/index')
})

router.get('/battle', async (req, res) => {

    res.render('pages/masmorras/battle')
})

module.exports = router