function hitungFrekuensi(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    // Jika belum ada properti `arr[i]` di objek `result`. (dynamic property)
    if (result[arr[i]] === undefined) {
      result[arr[i]] = 0; // Jika belum ada, inisialisasi dengan 0 terlebih dahulu, kemudian tambahkan 1.
    }
    result[arr[i]]++; // Jika sudah ada, maka kondisi if diabaikan dan tambahkan 1 pada nilai properti.
  }

  return result;
}

// others
function hitungFrekuensi(arr) {
  let hasil = {};

  arr.forEach((value) => {
    hasil[value] = (hasil[value] || 0) + 1; // menggunakan logical OR untuk menentukan default value jika falsy.
  });

  return hasil;
}

console.log(hitungFrekuensi(["A", "B", "A", "A", "A"])); // { A: 4, B: 1 }
