const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(array1) {
	let arraySum = 0;
  for (let i=0; i<array1.length;i++) {
    arraySum += array1[i];}
    return arraySum;
  };

const multiply = function(array1) {
  let arrayProduct = 1;
  for (let i=0; i<array1.length;i++) {
    arrayProduct *= array1[i];}
    return arrayProduct;
};

const power = function(num,power) {
	return Math.pow(num,power);
};

const factorial = function(num) {
	let factorialSolution = 1;
  for (let i=num; i>0;i--) {
    factorialSolution*=i
  }
  return factorialSolution;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
