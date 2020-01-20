const jwt = require('jsonwebtoken')

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  }

  const secret = process.env.JWT_SECRET || 'This is a secret.'

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secret, options)
}

module.exports = {
  generateToken
}