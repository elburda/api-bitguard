// import fs from "fs/promises";
// import path from "path";
import mongoose from "mongoose";
import { type } from "os";

const articuloSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true
    },
    tags: [String],
    description: {
    type: String
    },
    price: {
    type: Number,
    required: true
    },
    size: {
    type: String
    },
    color: {
    type: String
    },
    stock: {
    type: Number,
    default: 0
    }
})

export default mongoose.model('articulos',articuloSchema)

// const dataPath = path.resolve('data/articulos.json');

// export async function getAllArticulos() {
//     const data = await fs.readFile(dataPath, 'utf-8');
//     return JSON.parse(data);

// }

// export async function saveAllArticulos(articulos) {
//     await fs.writeFile(dataPath, JSON.stringify(articulos));

// }

