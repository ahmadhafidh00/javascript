/*

  Buatlah pattern kotak seperti ini, dengan lebar dan panjang yang bisa kita input.

  input:
  - row (lebar)
  - col (panjang)

  Jika lebarnya 4 dan panjangnya 3, maka outputnya menjadi:

  output:
  ***
  ***
  ***
  ***
  
  Jika lebarnya 3 dan panjangnya 5, maka outputnya menjadi:

  output:
  *****
  *****
  *****

*/
let row = 3;
let col = 5;

for (let i = 1; i <= row; i++) {
  let perBaris = "";
  for (let j = 1; j <= col; j++) {
    perBaris += "*";
  }
  console.log(perBaris);
}
