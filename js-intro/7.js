//* String concatenation => Penggabungan string

//? 1 (+ Operator)
let greeting = "Halo";
let name = "Andrean";
let result = greeting + " " + name;
console.log(result); // Output: Halo Andrean

//? 2 (+= Operator)
let username = "real";
username += " azura1";
console.log(username); // Output: real azura1

//? 3 (Template literal `${}`)
let firstName = "Ahmad";
let lastName = "Hafidh";

let fullName = `${firstName} ${lastName}`; // Output: Ahmad Hafidh
console.log(fullName);

//! string concatenation vs arithmetic operation
console.log(1 + "2"); // '12' ~ string concat
console.log(1 + 2); // 3 (number) ~ arithmetic operation
