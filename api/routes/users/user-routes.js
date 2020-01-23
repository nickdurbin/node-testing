const express = require('express')
const Users = require('./user-model')
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.find()

    res.json(users)
  } catch (error) {
    next(error)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
   
  } catch (error) {
    next(error)
  }
})

router.post("/", async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
})

router.put("/:id", async (req, res, next) => {
  try {
   
  } catch (error) {
    next(error)
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
})

module.exports = router;