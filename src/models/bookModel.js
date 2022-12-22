const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
         
        type: ObjectId,
        ref: "newAuthors"
     
    }, 
    price: Number,
    rating: Number,
publisher_id:{
     type: ObjectId,
     ref:"newPublisher"
},
isHardcover:{
     type:Boolean,
     default:false
}
}, { timestamps: true });


module.exports = mongoose.model('newBooks', bookSchema)
