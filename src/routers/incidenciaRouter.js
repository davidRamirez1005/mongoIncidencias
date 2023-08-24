import {limitget} from '../helpers/ValidationLimit.js'
import passport from '../helpers/passportHelper.js'
import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import validarPermisos from '../Auth/permisosRoles.js'
import { adminV1, newTrainerV1 } from './v1/incidenciaRouterV1.js'
import { insertarOrdenadorEnSalonV2 } from './v2/incidenciaRouterV2.js'

const appIncidencias = Routes();
const version = routesVersioning();
appIncidencias.use(passport.initialize());
//Headers 'Authorization: Bearer ....'
appIncidencias.use(limitget(), passport.authenticate('bearer', { session: false }), validarPermisos);
//Headers 'Accept-Version: 1.0.0' 
/**
 * ? obtener los reportes de incidencias
 * * http://127.0.0.3:5012/administrador/trainer/listar
 */
appIncidencias.get('/trainer/listar',  version({
    "1.0.0": adminV1,
}))
/**
 * ? agregar un nuevo trainer
 * * http://127.0.0.3:5012/administrador/trainer/agregar
 */
appIncidencias.post('/trainer/agregar',  version({
    "1.1.1": newTrainerV1,
}))
/**
 * ? agregar nuevos pc
 * * http://127.0.0.3:5012/administrador/salon/agregar
 */
appIncidencias.post('/salon/agregar',  version({
    "^2.1.0": insertarOrdenadorEnSalonV2,
}))


export default appIncidencias;