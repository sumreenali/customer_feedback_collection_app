module.exports = (req, res, next) => {     //next functions passes the request to the next middleware in the chain

    if(!req.user){
        return res.status(401).send({error:'You must login!'});
    }
    next();

};