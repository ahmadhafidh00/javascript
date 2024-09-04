let str = "Kosasih-36"; // output: [ 'Kosasih', '36' ]
// your code here

//* v1
// let arr = [];
// let temp = "";

// for (let i = 0; i < str.length; i++) {
//   let perChar = str[i]; // K, o, s, a, s, i, h, -, dst

//   if (perChar === '-') { // jika perChar adalah delimiter/separator
//     arr.push(temp);
//     temp = "";
//   } else if (i === str.length - 1) { // jika i adalah index terakhir
//     temp += perChar;
//     arr.push(temp);
//   } else { // jika perChar adalah karakter biasa
//     temp += perChar;
//   }
// }
// console.log(arr);

//* v2
let arr = [];
let temp = "";

for (let i = 0; i <= str.length; i++) {
  let perChar = str[i]; // K, o, s, a, ..., undefined

  if (perChar === "-" || perChar === undefined) {
    arr.push(temp);
    temp = "";
  } else {
    temp += perChar;
  }
}
console.log(arr);
