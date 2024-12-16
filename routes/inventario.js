const express = require("express");
const {leerInventario, crear, leerElementoPorId, modificarElementoPorId, eliminarElementoPorId} = require("../controllers/inventario")
const router = express.Router();

router.get("/",leerInventario)
router.get("/:id", leerElementoPorId)
router.post("/",crear)
router.put("/:id", modificarElementoPorId)
router.delete("/:id", eliminarElementoPorId)

module.exports = router