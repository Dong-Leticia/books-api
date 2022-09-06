const express= require("express");
const dotenv = require("dotenv");
const router = require("./routes/booksRoute");
const logger = require("./midddlewares/books.logger");
const books = require("./books");

dotenv.config();
const app = express ();

//middleware
app.use(logger);
app.use(express.json());

//route
app.get("/",(req,res) => {
    res.send("<h1>welcome to our library stockpile</h1>")
})
//get all books
app.get("/books", (req,res)=>{
    res.json(books);
});


const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
     console.log(`server is running on ${PORT}`)
})