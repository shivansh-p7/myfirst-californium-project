const bookModel= require("../models/bookModel.js");
const { all } = require("../routes/route.js");



const createBookData= async function (req, res) {
    let data= req.body;
    let savedBookData= await bookModel.create(data);
    res.send({msg: savedBookData});
};
const getBooksData= async function (req, res) {
    let allBooksData= await bookModel.find();
    // let booksName=allBooksData.filter(x=>x.bookname)
    res.send({msg: allBooksData});
};

module.exports.createBookData= createBookData;
module.exports.getBooksData= getBooksData;
