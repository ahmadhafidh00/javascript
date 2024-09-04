/*
  Function whoIsCovid akan mengembalikan siapa saja orang-orang yang terindikasi covid berdasarkan suhu tubuhnya, yakni jika suhu tubuh diatas 36
*/
function whoIsCovid(data) {
  let result = [];

  for (let i = 0; i < data.length; i++) {
    let perOrang = data[i]; // Kosasih-36, Dodi-35.5, dst

    let arr = [];
    let temp = "";
    for (let j = 0; j <= perOrang.length; j++) {
      let perChar = perOrang[j]; // K, o, s, a, s, i, h, -, dst

      if (perChar === "-" || perChar === undefined) {
        arr.push(temp);
        temp = "";
      } else {
        temp += perChar;
      }
    }
    // console.log(arr); // [ 'Kosasih', '36' ], [ 'Dodi', '35.5' ], dst
    let [nama, suhu] = arr;
    if (suhu > 36) {
      result.push(nama);
    }
  }

  return result;
}

let persons = ["Kosasih-36", "Dodi-35.5", "Amel-37", "Rudi-37.6"];
console.log(whoIsCovid(persons));
/*
output:
[
  Amel,
  Rudi
]
*/
