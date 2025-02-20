/* 
  Diberikan sebuah array yang berisi beberapa kalimat, tugas kalian adalah
  mengubah setiap kalimat menjadi array dan menggabungkan semua array-array 
  tersebut menjadi satu array multidimensi!
*/
let kalimat = ["saya suka makan", "saya suka ngoding", "saya suka main game"];

function splitEverySentence(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let perEl = arr[i]; // 'saya suka makan', 'saya suka ngoding', dst

    let innerArray = []; // Buatin array sebanyak jumlah elemen arr
    let temp = "";
    //split
    for (let j = 0; j <= perEl.length; j++) {
      let char = perEl[j]; // s, a, y, a, (spasi), s, u, dst

      if (char === " " || char === undefined) {
        innerArray.push(temp);
        temp = "";
      } else {
        temp += char;
      }
    }
    // console.log(innerArray); // [ 'saya', 'suka', 'makan' ], [ 'saya', 'suka', 'ngoding' ], dst

    result.push(innerArray);
  }

  return result;
}

// others
function splitEverySentence(arr) {
  const array2D = [];
  for (let i = 0; i < arr.length; i++) {
    const subArray = arr[i].split(" "); // split setiap kalimat berdasarkan delimiter (spasi) -> return array of word
    array2D.push(subArray);
  }
  return array2D;
}

console.log(splitEverySentence(kalimat));
/* Expected Output:
[
  [ 'saya', 'suka', 'makan' ],
  [ 'saya', 'suka', 'ngoding' ],
  [ 'saya', 'suka', 'main', 'game' ]
]
*/
