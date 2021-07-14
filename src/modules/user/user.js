const { Router } = require('express')
const { sign, verify } =  require('../../jwt')
const model = require('./model')
const { row } = require('../../pg')

const router = Router()

router.get("/signup", (req, res) => {

    res.render("signup")
})

router.post("/signup", async (req, res) => {

    try {
        const {username, surname, password} = req.body

        const postSql = `
        insert into users as u (
            user_username,
            user_surname,
            password
        ) values ($1, $2, crypt($3, gen_salt('bf')))
        returning
            u.user_id as id,
            u.user_username as username,
            u.user_surname as surname
        `

        const user = await row(postSql, username, surname, password)

        const accessToken = await sign(user)

        console.log(user, accessToken);

        res.send({user, accessToken})

    } catch (error) {
        res.status(503).end()
    }


})

router.put("/myaccount", async (req, res) => {

    try {
      const announcementToken = await verify(req.headers.access_token)

      if (announcementToken) {
        const user = await model.userUpdate({ ...req.body, id: announcementToken.user_id })

        const accessToken = await sign(user)

        res.send({user, accessToken})
      } else {
          res.status(401).end()
      }
    } catch (error) {
      console.log(error)
    }
})

router.get('/myaccount', (req, res) => {


    res.render('myaccount')
})


module.exports = router
