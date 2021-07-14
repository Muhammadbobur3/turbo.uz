const { rows, row } = require('../../pg');

const router = require('express').Router()


const Sql = `

insert into questions
(questions_name, questions_email, questions_phone, questions_content)
values ($1, $2, $3, $4)
`

router.post('/', async (req, res) => {

    const { name, email, phone_number, content_query } = req.body

    console.log(req.body);

    await row(Sql, name, email, phone_number, content_query)

    res.redirect('/')
})

module.exports = router