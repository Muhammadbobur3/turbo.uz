const express = require("express")
const fileUpload = require("express-fileupload")
const ejs = require("ejs")
const path = require("path")

const announce = require('./src/modules/announcements/announce')
const announcement = require('./src/modules/announce/announce')
const user = require('./src/modules/user/user')
const home = require('./src/modules/home/home')
const login = require('./src/modules/user/login')
const item = require('./src/modules/categories/categories')
const query = require('./src/modules/query/query')
const bookmark = require('./src/modules/bookmark/bookmark')
const modal = require('./src/modules/modal/modal')
const cors = require("cors")

const app = express()
app.use(express.json())
.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(fileUpload())


app.use((req, res, next) => {

	res.set({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type, access_token user',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
	})

	next()
})


app.engine("ejs", ejs.renderFile)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "src", "views"))
app.use(express.static(path.join(__dirname, "src", "static")))
app.use(express.static(path.join(__dirname, 'src', 'public')))


app.use(home)
app.use(announcement)
app.use(user)
app.use(login)
app.use(announce)
app.use(item)
app.use(query)
app.use(bookmark)
app.use(modal)

const PORT = process.env.PORT || 4001
app.listen(PORT,() => console.log(PORT))