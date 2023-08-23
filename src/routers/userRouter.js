import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import {limitget} from '../helpers/ValidationLimit.js'
import passport from '../helpers/passportHelper.js'
import validarPermisos from '../Auth/permisosRoles.js'
import {userV1} from './v1/userRouter.js'
import { userV2, userV2_1, userV2_2 } from './v2/userRouter.js'
import {userV3} from './v3/userRouter.js'

const appUser = Routes();
const version = routesVersioning();
appUser.use(passport.initialize());
//Headers 'Authorization: Bearer ....'
appUser.use(limitget(), passport.authenticate('bearer', { session: false }), validarPermisos);
//Headers 'Accept-Version: 1.0.0' 
/**
 * ? listar los salones
 * * http://127.0.0.3:5012/usuario/salon/listar
 */
appUser.get('/salon/listar', version({
    "~1.0.0": userV1,
    "2.2.0": userV2,
    "2.2.1": userV2_1,
    "^2.2.2": userV2_2,
}));
/**
 * ? agregar nueva incidencia
 * * http://127.0.0.3:5012/usuario/usuario_reporte/agregar
 */
appUser.post('/usuario_reporte/agregar', version({
    "3.1.0": userV3
}));

export default appUser;