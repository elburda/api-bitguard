import { getAllArticulos, saveAllArticulos } from "../models/articulosModels.js";
import { v4 as uuidv4 } from "uuid";

// export async function getArticulos({order}) {
//     let articulos = await getAllArticulos();

//     if(order === 'asc'){
//         articulos.sort((a, b) => a.title.localeCompare(b.title))
//     }else if(order === 'desc'){
//         articulos.sort((a, b) => b.title.localeCompare(a.title))
//     }

//     return articulos;
// }

export async function getArticulos(id) {
    let articulos = await getAllArticulos();

    return articulos.find(a => a.id === id);
}


export async function createArticulo(data) {
    let articulos = await getAllArticulos();
    const newArticulo = {id:uuidv4(),...data};
    articulos.push(newArticulo);
    await saveAllArticulos(articulos);

    return newArticulo;
}