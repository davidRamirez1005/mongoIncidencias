import {con} from '../../config/atlas.js'
import siguienteId from '../../helpers/siguienteId.js';

/**
 * * obtener los reportes de incidencias
 */
export const adminV1 = async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('usuario_reporte');
    let result = await coleccion.find().project({_id : 0}).toArray();
    res.send(result)
}

/**
 * * asignar nuevo trainer
 */
export const newTrainerV1 = async(req, res) =>{
    if (!req.rateLimit) return;

    try {
        const newId = await siguienteId( "trainer");

        let db = await con();
        let coleccion = db.collection('trainer');
        
        const newDocument = {
            _id: newId,
            ...req.body
        };
        let result = await coleccion.insertOne(newDocument);
        // console.log(result);
        res.status(201).send({ status: 201, message: 'documento creado con exito' });
    } catch (error) {
        console.log(error);
        res.status(406).send('no se ha podido crear el documento');
    }
}
