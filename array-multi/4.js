let kalimat = ["saya suka makan", "saya suka ngoding", "saya suka main game"];
/* Expected Output:
[
  [ 'saya', 'suka', 'makan' ],
  [ 'saya', 'suka', 'ngoding' ],
  [ 'saya', 'suka', 'main', 'game' ]
]
*/

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

console.log(splitEverySentence(kalimat));
