const { Router } = Require("express")
const { getbooks } = require("../controllers/bookscontrollers")

const route =Router()

Router.route("/books").get(getBooks);

module.exports=router