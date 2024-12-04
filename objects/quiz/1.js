const fruits = [
  "pisang",
  "salak",
  "apel",
  "durian",
  "pisang",
  "apel",
  "pisang",
];

/*
Tujuan: Menghitung jumlah kemunculan setiap buah dalam array `fruits`.
Output yang diinginkan dalam bentuk objek:
{
  pisang: 3,
  salak: 1,
  apel: 2,
  durian: 1
}
*/

function countingFrequency(arr) {
  // Membuat objek untuk menyimpan hasil hitungan
  const frequency = {};

  // Iterasi melalui setiap buah dalam array
  arr.forEach((fruit) => {
    // Jika buah sudah ada dalam objek, tambahkan 1 pada jumlahnya
    if (frequency[fruit]) {
      frequency[fruit]++;
    } else {
      // Jika buah belum ada dalam objek, set jumlahnya menjadi 1
      frequency[fruit] = 1;
    }
  });

  // Mengembalikan objek yang berisi jumlah kemunculan setiap buah
  return frequency;
}

console.log(countingFrequency(fruits));
