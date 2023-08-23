import { jwtVerify } from "jose";

export const validateToken = async (token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        );

        // Buscar el id del token en la colección token
        /*
        Si el token es válido, se retorna el documento de la colección token
        Si el token es válido, pero no existe en la colección token, se retorna null
        Si el token no es válido, se retorna false
        */
        return await coleccion.findOne({"_id": jwtData.payload.id});
    } catch (error) {
        console.log(error);
        return false;
    }
}