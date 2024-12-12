# Proyecto Inventario
### Inicio del proyecto
abre la terminal en la carpeta donde vas`a guardar el proyecto,y pon los siguientes comandos:
```
mkdir proyecto-inventario
cd proyecto inventario
```
```
npm init
```
```
touch .env gitignore index.js
```
instalamos lass dependencias, recuerden npm es le manejador de paquetes de node o node package manage
```
npm install express mongoose dotenv cors
```
```
npm install --save-dev nodemon
```
y en el .gitignore copian
```
node_models
.env
```
y ahora vamos a subir el codigo a Github
### Hola mundo en Node.js
ahora vamos hacer un hola mundo en node.js, para esovamos a poner el siguiente codigoen index.js
```
const express = require("express")
const app = express()
const PORT = 3006
app.set("port", PORT)
app.get("/",(req,res)=>{
    res.send("hola mundo")
})
app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`)
})
```
vamos a explicar cada una de las lineas
- const express = require("express")
vamos a usar el paquete express con el nombre express estamos trayendo la herramienta que vamos a usar.
- const app = express()
definimos como la vamos a llamar para usarla
- const PORT = 3006
defino un puerto
- app.set("port", PORT)
configuro el puerto de la app
- app.get("/",
tenemos un verbo de http y una ruta y definimos una funcion que se ejecuta
- (req,res)=>{
    -req: la informacion que recibo del cliente
    -res: la respuesta que le doy a este cliente
- res.send("hola mundo")
estoy enviando la respuesta "hola mundo"
- })
aqui estoy cerrando lo de arriba
- app.listen(PORT,()=>{
le dijo que me escuche el puerto
- console.log(`server running in port ${PORT}`)
me envio este mensaje para saber que todo esta OK

### Rutas y controladores
Primeros creamos las carpetas con
```
mkdir controllers models routes
```
(pendiente escribir sobre
exports.holaMundo = (req,res)=>{
    console.log("hola desde el controlador")
    res.send("Hola desde el controlador")
)
```
creamos en index.js para crear la ruta
``
const inventarioRoutes = require("./routes/inventario")
```
`creamos en index.js para crear la ruta
- app.use("/api/inventario",inventarioRoutes)
```
creamos en "controller"
- exports.leerInventario = (req,res)=>{
    - console.log("hola controller")
    - res.send("Hola controller")
- }
```
para conectarnos a la base de datos creamos en el index.js lo siguiente
- const mongoose = require("mongoose")
- require("dotenv").config()
```
para este paso es necesario tener una cuanta en MongoDB y extraer el link de usuario
- mongoose.connect("mongodb+srv://yayoper:tech1928@cluster0.tcqko.mongodb.net/")
- .then(console.log("connect to BD"))
- .catch(err=> console.error(err))





