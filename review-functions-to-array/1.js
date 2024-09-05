/**
 *
 * ========
 * FizzBuzz
 * ========
 *
 * Write a function that prints each number from 1 to 100 on a new line.
 * For each multiple of 3, Print "Fizz" instead of number.
 * For each multiple of 5, Print "Buzz" instead of number.
 * For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of number.
 */

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log(i, "FizzBuzz");
    } else if (i % 5 === 0) {
      console.log(i, "Buzz");
    } else if (i % 3 === 0) {
      console.log(i, "Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
