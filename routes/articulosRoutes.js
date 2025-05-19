import express from "express"
import { addArticulo, getArticuloById, listArticulos } from "../controllers/articulosControllers.js";

const router = express.Router();

router.get('/', listArticulos)
router.get('/:id',getArticuloById)
router.post('/',addArticulo)


export default router;
