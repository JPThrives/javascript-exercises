const add = function(num1,num2) {
  return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(sumOfNo) {
  let totalSum = 0;
	for(let i = 0; i < sumOfNo.length; i++) {
    totalSum += sumOfNo[i];
  }
  return totalSum;
};

const multiply = function(mulNo) {
  let totalMul = 1;
  for(let i = 0; i < mulNo.length; i++) {
    totalMul *= mulNo[i];
  }
  return totalMul;
};

const power = function(num,pow) {
	let result = 1;
  for(let i = 0; i < pow; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
    let fact = 1;
    for (let i = 2; i <= num; i++) {
      fact *= i;
    }
    return fact;
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
