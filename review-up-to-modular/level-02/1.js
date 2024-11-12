/*

  Highest Global Minimum

  Highest Global Minimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of numbers.
  Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
  Function akan me-return salah satu dari angka minimum yang paling besar.
  
  contoh:
  highestGlobalMinimum([1, 1, 1], [8, 15, 17, 9])
  firstArr = [1, 1, 1]
  secondArr = [8, 15, 17, 9]

  nilai minimum dari firstArr = 1
  nilai minimum dari secondArr = 8

  karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
  
  snippet:
  function highestGlobalMinimum(firstArr, secondArr) {
    // code anda disini
  }

  console.log(highestGlobalMinimum([1, 1, 1], [8, 15, 17, 9])) // 8
  console.log(highestGlobalMinimum([4, 8, 9, 12], [33, 88, 99, 11])) // 11
  console.log(highestGlobalMinimum([1, 2, 5, 2, 2], [67, 45, 55])) // 45
  console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2], [6, 5, 13, 23])) // 5
  console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])) // 5

*/


/**
 * Fungsi ini mengembalikan nilai minimum dari sebuah array.
 * @param {number[]} arr - Array yang berisi angka-angka.
 * @returns {number} - Nilai minimum dalam array.
 */
function getMinimum(arr) {
  // Inisialisasi nilai minimum dengan nilai tak terhingga untuk memastikan nilai pertama yang ditemukan lebih kecil dari ini.
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    // Jika elemen saat ini lebih kecil dari nilai min yang sudah ada, maka perbarui min dengan elemen ini.
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}


/**
 * Fungsi ini mencari nilai minimum dari dua array dan mengembalikan nilai minimum tertinggi di antara keduanya.
 * Proses ini dilakukan dengan menemukan nilai minimum masing-masing array dan kemudian memilih yang lebih besar dari keduanya.
 * @param {number[]} firstArr - Array pertama untuk dibandingkan.
 * @param {number[]} secondArr - Array kedua untuk dibandingkan.
 * @returns {number} - Nilai minimum tertinggi di antara dua array.
 */
function highestGlobalMinimum(firstArr, secondArr) {
  // Inisialisasi variabel tertinggi dengan nilai negatif tak terhingga untuk memastikan pembandingan pertama lebih besar darinya.
  let highest = -Infinity;

  // Mencari nilai minimum dalam array pertama
  const firstMin = getMinimum(firstArr);

  // Mencari nilai minimum dalam array kedua
  const secondMin = getMinimum(secondArr);

  if (firstMin > highest) {
    highest = firstMin;
  }
  if (secondMin > highest) {
    highest = secondMin;
  }

  return highest;
}

console.log(highestGlobalMinimum([1, 1, 1], [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12], [33, 88, 99, 11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2], [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2], [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5
