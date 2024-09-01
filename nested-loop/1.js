/*
  * Nested Loop (Loop bersarang)
  -> adalah loop di dalam loop lainnya.

*/

// Outer Loop
for (let i = 0; i < 3; i++) {
  console.log(`Outer Loop: ${i}`);
  // Inner Loop
  for (let j = 0; j < 2; j++) {
    console.log(`    Inner Loop: ${j}`);
  }
}

//* break statement => menghentikan paksa loop

// for (let i = 0; i < 7; i++) {
//   console.log(i, "hello world!");
//   if (i === 2) {
//     break; // hentika paksa looping
//   }
//   console.log("ini tidak akan jalan jika i nya 2.");
// }

/* 
Penggunaan:
Misal kita punya 5 barang, terus tujuannya adalah kita harus mencari barang "sendok".
Jika barang adalah sendok maka hentikan looping nya karena udah ketemu.  
*/
// let barang = ["piring", "saos sambal", "mangkok", "sendok", "pisau"];

// for (let i = 0; i < barang.length; i++) {
//   console.log(i, barang[i]);
//   if (barang[i] === "sendok") {
//     break;
//   } else {
//     console.log("sendok belum ditemukan"); // ini tidak akan dijalankan setelah sendok ditemukan
//   }
// }

//* continue statement => hanya akan melewati 1 perulangan
//? contoh 1
// for (let i = 0; i < 3; i++) {
//   console.log("hello world!");
//   continue;
//   console.log("di bawah continue");
// }
// console.log("loop atas sudah selesai");
/*
  output:
  hello world!
  hello world!
  hello world!
  loop atas sudah selesai
*/

//? contoh 2
// for (let i = 0; i < 3; i++) {
//   console.log("hello world!");
//   if (i === 1) {
//     continue;
//   }
//   console.log("di bawah statement continue", i);
// }
/*
  output:
  hello world!
  di bawah statement continue 0
  hello world!
  hello world!
  di bawah statement continue 2
*/
