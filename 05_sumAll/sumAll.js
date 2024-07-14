const sumAll = function(int1,int2) {
    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    } else if (typeof int1 != 'number' || typeof int2 != 'number') {
        return "ERROR";
    } else if (int2 > int1) {
        let sum = 0;
        for (i = int1; i<=int2; i++) {
        sum = sum+=i;
        }
        return sum;
    } else if (int1 > int2) {
        let sum = 0;
        for (i = int1; i>=int2; i--) {
        sum = sum+=i; 
    }
        return sum;
    }
}

// Do not edit below this line
module.exports = sumAll;
