const person1 = {
  dompet: 50000,
  bank: 2000000,
  "e-wallet": 25000,
};

const person2 = {
  celengan: 75000,
  dompet: 15000,
  bank: 265000,
  brankas: 5000000,
};

function calculateTotalMoney(person) {
  let total = 0;

  // Loop melalui setiap properti dalam objek `person`.
  for (let storage in person) {
    // Periksa apakah properti saat ini memiliki nilai (bukan undefined atau null).
    if (person[storage]) {
      total += person[storage]; // Tambahkan nilai properti saat ini ke variabel `total`.
    }
  }

  return `Total uang orang tersebut adalah ${total}`;
}

console.log(calculateTotalMoney(person1)); // Total uang orang tersebut adalah 2075000
console.log(calculateTotalMoney(person2)); // Total uang orang tersebut adalah 5355000
