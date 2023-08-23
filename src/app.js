import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/connect.js';
import appUser from './routers/userRouter.js'
import appIncidencias from './routers/incidenciaRouter.js';
import appLogin from './routers/loginRouter.js';

dotenv.config();
const appExpress = express();
appExpress.use(express.json());

//enpoints
appExpress.use('/login',appLogin )

appExpress.use("/administrador", appIncidencias);
appExpress.use("/usuario", appUser);


// escuchar servidor
appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});
