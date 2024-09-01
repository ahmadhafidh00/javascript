/* 
  Primitive Data Types
  - Hanya dapat menyimpan satu nilai pada satu waktu
  - tidak dapat diubah menggunakan cara yang sama seperti tipe data non-primitif
  - Immutable
*/

//* Number => tipe data angka (termasuk angka desimal dan negatif sekalipun)
console.log(Infinity);
console.log(0);
console.log(100);
console.log(3.14);
console.log(-22);
console.log(-Infinity);

//* Boolean => tipe data yang hanya memiliki dua kemungkinan nilai (true or false)
// => Biasanya digunakan didalam conditional.
console.log(true);
console.log(false);
 
//* String => tipe data karakter yang diapit kutip
console.log('ini adalah string yang diapit kutip tunggal');
console.log("ini adalah string yang diapit kutip ganda");
console.log(`template literal`);

//* Undefined => tidak terdefinisi
//? contoh 1 - sebuah deklarasi variabel tanpa inisialisasi nilai
let a;
console.log(a); // Output: undefined

//? contoh 2 - fungsi yang tidak mengembalikan nilai
function sum(num1, num2) {
  let result = num1 + num2;
}
console.log(sum(5, 6)); // Output: undefined, console.log mengharapkan return value

//* null => nilai kosong (menunjukkan ketiadaan nilai yang disengaja)
let b = null;
console.log(b); // Output: null