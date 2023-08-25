import {con} from '../../config/atlas.js'
import siguienteId from '../../helpers/siguienteId.js';

/**
 * * agregar una nueva incidencia
 */
export const newIncidenciaV3 = async(req, res) =>{
    if (!req.rateLimit) return;

    try {
        const newId = await siguienteId( "usuario_reporte");

        let db = await con();
        let coleccion = db.collection('usuario_reporte');
        
        const newDocument = {
            _id: newId,
            ...req.body,
            fecha : new Date
        };
        let result = await coleccion.insertOne(newDocument);
        // console.log(result);
        res.status(201).send({ status: 201, message: 'documento creado con exito' });
    } catch (error) {
        console.log(error);
        res.status(406).send('no se ha podido crear el documento');
    }
}