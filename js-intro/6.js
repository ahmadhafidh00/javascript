//* Remainder (%) => sisa bagi
// Syntax: dividend % devisor

//? Remainder dengan positif dividend
console.log(11 % 3); // 3 * 3 = 9 -> 11 - 9 = 2
console.log(5 % -2); // -2 * -2 = 4 -> 5 - 4 = 1
console.log(1 % 2); // 2 * 0 = 0 -> 1 - 0 = 1 
console.log(2 % 3); // 2, jika (dividend < devisor) maka hasilnya dividend itu sendiri
console.log(5.5 % 2); // 2 * 2 = 4 -> 5.5 - 4 = 1.5

//? Remainder dengan negatif dividend
console.log(-5 % 3); // 3 * -1 = -3 -> -5 -(-3) = -2
console.log(-4 % 2); // 2 * -2 = -4 -> -4 -(-4) = -0
console.log(-1 % 2); // -1

//? Remainder dengan NaN
console.log(NaN % NaN); // NaN
console.log(NaN % 5); // NaN

//? Remainder dengan Infinity
console.log(Infinity % 2); // NaN
console.log(Infinity % 0); // NaN
console.log(-Infinity % 0); // NaN
console.log(2 % Infinity); // 2
console.log(0 % Infinity); // 0





