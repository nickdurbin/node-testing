const Users = require('./user-model')
const db = require('../../../data/db-config')

describe("users-model", () => {
  beforeEach(async () => {
    await db("users").truncate()
  })

  describe("insert()", () => {
    test("should add the user to the db", async () => {

      await Users.add({ username: "userNick", password: "password" })
      await Users.add({ username: "userJeff", password: "password"})

      const users = await db("users")
      expect(users).toHaveLength(2)
    })
  })
})