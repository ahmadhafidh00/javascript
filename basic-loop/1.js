/*

  *Loop / Iterasi / Perulangan
  - digunakan untuk mengulang instruksi / kumpulan instruksi (sekian kali atau sampai kondisi tertentu)
  - salah satu control flow di JavaScript

*/

/*
  *FOR => perulangan diulang hingga kondisi tertentu bernilai false

  Syntax:
  for (init; condition; step) {
    <statements>
  }

  init => deklarasi variabel / loop counter
  condition => limit / exit condition
  step => langkah loop counter (++, --, +=)

*/

console.log("Awal"); // p1

for (let i = 0; i < 3; i++) {
  // statement di dalam blok kode ({}) akan diulang sebanyak 3 kali
  console.log("Hello World!"); // p2a
} // p2

console.log("Akhir"); // p3

// p1 - p2 (p2a - p2a - p2a) - p3

/*
  *WHILE => mengeksekusi statementnya selama kondisi yang ditentukan bernilai true

  Syntax:
  while (condition){
    <statement>
  }

*/
let i = 0;

while (i < 3) {
  console.log("WHILE LOOP");
  i++;
}

/*
  *DO...WHILE
  - akan dijalankan minimal 1x, baru cek kondisi
  - pengecekan kondisi diakhir

*/
let start = 0;

do {
  console.log("Hello, World!");

  start++;
} while (start < 3);


//? PERBEDAAN WHILE DAN DO...WHILE
let index = 0;

// while
while (index < 0) { // blok kode tidak akan di-eksekusi! karena bernilai false
  console.log(".......");
  index++;
}

// do...while
do {
  console.log("do...while"); // akan dijalankan minimal 1X

  index++;
} while (index < 0);
