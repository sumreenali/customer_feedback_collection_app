/* 
    Deals with what credentials should return
*/
if(process.env.NODE_ENV === 'production'){
    // return production keys
    module.exports = require('./prod');
}else{
    // return develpoment keys
    module.exports = require('./dev');
}