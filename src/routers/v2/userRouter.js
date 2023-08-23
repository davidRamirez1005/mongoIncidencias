import {con} from '../../config/atlas.js'

/**
 * * listar de forma ascendente los salones por medio del nombre
 */
export const userV2 = async (req, res, next) => {
    if (!req.rateLimit) return; 
    let db = await con();
    let coleccion = db.collection('salon');
    let result = await coleccion.find().sort({ salon_nombre: 1 }).project({ _id: 0 }).toArray();
    res.send(result);
};
/**
 * * listar de forma descendente los salones por medio del nombre
 */
export const userV2_1 = async (req, res, next) => {
    if (!req.rateLimit) return; 
    let db = await con();
    let coleccion = db.collection('salon');
    let result = await coleccion.find().sort({ salon_nombre: -1 }).project({ _id: 0 }).toArray();
    res.send(result);
};
/**
 * * listar de forma ascendente los salones por medio del salon area
 */
export const userV2_2 = async (req, res, next) => {
    if (!req.rateLimit) return; 
    let db = await con();
    let coleccion = db.collection('salon');
    let result = await coleccion.find().sort({ salon_area: 1 }).project({ _id: 0 }).toArray();
    res.send(result);
};