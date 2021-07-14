const { Router } = require('express')
const { sign } =  require('../../jwt')
const {row, rows} = require("../../pg")

const router = Router()

router.get('/login',  (_, res) => {

    res.render('login')
})

router.post('/login', async (req, res) => {

    try {

        const { username, password } = req.body

        const user = await row(
            `
            select * from users
            where user_username = $1 and password = crypt($2, password)
            `,

        username, password
        )

        if (!user) {
            res.statusMessage = 'Wrong username or password'
            res.status(401).end()
        }
        else {
            const accessToken = await sign(user)
            res.status(201).send({ user, accessToken })
        }
    }
        catch(err) {
            res.status(503).end()
        }
})

module.exports = router
