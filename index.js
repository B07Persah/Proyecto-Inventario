const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const holaRoutes = require("./routes/holaRoutes")
const inventarioRoutes = require("./routes/inventario")//N
const app = express()
const PORT = 3006
app.set("port", PORT)

app.use("/api/hola",holaRoutes)//
app.use("/api/inventario",inventarioRoutes)//N
//app.use("/api/herramientas/",herramientasRoutes)

mongoose.connect("mongodb+srv://yayoper:tech1928@cluster0.tcqko.mongodb.net/")
.then(console.log("connect to BD"))
.catch(err=> console.error(err))

app.get("/",(req,res)=>{
    res.send("hola mundo")

})
app.listen(PORT,()=>{
    console.log(`server runing in port ${PORT}`)
})