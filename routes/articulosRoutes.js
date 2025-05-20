import express from "express"
// import { addArticulo, deleteArticulo, getArticuloById, listArticulos, updateArticulo } from "../controllers/articulosControllers.js";

import { addArticulo, listArticulos, getArticuloById, searchByTag, updateArticulo, deleteArticulo} from "../controllers/articulosControllers.js";
const articulosRouter = express.Router();


articulosRouter.get('/', listArticulos)
articulosRouter.post('/',addArticulo)
articulosRouter.get('/:id',getArticuloById)
articulosRouter.get('/search/tags',searchByTag)
articulosRouter.put('/:id',updateArticulo)
articulosRouter.delete('/:id', deleteArticulo)


export {articulosRouter};
