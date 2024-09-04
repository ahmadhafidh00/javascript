/*
  * Functions
  - Blok kode yang dapat digunakan berulang kali untuk melakukan tugas tertentu.

*/

//* Membuat function
function funcName(param1) {
  console.log("Hello World!");
}
funcName();

//* parameter-argument
function greeting(name, gender) {
  if (typeof name !== "string" || name === "") {
    // jika tipe datanya bukan string atau nilainya adalah empty string
    console.log("Nama tidak boleh kosong!");
    return;
  }
  if (typeof gender !== "string" || gender === "") {
    // jika tipe datanya bukan string atau nilainya adalah empty string
    console.log("Masukkan pria atau wanita");
    return;
  }

  let result;
  if (gender === "pria") {
    result = `Selamat datang pak ${name}`;
  } else if (gender === "wanita") {
    result = `Selamat datang bu ${name}`;
  }
  console.log(result);
}
greeting(); // Nama tidak boleh kosong!
greeting("Anggi", "wanita"); // Selamat datang bu Anggi
greeting("Reno", "pria"); // Selamat datang bu Anggi

//* RETURN => mengembalikan nilai
function getMax(a, b, c) {
  return Math.max(a, b, c);
}

const maxNumber = getMax(81, 21, 100);
console.log(maxNumber);

// ? Buatlah kaklulator sederhana menggunakan function
function myCalculator(val1, val2, operator) {
  let hasil;
  switch (operator) {
    case "+":
      hasil = val1 + val2;
      break;
    case "-":
      hasil = val1 - val2;
      break;
    case "*":
      hasil = val1 * val2;
      break;
    case "/":
      hasil = val1 / val2;
      break;
    case "%":
      hasil = val1 % val2;
      break;
    default:
      return "Invalid operator";
  }
  return hasil;
}

console.log(myCalculator(3, 1, "+")); // 4
console.log(myCalculator(10, 5, "-")); // 5
console.log(myCalculator(4, 5, "*")); // 20
console.log(myCalculator(5, 2, "/")); // 2.5
console.log(myCalculator(1, 20, "%")); // 1
console.log(myCalculator(5, 2)); // Invalid Operator
