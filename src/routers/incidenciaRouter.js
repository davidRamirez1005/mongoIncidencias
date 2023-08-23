import {Router} from 'express';
import dotenv from 'dotenv';
import { listar } from '../controllers/incidenciaController.js'
import validarPermisos from '../Auth/permisosRoles.js'

dotenv.config();

const appIncidencias = Router();
appIncidencias.use(validarPermisos)
/**
 * ! GET
 * ? Obtener todas los trainer alfabéticamente
 * * http://127.0.0.3:5012/trainer/trainer/listar
 */
appIncidencias.get('/trainer/listar',listar)

export default appIncidencias;