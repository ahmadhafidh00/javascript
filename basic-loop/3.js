/*
  *Flag variable / Flagging
  Flagging adalah variabel yang digunakan untuk memiliki beberapa nilai hingga suatu kondisi menjadi true, kemudian kita mengubahnya
  menjadi false dan mencetak output (Awalnya Flagging diasumsikan true).

*/
let apakahSudahMenangLotre = false; // asumsi awal belum menang
let totalPercobaan = 0;

while (!apakahSudahMenangLotre) {
  totalPercobaan++;
  let lotreHariIni = Math.floor(Math.random() * 5) + 1; // 1 - 5

  if (lotreHariIni === 5) {
    console.log(`SELAMAT ANDA MENANG! di percobaan ke-${totalPercobaan}`);
    apakahSudahMenangLotre = true; // flagging untuk menghentikan proses loop ketika true
  } else {
    console.log("Coba lagi!");
  }
}

