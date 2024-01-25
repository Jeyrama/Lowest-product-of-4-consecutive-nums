/*
Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.
This should only work if the number has 4 digits or more. If not, return "Number is too small".

Example:
  lowestProduct("123456789") --> 24 (1x2x3x4)
  lowestProduct("35") --> "Number is too small"
*/


// Solution

function lowestProduct(input) {
  let arr = input.split``.map((x,i,a) => a.length - i < 4 ? Infinity : x * a[i+1] * a[i+2] * a[i+3]);
  return input < 1000 ? "Number is too small" : Math.min(...arr);
}