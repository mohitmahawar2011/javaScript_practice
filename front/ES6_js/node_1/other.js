// var other = function(){
//     return 100;
// }

// module.exports = other;




// express_demo
module.exports = function(req,res,next){
    console.warn('Current route is ',req.originalUrl);
    next();
}