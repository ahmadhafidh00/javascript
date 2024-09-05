/**
 *
 * ================
 * Even and Reverse
 * ================
 *
 * Write a function that has one parameter as an array of numbers.
 * Filter all even number inside array and insert it into new array.
 * And then reverse all even numbers inside new array.
 * The function will return the new array that contains reversed even numbers.
 */

function reverseEvenNumber(numbers) {
  const newArr = [];

  //* v1 - filter && iterasiMaju && unshift (efek reverse)
  // for (let i = 0; i < numbers.length; i++) {
  //   let num = numbers[i];
  //   if (num % 2 === 0) {
  //     newArr.unshift(num);
  //   }
  // }

  //* v2 - filter && iterasiMundur && push
  for (let i = numbers.length - 1; i >= 0; i--) {
    let reversedNum = numbers[i];
    if (reversedNum % 2 === 0) {
      newArr.push(reversedNum);
    }
  }

  return newArr;
}

console.log(reverseEvenNumber([1, 2, 3, 4, 5])); // [ 4, 2 ]
console.log(reverseEvenNumber([10, 9, 8, 7, 6, 5, 4])); // [ 4, 6, 8, 10 ]
