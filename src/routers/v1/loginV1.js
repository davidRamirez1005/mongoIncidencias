export const loginV1 = (req, res, next) => {
    if(!req.rateLimit) return; 
    res.status(req.data.status).send(req.data);
}