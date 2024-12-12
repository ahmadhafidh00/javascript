function convertArrayToObject(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    // Jika properti dengan nama `prop{i + 1}` belum ada dalam objek
    if (obj[`prop${i + 1}`] === undefined) {
      // Jika properti `prop{i + 1}` belum ada, kita menambahkan properti tersebut ke objek dan memberi nilai yang sesuai dari elemen array.
      obj[`prop${i + 1}`] = arr[i];
    }
  }

  // Mengembalikan objek yang sudah berisi properti berdasarkan array.length
  return obj;
}

/*
  Pengecekan `undefined` tidak diperlukan: 
  Properti baru yang ditambahkan ke objek JavaScript akan otomatis dibuat 
  jika belum ada, jadi if ini sebenarnya tidak memberikan keuntungan apapun. 
  Kode bisa lebih efisien jika langsung menambahkan nilai tanpa pengecekan tersebut.
*/

// Solusi Lebih Efisien
function convertArrayToObject(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[`prop${i + 1}`] = arr[i]; // Menambahkan langsung tanpa pengecekan
  }
  return obj;
}

console.log(convertArrayToObject([10, 20, 30]));
/*
  {
    "prop1": 10,
    "prop2": 20,
    "prop3": 30
  }
*/

console.log(convertArrayToObject([4, 5, 6]));
/*
  {
    "prop1": 4,
    "prop2": 5,
    "prop3": 6
  }
*/
