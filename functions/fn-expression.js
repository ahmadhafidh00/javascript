/*
  * Function expression
  - Tidak bisa diakses/dipanggil sebelum fungsi dideklarasikan (berbeda dengan traditional function)
  - Biasanya nama fungsi tidak dipakai (anonymous function)
  - Bisa digunakan sebagai callback fn
  - Bisa digunakan sebagai IIFE (Immediately Invoked Function Expression)
*/
const add = function (a, b) {
  return a + b;
};

const substract = function (a, b) {
  return a - b;
};

console.log(add(3, 5)); // 8
console.log(substract(10, 5)); // 5

//? IIFE
(function () {
  console.log("Code runs!");
})();
// Code runs!