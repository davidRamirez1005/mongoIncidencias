import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/connect.js';
import {limitget} from './helpers/ValidationLimit.js'
import passport from './helpers/passportHelper.js';
// import { appLogin } from './routers/login.js';
import { generateToken } from './Auth/jwt/token.js';
import appUser from './routers/userRouter.js'
import appIncidencias from './routers/incidenciaRouter.js';

dotenv.config();
const appExpress = express();
appExpress.use(passport.initialize());
appExpress.use(express.json());
appExpress.use(limitget())

//enpoints
appExpress.use('/login', generateToken)

appExpress.use("/administrador", passport.authenticate('bearer', { session: false }), appIncidencias);
appExpress.use("/usuario", passport.authenticate('bearer', { session: false }), appUser);



// escuchar servidor
appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});

export default appExpress;