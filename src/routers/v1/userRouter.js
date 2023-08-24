import {con} from '../../config/atlas.js'
// import siguienteId from '../helpers/siguienteId.js';


/**
 * * listar los usuarios
 */
export const userV1 = async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('usuario_reporte');
    let result = await coleccion.find().project({_id : 0}).toArray();
    res.send(result)
}

