const books = require("../books")


//get allbooks
const getBooks= (req, res)=> {
    res.status(200).json(books);
}

module.exports = {getBooks}