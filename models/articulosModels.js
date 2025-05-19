import fs from "fs/promises"
import path from "path"

const dataPath = path.resolve('data/articulos.json');

export async function getAllArticulos() {
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data);

}

export async function saveAllArticulos(articulos) {
    await fs.writeFile(dataPath, JSON.stringify(articulos));

}