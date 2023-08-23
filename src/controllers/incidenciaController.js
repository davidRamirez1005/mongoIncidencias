import {con} from '../config/atlas.js'

const listar = async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('trainer');
    let result = await coleccion.find().project({_id : 0}).toArray();
    res.send(result)
}
// const listarSalon = async(req, res) =>{
//     if(!req.rateLimit) return;

//     let db = await con();
//     let coleccion = db.collection('salon');
//     let result = await coleccion.find().project({_id : 0}).toArray();
//     res.send(result)
// }
export { listar }