const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],

//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });


// module.exports = mongoose.model('Book', bookSchema) //users



const bookSchema = new mongoose.Schema({
     bookName: {
          type: String,
          required: true
     },
     
     
     author: String,
     tags: [String], 
     year: Number,
     isPublished: {
          type: Boolean, 
          default: false
     },
     prices: {
          indianPrice: String,
          europeanPrice: String,
          
     },
     totalPages:Number,
     sales: {
          type: Number,
          default: 0
     },
    stockAvaliable: {
     type: Boolean,
     default: false
    },

}, { timestamps: true })
module.exports = mongoose.model('Book', bookSchema)















//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
