const express = require('express');
//const { welcomeFunction } = require('../logger/logger');
const router = express.Router();
const welFun=require('../logger/logger');
const impDate=require('../util/helper');
const impMonth=require('../util/helper');
const printFun=require('../util/helper');
const trim=require('../validator/formatter');
const toUpperCase=require('../validator/formatter');
const toLowerCase=require('../validator/formatter');
const lodash=require('lodash');




router.get('/test-me', function (req, res) {
    //1
    welFun.welcomeFunction("shivansh");
    console.log(`Date is ${impDate.givesDate}/${impMonth.givesMonth}`);
    printFun.printsText();
    //2
    trim.trims("     funtionUp     ");
    toLowerCase.changeToLowerCase("BACKSPACE KEY");
    toUpperCase.changeToUpperCase("enter key");
    //3
    const allMonths=["January","February","March","April","May","June","July","August","September","October","November","December"];
    console.log(lodash.chunk(allMonths,3));
    //4
    const oddNumbers=[1,3,5,7,9,11,13,15,17,19];
    console.log(lodash.tail(oddNumbers,1));
    //5
    const arr1=[1,2,3,4,];
    const arr2=[3,4,5,6];
    const arr3=[5,6,7,8];
    const arr4=[7,8,9,10];
    const arr5=[9,10,11,12];
    console.log(lodash.union(arr1,arr2,arr3,arr4,arr5));
    //6
    console.log(lodash.fromPairs([ ["horror","The shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]
]))



    res.send('This is my first ever api!');
});

module.exports = router;