const { sign, verify} = require('jsonwebtoken')

const SECRET = 'SECRET'

module.exports.sign = payload => sign(payload, SECRET, {
	
})

module.exports.verify = accessToken => verify(accessToken, SECRET)
