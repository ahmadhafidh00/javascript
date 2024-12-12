function groupByAge(arr) {
  const obj = {}; // Membuat objek untuk menyimpan usia dan jumlah orang
  const currentYear = new Date().getFullYear(); // Mengambil tahun saat ini

  for (let i = 0; i < arr.length; i++) {
    let birthYear = arr[i]; // Mengambil tahun kelahiran
    let age = currentYear - birthYear; // Menghitung usia

    if (age > 100) continue; // Mengabaikan usia yang tidak masuk akal

    // Jika usia belum ada dalam objek, inisialisasi dengan 0
    if (obj[age] === undefined) {
      obj[age] = 0;
    }

    // Tambahkan jumlah orang dengan usia yang sama
    obj[age]++;
  }

  return obj; // Mengembalikan objek yang berisi usia dan jumlah orang
}

console.log(groupByAge([2003, 1991, 1821, 2003, 1821, 1995, 1995]));
