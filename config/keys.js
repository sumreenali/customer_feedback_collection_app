/* 
    Deals with what credentials should return
*/
if(process.env.NODE_ENV === 'production'){
    // return production keys
    
}else{
    // return develpoment keys
    module.exports = require('./dev');
}