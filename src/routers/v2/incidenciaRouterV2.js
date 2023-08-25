import {con} from '../../config/atlas.js'
// import siguienteId from '../../helpers/siguienteId.js';
import { validationResult } from 'express-validator';
import {validationPc} from '../../validator/validaciones.js'
/**
 *  * agregar un pc
 */
let area = "training"
let salonName = "apolo"
export const insertarOrdenadorEnSalonV2 = async (req, res) => {
    if (!req.rateLimit) return;

    try {

        await Promise.all(validationPc.map(rule => rule.run(req)));

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        let db = await con();
        let coleccion = db.collection('salon');
        // Buscar el salón específico
        const salon = await coleccion.findOne({
            salon_area: area,
            salon_nombre: salonName
        });
        if (!salon) {
            console.log('No se encontró el salón especificado');
            return;
        }
        // Agregar el nuevo ordenador a la matriz de ordenadores
        const ordenadores = [...salon.ordenadores, req.body];
        // Actualizar el documento del salón con la nueva matriz de ordenadores
        const result = await coleccion.updateOne(
            { _id: salon._id },
            { $set: { ordenadores: ordenadores } }
        );

        if (result.modifiedCount === 1) {
            res.status(201).send({ status: 201, message: 'documento creado con exito' });
        } else {
            console.log('No se pudo insertar el ordenador en el salón');
        }
    } catch (error) {
        console.log(error);
    }
};

