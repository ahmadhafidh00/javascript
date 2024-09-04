/*

  Buatlah sebuah function checkLogin dengan kriteria berikut:
  - Menerima parameter username dan password
  - Mengecek apakah username dan password berisi string
    - Jika tidak, kembalikan message "input salah"
    - Jika iya, lanjut ke pengecekan berikut
  - Mengecek apakah username adalah "Kosasih" dan password adalah "k0s4s1h"
    - Jika tidak, kembalikan message "coba lagi"
    - Jika iya, kembalikan message "login berhasil"

*/
function checkLogin(username, password) {
  if (typeof username !== "string" || typeof password !== "string") {
    return "input salah";
  }

  if (username === "Kosasih" && password === "k0s4s1h") {
    return "login berhasil";
  } else {
    return "coba lagi";
  }
}

console.log(checkLogin()); // input salah
console.log(checkLogin("ddd", "idk123")); // coba lagi
console.log(checkLogin("Kosasih", "admin#1234")); // coba lagi
console.log(checkLogin("kosasih", "k0s4s1h")); // coba lagi
console.log(checkLogin("Kosasih", "k0s4s1h")); // login berhasil
