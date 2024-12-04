let word = "adidas";
// Cari huruf apa aja yang duplikat (muncul lebih dari 1 kali)

//* v1
function findDuplicate(str) {
  const result = [];
  const frequency = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Jika karakter belum ada dalam objek frequency, set frekuensinya menjadi 0
    if (frequency[char] === undefined) {
      frequency[char] = 0;
    }

    // Tambah frekuensi karakter
    frequency[char]++;
  }

  // Loop untuk memeriksa objek frequency dan menambahkan karakter yang frekuensinya lebih dari 1 ke result
  for (let prop in frequency) {
    if (frequency[prop] > 1) {
      result.push(prop); // Menambahkan karakter yang duplikat ke array result
    }
  }

  return result;
}

console.log(findDuplicate(word)); // [ 'a', 'd' ]
