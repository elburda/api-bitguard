import * as articulosService from '../services/articulosServices.js'

export async function listArticulos(req, res) {
    const articulos = await articulosService.getArticulos(req.query);
    res.json(articulos)
}

export async function getArticuloById(req, res) {
    const articulo = await articulosService.getArticulo(req.params.Id);
    if (!articulo) return res.status(404).json({message: "not found"})
    res.json(articulo)
}

export async function addArticulo(req, res) {
    const { title, type, description} = req.body;
    if(!title || !type || !description){
        return res.status(400).json({message: "missingg fields"})
    }
    const newArticulo = await articulosService.createArticulo({title, type});
    res.status(201).json(newArticulo)
}

export async function updateArticulo(req, res) {
    const updatedArticulo = await articulosService.updateArticulo(req.params.id,req.body);
    res.json(updatedArticulo)
}

export async function deleteArticulo(req, res) {
    const deletedArticulo = await articulosService.deleteArticulo(req.params.id,req.body);
    res.json({message:"deleted"})
}