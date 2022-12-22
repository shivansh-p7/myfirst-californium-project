//const authorModel = require("../models/authorModel")
const authorModel = require("../models/authorModel");
const bookModel= require("../models/bookModel");
const publisherModel = require("../models/publisherModel");

const createBook= async function (req, res) {
    let book = req.body
    let {author_id,publisher_id}=book;
  
    if(!author_id || !publisher_id){
        return res.send({msg:"author_id and publisher_id both are required"})
    }
const authorIds=await authorModel.findOne({_id:author_id})
const publisherIds=await publisherModel.findOne({_id: publisher_id})
if(!authorIds || !publisherIds){
    return res.send({msg:"Either author or publisher is not present"})
}
   
    
let bookCreated = await bookModel.create(book)
     res.send({data:bookCreated})  
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})

}

const updatebooks=async function(req,res){
  
    let publisherDetailes= await publisherModel.find({name:{$in:["Peguin","Harpen Collins"]}})
let publisherIds=publisherDetailes.map(x=>x._id)
let updateStatus= await bookModel.updateMany({publisher_id:{$in:publisherIds}},{$set:{isHardcover:true}})
res.send({data: updateStatus})
}
 
const updateprice=async function(req,res){
    let authorDetailes= await authorModel.find({rating:{$gt:3.5}})
    let authorIds=authorDetailes.map(x=>x._id)
    let updateStatus= await bookModel.updateMany({author_id:{$in:authorIds}},{$inc:{price:10}})
res.send({data: updateStatus})
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updatebooks = updatebooks
module.exports.updateprice = updateprice


