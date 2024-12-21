//? 1
/*
  1
  2 2
  3 3 3
  4 4 4 4
*/
let rows1 = 4;
for (let i = 1; i <= rows1; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += i + " ";
  }
  console.log(line);
}

//? 2
/*
  1
  1 2
  1 2 3
  1 2 3 4
*/
let rows2 = 4;
for (let i = 1; i <= rows2; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j + " ";
  }
  console.log(line);
}

//? 3
/*
  1
  2 3
  4 5 6
  7 8 9 10
*/
let rows3 = 4;
let count = 1;

for (let i = 1; i <= rows3; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += count + " ";
    count++;
  }
  console.log(line.trim());
}

//? 4
/*
  1
  121
  12321
  1234321
  123454321
*/
let rows4 = 5;
for (let i = 1; i <= rows4; i++) {
  line = "";
  for (let j = 1; j <= i; j++) {
    line += j;
  }
  // reverse col
  for (let j = i - 1; j >= 1; j--) {
    // console.log(i, j);
    line += j;
  }
  console.log(line);
}
