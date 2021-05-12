const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(process.env.DATABASE_URL)
    res.render('index.ejs')
})

module.exports = router