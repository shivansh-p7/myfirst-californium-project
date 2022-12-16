const mongoose = require('mongoose');


const bookschema= new mongoose.Schema({
    bookname: {type: String,
         required: true},
    authorname: {type: String,
         required: true},
    category: {type: String,
         required: true},
    year:{type: Number,
         required: true}
},{timestamps:true});


module.exports=mongoose.model('book', bookschema)