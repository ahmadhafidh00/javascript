// Output 1:
let rows = 5;
console.group("Output 1");
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  // Iterasi untuk mengontrol jumlah bintang sesuai dengan jumlah baris
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
console.groupEnd();

// Output 2:
let rows2 = 5;
console.group("Output 2");
for (let i = rows2; i >= 1; i--) {
  let pattern = "";
  // Iterasi untuk mengontrol jumlah bintang sesuai dengan jumlah baris
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
console.groupEnd();

// Output 3:
let strAngka = "51172";
console.group("Output 3");
for (let i = 0; i < strAngka.length; i++) {
  let perBaris = "";

  let kolom = Number(strAngka[i]);
  // Iterasi untuk mengontrol jumlah bintang sejumlah angka pada string
  for (let j = 0; j < kolom; j++) {
    perBaris += "*";
  }
  console.log(perBaris);
}
console.groupEnd();
