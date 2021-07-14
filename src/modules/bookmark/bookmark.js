const router = require('express').Router()
const { row, rows } = require('../../pg')

const Sql = `
select
    bookmark_id
from
    bookmark
where announcement_id = $1 and is_active = true;
`

const UpdateSql = `
    update bookmark set is_active = false where announcement_id = $1;
`

const InsertSql = `
    insert into bookmark(user_id, announcement_id) values ($1, $2);
`

router.get('/saved', async (req, res) => {

    const { id } = req.body

console.log(id)

    // const bookmark = await rows(Sql, id)

    // if (bookmark) {
    //     const update = await row(UpdateSql, id)
    // } else {
    //     const insert = await row(InsertSql, id)
    // }

    // res.render('announcements', { bookmark })

    // console.log(bookmark);
})

// router.post('/saved', async (req, res) => {


// })

module.exports = router