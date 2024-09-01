//? 1
/*
  output:
  *
  **
  ***
  ****
  *****
*/
let row = 5;
for (let i = 1; i <= row; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

//? 2
/*
  output:
  *****
  ****
  ***
  **
  *
*/
let row2 = 5;
for (let i = row2; i >= 1; i--) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    // i = 5, j juga akan diulang sebanyak 5x
    line += "*";
  }
  console.log(line);
}

//? 3
let strAngka = "263";
/*
  output:
  **
  ******
  ***
*/
for (let i = 0; i < strAngka.length; i++) {
  let perBaris = "";

  let col = Number(strAngka[i]); // 2, 6, 3
  for (let j = 0; j < col; j++) {
    perBaris += "*";
  }
  console.log(perBaris);
}
