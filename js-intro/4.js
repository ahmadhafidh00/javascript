/*
  *Variabel
  - merupakan tampungan untuk menyimpan nilai dari sebuah data.
  - data memiliki 3 hal: value, tipe data, dan built-in boolean.

  *LET dan CONST:
  - let dan const merupakan globally dan block scope variable.
  - let bisa dideklarasikan tanpa inisialisasi (memiliki nilai undefined).
  - const HARUS dideklarasikan dan diinisialisasi nilainya.
  - nilai dari variabel yang dideklarasikan menggunakan let dapat diupdate (re-assign value), sedangkan const tidak.
  - baik let dan const tidak dapat dideklarasikan ulang (re-declared). Nama variabel harus unik

  *Naming convention
  1. Nama dari sebuah variabel harus deskriptif
  2. menggunakan camelCase (huruf besar untuk setiap kata, kecuali yang pertama)
  3. Tidak boleh punya nama variable yang sama (No Duplicate Declaration)
  4. Tidak boleh dimulai dengan angka

*/

//? scope
let greeting = "say Hi"; // globally scope variable: bisa digunakan dimanapun
let times = 4;

if (times > 3) {
  let hello = "say Hello instead"; // block scope variable: hanya bisa diakses didalam {}
  console.log(hello); // "say Hello instead"
}
//! console.log(hello); // hello is not defined

//? update value
//* LET
let number = 7;
// Nilai number akan menjadi 7
number = 9;
// Nilai number akan menjadi 9
number = 10;
// Nilai number akan menjadi 10

const nilaiMatematika = 80;
//! nilaiMatematika = 100; // TypeError: Assignment to constant variable.

//? hoisting
console.log(greeter); // undefined
var greeter = "say hello";

//! console.log(hello); // ReferenceError: Cannot access 'hello' before initialization
let hello = "say hello"; // hoisting const sama seperti let
