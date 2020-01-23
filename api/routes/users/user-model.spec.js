const Users = require('./user-model')
const db = require('../../../data/db-config')

// re-run the seeds prior to every single test
beforeEach(async () => {
  await db.seed.run()
})

describe("users-model", () => {
  beforeEach(async () => {
    await db("users").truncate()
  })

  describe("insert()", () => {
    test("should add the user to the db", async () => {

      await Users.add({ username: "userNick", password: "password" })
      await Users.add({ username: "userJeff", password: "password"})

      const users = await db("users")
      expect(users).toHaveLength(5)
    })

    test("find", async () => {
      const res = await Users.find()
      expect(res.length).toBeGreaterThan(0)
    })

    test("findById", async () => {
      const res = await Users.findById(1)
      expect(res.username).toBe("userNick")
    })

    test("update", async () => {
      await Users.update(1, { username: "userDurb" })
      const user = await Users.findById(1)
      expect(user.username).toBe("userDurb")
    })

    test("remove", async () => {
      await Users.remove(1)
      const users = await Users.find()
      expect(users).toHaveLength(0)
    })
  })
})