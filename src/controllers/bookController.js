const bookModel = require('../models/bookModel.js');
const authorModel = require('../models/authorModel');

const createBook = async function (req, res) {
    let data = req.body
    let saveData = await bookModel.create(data)
    res.send({msg : saveData})
};

const getBooksByChetanBhagat = async function (req, res) {
    let data = await authorModel.find({author_name : "Chetan Bhagat"}).select("author_id")
    let bookData = await bookModel.find({author_id : data[0].author_id})
    res.send({msg : bookData})
};

const authorOfBook = async function (req, res) {
    let data = await bookModel.findOneAndUpdate({name : "Two states"},{$set :{price : 100}},{new : true})
    let authorData = await authorModel.find({author_id : data.author_id}).select("author_name")
    res.send({msg : authorData,price})
};


module.exports.createBook = createBook;
module.exports.getBooksByChetanBhagat = getBooksByChetanBhagat;
module.exports.authorOfBook = authorOfBook;