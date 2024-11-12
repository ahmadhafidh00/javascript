/*

  Reverse the Odd Length Words

  Diberikan sebuah string berupa kalimat, balikan setiap kata dalam kalimat tersebut yang panjang katanya bernilai ganjil.

  input => output
  'Bananas' => 'sananaB'
  'One two three four' => 'enO owt eerht four'
  'Make sure uoy only esrever sdrow of ddo length' => 'Make sure you only reverse words of odd length'

  snippet:
  function reverseOddLength(str) {
    // code here
  }
  console.log(reverseOddLength('Bananas'));
  console.log(reverseOddLength('One two three four'));
  console.log(reverseOddLength('Make sure uoy only esrever sdrow of ddo length'));

*/

/*
  [ALGORITMA]

  1. Split kalimat menjadi kata
  'One two three four' => [ 'One', 'two', 'three', 'four' ]

  2. Cek apakah kumpulan kata tersebut panjangnya ganjil atau ngga
    
  kata      ganjil?   kataTerbalik    arrKataTerproses = []
  'One'     true      enO             [ 'enO' ]
  'two'     true      owt             [ 'enO', 'owt' ]
  'three'   true      eerht           [ 'enO', 'owt', 'eerht' ]
  'four'    false     ruof            [ 'enO', 'owt', 'eerht', 'four' ]

  3. [ 'enO', 'owt', 'eerht', 'four' ] => 'enO owt eerht four'

*/

function bagiKalimatPerKata(str) {
  const result = [];
  let current = "";

  for (let i = 0; i <= str.length; i++) {
    const char = str[i];

    if (char === " " || char === undefined) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  return result;
}

function balikKata(kata) {
  let reversed = "";

  for (let i = kata.length - 1; i >= 0; i--) {
    reversed += kata[i];
  }

  return reversed;
}

function reverseOddLength(str) {
  // Membagi kalimat menjadi array kata-kata
  const arrayOfWords = bagiKalimatPerKata(str);

  const arrKataTerproses = []; // Array untuk menyimpan kata-kata yang sudah diproses

  for (let i = 0; i < arrayOfWords.length; i++) {
    const word = arrayOfWords[i]; // Ambil kata saat ini
    const reversedWord = balikKata(word); // Balikkan kata

    // Jika panjang kata ganjil, masukkan kata yang dibalik
    if (word.length % 2 !== 0) {
      arrKataTerproses.push(reversedWord);
    } else {
      arrKataTerproses.push(word); // Jika panjang kata genap, masukkan kata aslinya
    }
  }

  // Gabungkan kata-kata yang sudah diproses menjadi kalimat baru (join arr to str)
  let newWord = "";

  for (let i = 0; i < arrKataTerproses.length; i++) {
    const barisKata = arrKataTerproses[i];

    // Jika kata terakhir, jangan tambahkan spasi setelahnya
    if (i === arrKataTerproses.length - 1) {
      newWord += barisKata;
    } else {
      newWord += barisKata + " "; // Tambahkan spasi antara kata-kata
    }
  }

  return newWord;
}

console.log(reverseOddLength("Bananas")); // sananaB
console.log(reverseOddLength("One two three four")); // enO owt eerht four
console.log(reverseOddLength("Make sure uoy only esrever sdrow of ddo length")); // Make sure you only reverse words of odd length
