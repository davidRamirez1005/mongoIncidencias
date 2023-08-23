import {con} from '../../config/atlas.js'
// import siguienteId from '../helpers/siguienteId.js';

export const userV1 = async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('salon');
    let result = await coleccion.find().project({_id : 0}).toArray();
    res.send(result)
}
export const userV11 = async (req, res, next) => {
    if(!req.rateLimit) return; 
    let db = await con();
    let coleccion = db.collection('salon');
    let result = await coleccion.find().sort({ salon_nombre: 0 }).project({_id : 0}).toArray();
    res.send(result)
}
