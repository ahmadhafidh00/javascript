/*

  Buatlah pattern kotak seperti ini, dengan lebar dan panjang yang bisa kita input.

  input:
  - row (lebar)
  - col (panjang)

  Output:
  *****
  *   *
  *   *
  *****

*/
let row = 4;
let col = 5;

//* v2
for (let i = 1; i <= row; i++) {
  let line = '';
  for (let j = 1; j <= col; j++) {
    if (i === 1 || i === row || j === 1 || j === col) {
      line += '*';
    } else {
      line += ' ';
    }
  }
  console.log(line);
}

//* v1
for (let i = 1; i <= row; i++) {
  let line = '';

  // cek baris jika atap dan lantai
  if (i === 1 || i === row) {
    for (let j = 1; j <= col; j++) {
      line += '*';
    }
  } else {
    for (let j = 1; j <= col; j++) {
      // cek jika col kiri dan kanan
      if (j === 1 || j === col) {
        line += '*';
      } else {
        line += ' ';
      }
    }
  }
  
  console.log(line);
}