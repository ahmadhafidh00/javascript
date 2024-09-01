let num = 10;

//* if...else
if (num % 2 === 0) {
  console.log("Given number is even number.");
} else {
  // ~ (num % 2 !== 0)
  console.log("Given number is odd number.");
}

//* ternary operator (shorthand syntax untuk if...else)
let isEven =
  num % 2 === 0 // condition / expression yg dicek
    ? "Given number is even number." // jika truthy
    : "Given number is odd number."; // jika falsy
console.log(isEven);
