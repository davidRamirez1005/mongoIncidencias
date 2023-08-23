import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/connect.js';
import {limitget} from './helpers/ValidationLimit.js'
import passport from './helpers/passportHelper.js';
import { appLogin } from './routers/login.js';
import {appUser} from './routers/user.js'

dotenv.config();
const appExpress = express();
appExpress.use(passport.initialize());
appExpress.use(express.json());
appExpress.use(limitget())

//enpoints
appExpress.use('/login', appLogin)
appExpress.use("/c", passport.authenticate('bearer', { session: false }), appUser);



// escuchar servidor
appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});

export default appExpress;