const removeFromArray = function(inputArray, ...args) {
    return inputArray.filter(val => !args.includes(val))
    }


// Do not edit below this line
module.exports = removeFromArray;
