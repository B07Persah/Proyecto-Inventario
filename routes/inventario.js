const express = require("express");
const {leerInventario} = require("../controllers/inventarios")
const router = express.Router()

router.get("/",leerInventario)

module.exports = router