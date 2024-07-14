const repeatString = function(userInput, multiplier) {
let functionOutput = "";
if (multiplier<0) {
    return "ERROR";
}
else {for (let i = 0; i < multiplier; i++) {
    functionOutput+=userInput;
}
return functionOutput;
}
}
// Do not edit below this line
module.exports = repeatString;
