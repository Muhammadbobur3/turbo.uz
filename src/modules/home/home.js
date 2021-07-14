const { Router } = require('express')
const { rows } = require('../../pg')

const router = Router()

router.get("/", async (_, res) => {

    res.render('index')
})

module.exports = router