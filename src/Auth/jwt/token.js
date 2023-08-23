import {con} from '../../config/atlas.js'
import { SignJWT } from "jose";
let db = await con();
let coleccion = db.collection('roles');

const generateToken = async(req, res) => {
    //Validacion de las credenciales de login
    const {ROL_EMAIL,ROL_PASSWORD} = req.body;
    const result = await coleccion.findOne({email_registro:ROL_EMAIL, password_registro: ROL_PASSWORD })
    if(!result){return res.send({"status": 404, "message":"Usuario no encontrado en la base de datos"})}
    const datauser = {
        "id":result._id,
    }
    console.log({"datauser": datauser});
    //crecion del token
    const encoder = new TextEncoder();
    const jwtConstructor = await new SignJWT(datauser)
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_SECRET));
    res.send({"Token":jwtConstructor});
}


export {
    generateToken,
}