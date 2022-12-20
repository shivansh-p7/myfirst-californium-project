const {bookSchema}=require('../models/book-AuthorModel');
const{authorSchema}=require('../models/book-AuthorModel');
const bookModel = require('../models/bookModel');

// Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)
const createAuthor=async function(req,res){
    let data=req.body;
    let authorData=await authorSchema.create(data);
    res.send({message:authorData});
}




const createBook=async function(req,res){
    let data=req.body;
     let isAuthorExist=await authorSchema.findOne({author_id:data.author_id})

     if(isAuthorExist){
        let bookdata=await bookSchema.create(data);
        res.send({msg:bookdata})
     }
    
    res.send({message:"No Author find with this id"});
}


// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )
const booklist=async function(req,res){
    
    let authorData=await authorSchema.findOne({authorName:"Chetan Bhagat"});

    
    let booksByAuthor=await bookSchema.find({author_id:authorData.author_id})
    res.send({message:booksByAuthor});
}
//find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

const pricewithAuthor=async function(req,res){
    
    let bookdata=await bookSchema.findOneAndUpdate(
        {bookName:"Two states"},
        { $set: {price: 100}    },
        {new : true} );

    let authordata=await authorSchema.findOne({author_id:bookdata.author_id});

    res.send({authorName:authordata.authorName,price:bookdata.price});
};
//Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)
const rangeOfPrice=async function(req,res){
    
    let bookdata=await bookSchema.find({price:{$gte:50,$lte:100} }).select({author_id:1,_id:0});

  let authorIds=bookdata.map(x=>x.author_id)

    let authordata=await authorSchema.find({author_id:{$in:authorIds}}).select({authorName:1,_id:0});
    

    res.send({msg: authordata});
};



module.exports.createBook=createBook;
module.exports.createAuthor=createAuthor;
module.exports.booklist=booklist;
module.exports.pricewithAuthor=pricewithAuthor;
module.exports.rangeOfPrice=rangeOfPrice;


