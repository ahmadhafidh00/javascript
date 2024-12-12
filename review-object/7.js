function groupByMajor(arr) {
  let hasil = {};

  // Iterasi setiap elemen dalam array 2 dimensi
  arr.forEach(([jurusan, nama]) => {
    // Jika jurusan belum ada dalam objek hasil, buat array baru
    if (!hasil[jurusan]) {
      hasil[jurusan] = [];
    }
    // Tambahkan nama ke dalam array jurusan yang sesuai
    hasil[jurusan].push(nama);
  });

  return hasil;
}

// others
function groupByMajor(arr) {
  const obj = {};

  for (let [major, name] of arr) {
    // jika belum ada properti `major` saat ini di objek `obj`
    if (obj[major] === undefined) {
      obj[major] = []; // Inisialisasi dengan array kosong
    }
    // Tambahkan nama ke dalam array major yang sesuai
    obj[major].push(name);
  }

  return obj;
}

console.log(
  groupByMajor([
    ["Biologi", "Jonas"],
    ["Fisika", "Ulrich"],
    ["Akuntansi", "Hannah"],
    ["Biologi", "Barbosz"],
    ["Fisika", "Claudia"],
    ["Biologi", "Edmund"],
  ])
);
/*
  {
    Biologi: ['Jonas', 'Barbosz', 'Edmund'],
    Fisika: ['Ulrich', 'Claudia'],
    Akuntansi: ['Hannah']
  }
*/
