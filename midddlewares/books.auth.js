function auth(req, res, next){
    let isVerified = true;
    if (isVerified) {
        console.log("added successfull")


        next()
    } else{
        console.log("not authorised")
        throw error;
    }
}
module.export=auth