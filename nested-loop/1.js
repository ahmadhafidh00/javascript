/*

  Buatlah pattern kotak seperti ini, dengan baris dan kolom yang bisa kita 
  input.

  INPUT:
  - rows (baris)
  - cols (kolom)

  Jika barisnya 4 dan kolomnya 3, maka outputnya menjadi:

  ***
  ***
  ***
  ***
  
  Jika barisnya 3 dan kolomnya 5, maka outputnya menjadi:

  *****
  *****
  *****

*/
let rows = 3;
let cols = 5;

// Iterasi untuk mengontrol jumlah baris
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  // Iterasi untuk mengontrol jumlah kolom
  for (let j = 1; j <= cols; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
