// Carilah berapa banyak siswa yang usianya diatas 20 tahun
const people = [
  ["Alexandra", 26], // format array: [nama, usia]
  ["Elizabeth", 18],
  ["Johny", 21],
  ["Steven", 20],
];

function filterAge(arrOfPeople) {
  const result = [];

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

console.log(filterAge(people));
/* 
  Expected output:
  [ 'Alexandra', 'Johny' ]
*/
