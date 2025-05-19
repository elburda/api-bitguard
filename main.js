// const funciones = require('./funciones')
// console.log(funciones.sumar(2,6))

// const {sumar,restar} = require('./funciones')
// console.log(sumar(2,6))
// console.log(restar(9,6))

/********** */

/*import {sumar}  from './funciones.js'
console.log(sumar(3,5))

import os from "os"

console.log(os.arch())
console.log(os.platform())
console.log(os.freemem())*/

// main.js
// import http from 'http';
// import { request } from 'https';

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Servidor funcionando con ES Modules');
// });

// server.listen(PORT, () => {
// console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });

// import express from "express"

// const app = express();

// app.get('/',(req,res) =>{
//     res.send("Pagina principal");
// })

// app.get('/saludo',(req,res) =>{
//     res.send("Hola");
// })

// app.listen(3000,() =>{
//     console.log("Servidor corriendo en http://localhost:${PORT}")
// })

//PRODUCTO - ARTICULO
//CRUD

//MVC   MODELO - VISTA - CONTROLADOR

// controllers
// Services

import express from "express"
import articulosRoutes from "./routes/articulosRoutes.js"
const app = express();

app.use(express.json());
app.use('/articulos', articulosRoutes)


app.listen(3000,() =>{
    console.log("Servidor corriendo en http://localhost:${PORT}")
})