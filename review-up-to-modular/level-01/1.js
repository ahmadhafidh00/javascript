/*

  Reverse Toggle

  Buatlah sebuah fungsi untuk membalik nilai 0 menjadi 1 dan 1 menjadi 0 dalam sebuah array multidimensi.

  let arr = [
    [0, 0, 1, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 1]
  ]

  Output: 
  [
    [1, 1, 0, 1],
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 0]
  ]

*/

// @params arr - Array dua dimensi yang berisi angka 0 dan 1
function toggleArr(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const barisArr = arr[i];
    const innerArr = [];

    for (let j = 0; j < barisArr.length; j++) {
      // Jika elemen saat ini adalah 0, ganti dengan 1, jika 1 ganti dengan 0
      if (barisArr[j] === 0) {
        innerArr.push(1);
      } else {
        innerArr.push(0);
      }
    }
    result.push(innerArr);
  }

  return result;
}

console.log(
  toggleArr([
    [0, 0, 1, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 1],
  ])
);
