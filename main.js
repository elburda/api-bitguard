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

// const enMantenimiento = true;
// TODO:
// function verificarMantenimineto(req, res, next) {
//     if(enMantenimiento){
//         res.status(503).send("el servidor esta en mantenimiento")
//     }else{
//         next()
//     }
// }

// app.use(verificarMantenimineto)
//app.get('/test',(req,res) => {
//     res.json("hola")
// })

/***midware de limite de peticiones
// const solicitudesIP ={};
// function limitarSolicitudes(req, res, next){
//     const ip = req.ip;
//     const tiempoActual = Date.now();
//     if(!solicitudesIP[ip]){
//         solicitudesIP[ip]= []
//     }
//     solicitudesIP[ip] = solicitudesIP[ip].filter(tiempo => tiempo >tiempoActual - 60000);
//
//     if(solicitudesIP[ip].length > 10 ){
//         res.status(429).send("demasiadas solicitudes")
//     }
//     solicitudesIP[ip].push(tiempoActual)
//     next()
// }

// app.use(limitarSolicitudes);

// app.get('/test',(req,res) => {
//     res.json("hola")
// })

*/




import express from "express"
import articulosRoutes from "./routes/articulosRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import path from "path"
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();


app.use(express.json());
app.use(express.static((path.join(__dirname,'public' ))))
app.use('/articulos', articulosRoutes)
app.use('/users', userRoutes)

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html' ))
})


app.listen(3000,() =>{
    console.log("Servidor corriendo en http://localhost:${PORT}")
})
