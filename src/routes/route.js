const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authorController = require('../controllers/authorController')

router.post('/createBook',bookController.createBook);
router.post('/createAuthor',authorController.createAuthor);
router.get('/getBooksByChetanBhagat',bookController.getBooksByChetanBhagat);
router.get('/authorOfBook',bookController.authorOfBook);

module.exports = router;
// adding this comment for no reason