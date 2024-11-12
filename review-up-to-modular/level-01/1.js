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

// Mutasi (memodifikasi array elements)
function toggleArr(arr) {
  // Iterasi untuk setiap baris dalam array 2D
  for (let i = 0; i < arr.length; i++) {
    const barisArr = arr[i]; // Ambil baris array saat ini

    // Iterasi untuk setiap elemen dalam baris array
    for (let j = 0; j < barisArr.length; j++) {
      // Jika elemen saat ini bernilai 0, ubah menjadi 1
      if (barisArr[j] === 0) {
        barisArr[j] = 1;
      } else {
        barisArr[j] = 0; // Jika elemen saat ini bernilai selain 0 (yaitu 1), ubah menjadi 0
      }
    }
  }

  return arr;
}

console.log(
  toggleArr([
    [0, 0, 1, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 1],
  ])
);
