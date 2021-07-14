const router = require('express').Router()
const { row, rows } = require('../../pg')
const path = require("path")
const { verify } = require('../../jwt')

const POST = `
insert into announcements
(announcement_title, announcement_content, announcement_price, phone_number, announcement_img, category_id, user_id)
values ($1, $2, $3, $4, $5, $6, $7) returning *
`

const uploadFile = path.join(__dirname, "../../static/img")

router.get("/announce", async (req, res) => {

    const SQL = `
    select * from categories
    `

    const category = await rows(SQL)

    res.render("post", {category})

})

router.post("/announce", async (req, res) => {

    const { title, content, price, phone, type, user_id } = req.body

    const file = req.files.pathImg

    if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
        let pathImg = path.join("/img", file.name)

        file.mv(path.join(uploadFile, file.name))

        const data = await rows(POST, title, content, price, phone, pathImg, type, user_id)

        res.send({data})
    }

})

router.get('/delete', async (req, res) => {

    const {id} = req.params

    const DelSql = `
        select * from announcements where user_id = $1;
    `

    const data = await rows(DelSql, id)

    res.render("delete", {data})
})

// router.delete('/delete', (req, res) => {
//     res.render('announcements')
// })

module.exports = router