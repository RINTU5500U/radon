const bookModel = require('../models/bookModel.js');
//const moment = require('moment')

const createBook = async function (req, res) {
    let data = req.body
    let saveData = await bookModel.create(data)
    res.send({msg : saveData})
};

const bookList = async function (req, res) {
    let allBooks = await bookModel.find().select({bookName : 1 ,authorName : 1,_id : 0})
    res.send({msg : allBooks})
};

const getBooksInYear = async function (req, res) {
    let allBooks = await bookModel.find({year : 2012})
    res.send({msg : allBooks})
};

const getParticularBooks = async function (req, res) {
    let allBooks = await bookModel.find()
    res.send({msg : allBooks})
};

const getXINRBooks = async function (req, res) {
    let allBooks = await bookModel.find({prices :{indianPrice : {$in : ["100INR","200INR","500INR"]}}})
    console.log(allBooks)
    res.send({msg : allBooks})
};

const getRandomBooks = async function (req, res) {
    let allBooks = await bookModel.find({$or:[{stockAvailable : true},{totalPages : {$gt : 500}}]})
    console.log(allBooks)
    res.send({msg : allBooks})
};

module.exports.createBook = createBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
