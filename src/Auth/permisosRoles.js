const validarPermisos = (req, res, next) => {
    //Comprueba que el usuario este accediendo a la url permitida para su rol
    console.log({"roles":req.user.rol_access, "url":req.url.split('/')[1]});
    const validacion = req.user.rol_access.includes(req.url.split('/')[1])
    if (validacion) {
        next();
    }else {
        res.status(401).send({ status: 406, message: "Este Usuario no tiene permisos sobre este recurso"})
    }
  }    
  
  export default validarPermisos
  