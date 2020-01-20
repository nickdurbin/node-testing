const bcrypt = require('bcryptjs')
const db = require('../../../data/db-config')

function find() {
  return db("users")
    .select("id", "username")
}

function findBy(filter) {
  return db("users").where(filer).select("id", "username", "password")
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14)
  const [id] = await db("users").insiert(user)

  return findById(id)
}

function findById(id) {
  return db("users").where({ id }).first("id", "username")
}

module.exports = {
  add, 
  find, 
  findBy, 
  findById
}