const trim = function(){
    let text = ' functionUp ';
    let result = text.trim()
    console.log(result)
};

const lowerCase = function(){
    let texts  = ' FUNCTIONUP is The Best'
    console.log(texts.toLowerCase())
}

const upperCase = function(){
    let text  = ' FUNCTIONUP is The Best ever'
    console.log(text.toUpperCase())
}

module.exports.trim = trim
module.exports.lowerCase = lowerCase
module.exports.upperCase = upperCase