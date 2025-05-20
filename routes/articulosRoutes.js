import express from "express"
import { addArticulo, deleteArticulo, getArticuloById, listArticulos, updateArticulo } from "../controllers/articulosControllers.js";

const router = express.Router();


router.get('/', listArticulos)
router.get('/:id',getArticuloById)
router.post('/',addArticulo)
router.put('/:id',updateArticulo)
router.delete('/:id', deleteArticulo)


export default router;
