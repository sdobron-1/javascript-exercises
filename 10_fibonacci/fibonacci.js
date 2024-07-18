const fibonacci = function(seqNumber) {
seqNumber = Math.floor(seqNumber);
if (seqNumber < 0) {
    return "OOPS";
} else if (seqNumber === 0) {
    return seqNumber;
} else if (seqNumber === 1) {
    return seqNumber;
} else {
    return fibonacci(seqNumber - 1) + fibonacci(seqNumber - 2);
}
}


// Do not edit below this line
module.exports = fibonacci;
