/*
  * Array Multidimensi
  -> Array yang berisi array lain sebagai elemennya (Array of Arrays)

*/
const activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];

console.table(activities);
console.log(activities[0][1]); // 9

/*
  ? Kenapa Menggunakan Array Multi?

  Misalkan kita punya dus, yang didalamnya terdapat beberapa box donut.
  Bagaimana caranya memasukkan box-box donut tersebut ke dalam kardus?

*/
const box1 = ["Mint", "Choco", "Tiramisu"];
const box2 = ["Cheese", "Choco", "Avocado"];
const box3 = ["Red Velvet", "Choco", "Mint"];
const box4 = ["Mint", "Wasabi", "Tiramisu"];

//! Tanpa Array Multi
// function manipulateDonut(a, b, c, d) {
//   let result = [];
//   result.push(a, b, c, d);
//   return result;
// }
// console.log(manipulateDonut(box1, box2, box3, box4));

//* Array Multi
const dusDonut = [box1, box2, box3, box4];

function manipulateDonut(xlBox) {
  return xlBox;
}
console.log(manipulateDonut(dusDonut));
