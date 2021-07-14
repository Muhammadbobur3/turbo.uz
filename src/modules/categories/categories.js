const { Router } = require('express')
const { rows } = require('../../pg')
const {model} = require("./model")

const router = Router()

router.get('/categorie/:id', async (req, res) => {

const {id} = req.params

const data = await model.item(id)
const categories = await model.category()

 res.render("categorie", {data, categories})

})

module.exports = router