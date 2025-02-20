// Carilah berapa banyak siswa yang usianya diatas 20 tahun
const people = [
  ["Alexandra", 26], // format array: [nama, usia]
  ["Elizabeth", 18],
  ["Johny", 21],
  ["Steven", 20],
];

// v1 - traditional for loop
function filterAge(arrOfPeople) {
  const result = []; // Membuatkan array kosong untuk menampung nama-nama yang usianya diatas 20 tahun
  for (let i = 0; i < arrOfPeople.length; i++) {
    let perBaris = arrOfPeople[i]; // ["Alexandra", 26], ["Elizabeth", 18], dst
    // extract nama dan usia
    let [name, age] = perBaris;

    if (age > 20) {
      result.push(name);
    }
  }
  return result;
}

// v2 - Menggunakan for of loop
function filterAge(arrOfPeople) {
  const result = []; // Membuat array kosong untuk menampung nama-nama yang usianya diatas 20 tahun
  for (const [name, age] of arrOfPeople) {
    if (age > 20) {
      result.push(name);
    }
  }
  return result;
}

// v3 - Menggunakan filter
function filterAge(arrOfPeople) {
  return arrOfPeople
    .filter(([name, age]) => age > 20) // filter array yang usianya diatas 20 tahun
    .map(([name, age]) => name); // ambil nama saja
}

console.log(filterAge(people));
/* 
  Expected output:
  [ 'Alexandra', 'Johny' ]
*/
