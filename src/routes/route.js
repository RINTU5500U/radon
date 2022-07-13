const express = require('express');
const router = express.Router();

let players = [{
    "name" : "manish",
    "dob" : "1/1/1995",
     "gender" : "male",
     "city" : "jalandhar",
     "sports" :["swimming"]
},
{
    "name" : "gopal",
    "dob" : "1/9/1995",
    "gender" : "male",
    "city" : "delhi",
    "sports" : ["soccer"]
},
{
    "name" : "lokesh",
    "dob" : "1/1/1990",
    "gender" : "male",
    "city" : "mumbai",
    "sports" : ["soccer"]
}];

router.post('/players', function (req, res) {
    let name = req.body.name;
    let dob = req.body.dob;
    let gender = req.body.gender;
    let city = req.body.city;
    let sports = req.body.sports
    //console.log(name,dob,gender,city,sports)
    //console.log(req.body)
    players.push(name,dob,gender,city,sports)
    res.send(players)
});

module.exports = router;
// adding this comment for no reason