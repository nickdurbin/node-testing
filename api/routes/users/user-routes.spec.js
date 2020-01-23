const supertest = require("supertest")
const server = require("../../server")
const db = require("../../../data/db-config")

// re-run the seeds prior to every single test
beforeEach(async () => {
  await db.seed.run()
})

test("get user list", async () => {
  const res = await supertest(server).get("/users")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
  expect(res.body.length).toBeGreaterThan(0)
  expect(res.body[0].id).toBe(1)
  expect(res.body[0].username).toBe("userNick")
})

test("create a user route", async () => {
  const res = await supertest(server)
    .post("/users")
    .send({ username: "userGeorge" })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
  expect(res.body).toEqual({ id: 3, username: "userGeorge" })
})