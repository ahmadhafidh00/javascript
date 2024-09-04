/*
  * Arrow function expressions
  - Penulisan lebih singkat
  - Sering digunakan sebagai callback fn
  - Bisa digunakan sebagai IIFE (Immediately Invoked Function Expression)
*/
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
console.log(materials.map((material) => material.length)); // [ 8, 6, 7, 9 ]

const add = (a, b) => {
  return a + b;
};

// or

const substract = (a, b) => a - b;

console.log(add(5, 2)); // 7
console.log(substract(8, 2)); // 6
