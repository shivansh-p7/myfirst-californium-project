const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');
const { networkInterfaces } = require('os');


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out wjere name is stored',req.params)
    console.log('user name is',req.params.name)
    //console.log(`User requesting for profile is ${name}`)
    res.send("dummy details")
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    //req.query.size
    //req.query.brand
    



    res.send("no such shoes")
})
//1 Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.
router.get("/movies",function(req,res){
    const favMovies=["Parasite","Martians","Holiday","Taree Zammen Par",];
    res.send(favMovies)
});
//2Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return
// the movie in your array at index 1). You can define an array of movies again in your api
//3 handle edge cases
router.get("/movies/:indexNumber",function(req,res){
    const favMovies=["Parasite","Martians","Holiday","Taree Zammen Par",];
   
    res.send(favMovies[req.params.indexNumber] || "Use a valid index Number")
});
//Write another api called GET /films. Instead of an array of strings define an array of movie objects this time.
// Each movie object should have values - id, name
//return whole object in return
router.get("/films",function(req,res){
    const favFilms=[ {
        id:1,
        film:"Narnia"
    },
    {
        id:2,
        film:"HarryPotter"
    },
    {
        id:3,
        film:"Boys over Flowers"
    },
    {
        id:4,
        film:"ChillarParty"
    },
    {
        id:5,
        film:"DeadEnd"
    }]
       
    res.send(favFilms)
});
//5Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id.
// In case there is no such movie present in the array, return a suitable message in the response body.

router.get("/films/:id",function(req,res){
    const favFilms=[ {
        id:1,
        film:"Narnia"
    },
    {
        id:2,
        film:"HarryPotter"
    },
    {
        id:3,
        film:"Boys over Flowers"
    },
    {
        id:4,
        film:"ChillarParty"
    },
    {
        id:5,
        film:"DeadEnd"
    }]
       
    res.send(favFilms[req.params.id] ||"no such exist with this id")
})
module.exports = router;