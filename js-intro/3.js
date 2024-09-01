/*
  *String length property
  - mengembalikan panjang / jumlah karakter sebuah string.
  - properti length dari empty string adalah 0.

  Syntax:
  string.length
*/

console.log("".length); // 0
console.log("JavaScript".length); // 10
console.log("  ".length); // 2

//? 1- validasi input sederhana
let name = "";
let password = "admin#1234";

if (name.trim().length === 0) { // jika name merupakan empty string atau karakter spasi saja
  console.log("Nama tidak boleh kosong!");
  console.log({ name });
}

if (password.trim().length < 8) {
  console.log("At least 8 characters length");
}

//? 2- akses karakter dalam string
let kalimat = "Javascript is fun";

// Akses karakter terakhir (dinamis) ~ n
console.log(kalimat[kalimat.length - 1]);


/*
  *String Indexing
  - Setiap karakter dalam string memiliki nomor indeks, dimulai dengan 0.

  Syntax:
  string[index]

*/

//? Mengakses karakter
let text = "How are you?";

// 1- Akses karakter "H"
console.log(text[0]);

// 2- Akses karakter "o" pertama (dinamis)
console.log(text[text.indexOf("o")]); // ~ text[1] ~ o

// 3- Akses karakter terakhir ("?")
console.log(text[text.length - 1]);
