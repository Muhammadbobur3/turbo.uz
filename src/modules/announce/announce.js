const { Router } = require('express')
const { rows } = require('../../pg')

const router = Router()

router.get("/announcements", async (req, res) => {

    const getAnnouncement = `
        select * from announcements
    `

    const findAnnouncement = `
    select
        *
    from announcements
    where announcement_title ilike $1;
    `

    const getCategories = `select * from categories`

    const list = await rows(getCategories)


    if (!req.query.search) {
        const data = await rows(getAnnouncement)

        res.render('announcements', { data, list })

    }
    else {
        const item = async ({search}) => await rows(findAnnouncement, '%' + search + '%')
        const data = await item(req.query)
        res.render('announcements', { data, list })
    }

})

module.exports = router
