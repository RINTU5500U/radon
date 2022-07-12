const printDate = function (){
    let currentDate = new Date()
    console.log("the current date is "+ currentDate)
}

const printMonth = function() {
    let currentDate = new Date()
    let getMonth = currentDate.getMonth()
    console.log("the current month is "+ (getMonth + 1))
}

const getBatchInfo = function(){
      console.log("plutonium,week3 day1,the topic for today is Nodejs module system")
}

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo =getBatchInfo;

