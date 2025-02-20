let kalimat = "saya suka makan"; // expected output: [ 'saya', 'suka', 'makan' ]

// v1 - Menggunakan built-in function split
function splitBySpace(sentence) {
  return sentence.split(" ");
}

// v2 - Menggunakan algoritma manual
function splitBySpace(sentence) {
  const result = []; // array untuk menampung hasil split
  let temp = "";

  // Menelusuri setiap karakter pada kalimat sampai mendapatkan undefined
  for (let i = 0; i <= sentence.length; i++) {
    let char = sentence[i]; // Ambil karakter pada index ke-i

    // Jika karakter adalah delimiter (spasi) atau undefined, maka push temp ke result dan reset temp
    if (char === " " || char === undefined) {
      result.push(temp);
      temp = "";
    } else {
      temp += char; // Selain itu, tambahkan karakter ke temp
    }
  }
  return result;
}

console.log(splitBySpace(kalimat));
