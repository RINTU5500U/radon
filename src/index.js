const express = require('express');
var bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default : mongoose } = require('mongoose')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://BiswajitSwain:EtERzBKu3NLVQlzp@cluster0.xf1eq.mongodb.net/RINTU5500U-DB?retryWrites=true&w=majority",{
    useNewurlParser : true
})
.then( () => console.log("MongoDB is connected"))
.catch( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

