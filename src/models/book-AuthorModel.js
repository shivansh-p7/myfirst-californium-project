const { MongoExpiredSessionError } = require("mongodb");
const mongoose=require("mongoose");

const authorSchema= new mongoose.Schema({
     authorName:String,
     author_id:{
        type:String,
        required:true,

     },
     age:Number,
     address: mongoose.Schema.Types.Mixed


});


const bookSchema= new mongoose.Schema({
    bookName:String,
    author_id:{
       type:String,
       required:true,

    },
    price:Number,
    ratings: Number


});
const book=mongoose.model("book2",bookSchema);
const author=mongoose.model("author",authorSchema);

module.exports={bookSchema:book,authorSchema:author}


