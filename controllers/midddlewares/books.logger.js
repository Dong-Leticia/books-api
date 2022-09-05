function logger(req, res, next){
console.log(`${req.method}${req.originalurl} ${req.statuscode}`);

    nexxt();
}
module.exports=logger