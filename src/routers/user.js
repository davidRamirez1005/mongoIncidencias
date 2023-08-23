import {limitget} from '../helpers/ValidationLimit.js'
import passport from '../helpers/passportHelper.js'
import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import {userV1, userV11} from './v1/reportarIncidencia.js'
import {userV2} from './v2/reportarIncidencia.js'
import {userV3} from './v3/reportarIncidencia.js'
import validarPermisos from '../Auth/permisosRoles.js'

const appUser = Routes();
const version = routesVersioning();
appUser.use(validarPermisos)
//Headers 'Authorization: Bearer ....'
appUser.use(limitget(), passport.authenticate('bearer', { session: false }));
//Headers 'Accept-Version: 1.0.0' 
appUser.get('/salon',  version({
    "^1.0.0": userV1,
    "~2.2.1": userV2,
    "3.5.0": userV3
}));
appUser.get('/:id', version({
    "^1.1.1": userV11,
}));
export {
    appUser
};