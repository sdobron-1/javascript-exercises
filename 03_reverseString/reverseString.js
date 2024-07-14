const reverseString = function(userInput) {
let array = Array.from(userInput);
array = array.reverse();
return array.join("");
};

// Do not edit below this line
module.exports = reverseString;
