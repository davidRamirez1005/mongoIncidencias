export const userV3 = (req, res, next) => {
    if(!req.rateLimit) return; 
    console.log(req.user);
    res.status(200).send('ok 3.5.0');
}