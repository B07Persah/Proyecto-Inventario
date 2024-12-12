const express = require("express")
const router = express.Router()
const holaControllers = require("../controllers/holaControllers")


router.get("/",holaControllers.holaMundo)

module.exports = router