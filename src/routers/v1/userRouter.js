import {con} from '../../config/atlas.js'
// import siguienteId from '../helpers/siguienteId.js';


/**
 * * listar los salones
 */
export const userV1 = async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('salon');
    let result = await coleccion.find().project({_id : 0}).toArray();
    res.send(result)
}

