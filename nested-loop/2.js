/*

  Buatlah pattern kotak seperti ini, dengan baris dan kolom yang bisa kita 
  input.

  INPUT:
  - rows (baris)
  - cols (kolom)

  OUTPUT:

  *****
  *   *
  *   *
  *****

*/
let rows = 4;
let cols = 5;

// Iterasi untuk mengontrol jumlah baris
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  // Iterasi untuk mengontrol jumlah kolom
  for (let j = 1; j <= cols; j++) {
    // Jika iterasi berada di baris pertama, baris terakhir, kolom pertama, atau kolom terakhir
    if (i === 1 || i === rows || j === 1 || j === cols) {
      pattern += "*"; // maka tambahkan bintang
    } else {
      pattern += " "; // jika tidak tambahkan spasi
    }
  }
  console.log(pattern);
}
