const router = require("express").Router()
const { row, rows } = require('../../pg')

router.get("/item/:id", async (req, res) => {

    const {id} = req.params

    const sql = `select * from announcements where announcement_id = $1`

    const data = await rows(sql, id)

    res.render("item", {data})

})

module.exports = router