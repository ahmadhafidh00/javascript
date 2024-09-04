/*

  * Array
  - Tipe data structured dan mutable.
  - Bisa menyimpan lebih dari satu tipe data di dalamnya, namun disarankan satu jenis dan masih satu konteks.
  - Dideklarasikan menggunakan kurung siku ([]).
  - Pass by reference
  - Array memiliki index dan length.

*/

//* Membuat Array
// 1. Penamaan variable yang berisi array harus JAMAK/PLURAL.
// 2. Direkomendasikan untuk menggunakan Bahasa Inggris (English).

const fruits = ["orange", "apple", "mango", "banana"];
// console.log(fruits); // [ 'orange', 'apple', 'mango', 'banana' ]

//* Mengakses Array
//? 1 - akses elemen pertama dari array fruits
// console.log(fruits[0]); // orange

//? 2 - akses elemen terakhir secara dinamis
// console.log(fruits[fruits.length - 1]) // ~ fruits[4 - 1] ~ fruits[3] ~ banana

//* Mutasi Array - CRUD
const books = [];

//? Create => menambkan item/elemen baru ke dalam array
// 1 - push
books.push("One Piece", "Naruto", "Bleach"); // nambahin 3 item di belakang
// console.log(books); // [ 'One Piece', 'Naruto', 'Bleach' ]

// 2 - unshift
books.unshift("Learn HTML"); // nambahin buku "Learn HTML" di urutan pertama
// console.log(books); // [ 'Learn HTML', 'One Piece', 'Naruto', 'Bleach' ]

//? Read => akses sebuah element
// 1 - akses elemen kedua ("One Piece")
// console.log(books[1]); // One Piece

// 2 - akses elemen ketiga ("Naruto")
// console.log(books[2]); // Naruto

// 3 - slice
// [ 'Learn HTML', 'One Piece', 'Naruto', 'Bleach' ] => [ 'One Piece', 'Naruto' ]
const favBooks = books.slice(1, 3);
// console.log(favBook); // [ 'One Piece', 'Naruto' ]

//? Update => mengubah nilai sebuah elemen
// 1 - menambahkan item baru
const cars = ["Ayla"];
// console.log(cars[1]); // undefined
cars[1] = "Ferrari"; //! lebih baik menggunakan push
// console.log(cars[1], cars); // Ferrari [ 'Ayla', 'Ferrari' ]

// 2 - update nilai dari array elemen
const numbers = [1, 2, 3, "empat"]; // => [ 1, 2, 3, 4 ]
numbers[3] = 4;
// console.log(numbers); // [ 1, 2, 3, 4 ]

//? Delete => menghapus elemen
// 1 - pop
numbers.pop();
// console.log(numbers); // [ 1, 2, 3 ] ~ menghapus elemen terakhir

// 2 - shift
numbers.shift();
// console.log(numbers) // [ 2, 3 ] ~ menghapus elemen pertama
