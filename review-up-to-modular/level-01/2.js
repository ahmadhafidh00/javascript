/*

  Membuat fungsi dengan parameter kalimat, yang akan membagi kalimat, yang ditampung dalam array multidimensi per-kata kemudian dalam setiap kata per-huruf

  snippet:
  function bagiKalimatPerKata(kalimat) {
  
  }

  function bagiKataPerHuruf(kata) {
  
  }

  function bagiKalimatPerKataPerHuruf(kalimat) {
  
  }

  console.log(bagiKalimatPerKataPerHuruf('Say Yes To Code'));

  output:
  [
    [ 'S', 'a', 'y' ],
    [ 'Y', 'e', 's' ],
    [ 'T', 'o' ],
    [ 'C', 'o', 'd', 'e' ],
  ]

*/

/**
 * input sample: 'Say Yes To Code'
 * expected output: [ 'Say', 'Yes', 'To', 'Code' ]
 * Fungsi ini membagi sebuah kalimat menjadi array kata-kata berdasarkan spasi.
 * @param {string} kalimat - Kalimat yang ingin dibagi per kata.
 * @returns {string[]} - Array yang berisi kata-kata hasil pemisahan.
 */
function bagiKalimatPerKata(kalimat) {
  const result = [];
  let current = "";

  for (let i = 0; i <= kalimat.length; i++) {
    const char = kalimat[i];

    if (char === " " || char === undefined) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  return result;
}


/**
 * input sample: 'Say'
 * expected output: [ 'S', 'a', 'y' ]
 * Fungsi ini membagi sebuah kata menjadi array karakter.
 * @param {string} kata - Kata yang ingin dibagi per huruf.
 * @returns {string[]} - Array yang berisi karakter-karakter dari kata.
 */
function bagiKataPerHuruf(kata) {
  const result = [];

  for (let i = 0; i < kata.length; i++) {
    const char = kata[i];
    result.push(char);
  }

  return result;
}


/**
 * Fungsi ini membagi kalimat menjadi kata-kata dan kemudian membagi setiap kata menjadi huruf-huruf.
 * Fungsi ini menggunakan dua fungsi sebelumnya: bagiKalimatPerKata dan bagiKataPerHuruf.
 * @param {string} kalimat - Kalimat yang ingin dibagi per kata dan per huruf.
 * @returns {string[][]} - Array dua dimensi, di mana setiap elemen adalah array yang berisi huruf-huruf dari setiap kata.
 */
function bagiKalimatPerKataPerHuruf(kalimat) {
  const result = [];
  const arrayOfWords = bagiKalimatPerKata(kalimat); // Membagi kalimat menjadi array kata-kata

  for (let i = 0; i < arrayOfWords.length; i++) {
    const barisKata = arrayOfWords[i];
    const arrayOfLetters = bagiKataPerHuruf(barisKata); // Membagi kata menjadi huruf-huruf

    result.push(arrayOfLetters);
  }

  return result; // Mengembalikan array dua dimensi yang berisi huruf-huruf dari setiap kata
}

console.log(bagiKalimatPerKataPerHuruf("Say Yes To Code"));
/*
output:
[
  [ 'S', 'a', 'y' ],
  [ 'Y', 'e', 's' ],
  [ 'T', 'o' ],
  [ 'C', 'o', 'd', 'e' ],
]
*/
