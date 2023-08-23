import {limitLogin} from '../helpers/ValidationLimit.js'
import {generateToken} from '../Auth/jwt/token.js'
import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import { loginV1 } from './v1/loginV1.js'

const appLogin = Routes();
const version = routesVersioning();

appLogin.use(limitLogin(), generateToken);

appLogin.post('/', version({ 
    "1.0.0": loginV1,
}));
export default appLogin