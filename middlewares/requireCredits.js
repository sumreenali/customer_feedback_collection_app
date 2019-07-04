module.exports = (req, res, next) => {     //next functions passes the request to the next middleware in the chain

    if(req.user.credits < 1){
        return res.status(403)
        .send({error:'Add more credits to enjoy the services'});
    }
    next();

};