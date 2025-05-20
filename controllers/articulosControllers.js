import articulosModels from '../models/articulosModels.js'
import * as articulosService from '../services/articulosServices.js'

export const addArticulo = async (req, res) =>{
    try{
        const articulo = new articulosModels({...req.body})
        const nuevoArticulo = await articulo.save();
        res.json(nuevoArticulo)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

export const listArticulos = async (req, res) =>{
    try{
        const articulos = await articulosModels.find()
        res.json(articulos)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

export const getArticuloById = async (req, res) =>{
    try{
        const articulo = await articulosModels.findById(req.params.id)
        res.json(articulo)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}
export const searchByTag = async (req, res) =>{
    try{
        const tags = req.query.tags.split(',')
        const articulos = await articulosModels.find({tags: {$in: tags}})
        res.json(articulos)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}
export const updateArticulo = async (req, res) =>{
    try{
        const articuloActualizado = await articulosModels.
        findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json(articuloActualizado)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}
export const deleteArticulo = async (req, res) =>{
    try{
        const articuloEliminado = await articulosModels.
        findByIdAndDelete(req.params.id)
        res.json(articuloEliminado)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

// export async function listArticulos(req, res) {
//     const articulos = await articulosService.getArticulos(req.query);
//     res.json(articulos)
// }

// export async function getArticuloById(req, res) {
//     const articulo = await articulosService.getArticulo(req.params.Id);
//     if (!articulo) return res.status(404).json({message: "not found"})
//     res.json(articulo)
// }

// export async function addArticulo(req, res) {
//     const { title, type, description} = req.body;
//     if(!title || !type || !description){
//         return res.status(400).json({message: "missingg fields"})
//     }
//     const newArticulo = await articulosService.createArticulo({title, type});
//     res.status(201).json(newArticulo)
// }

// export async function updateArticulo(req, res) {
//     const updatedArticulo = await articulosService.updateArticulo(req.params.id,req.body);
//     res.json(updatedArticulo)
// }

// export async function deleteArticulo(req, res) {
//     const deletedArticulo = await articulosService.deleteArticulo(req.params.id,req.body);
//     res.json({message:"deleted"})
// }