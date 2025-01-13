/*
  Function whoIsCovid akan mengembalikan siapa saja orang-orang yang 
  terindikasi covid berdasarkan suhu tubuhnya, yakni jika suhu tubuh diatas 36
*/
function whoIsCovid(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let person = data[i].split("-");
    if (Number(person[1]) > 36) {
      result.push(person[0]);
    }
  }
  return result;
}

// other solution
function whoIsCovid(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let person = []; // create an empty array to store the person name and temperature
    let temp = "";
    for (let j = 0; j <= data[i].length; j++) {
      // if character is equal to separator or undefined, push temp to person and reset temp
      if (data[i][j] === "-" || data[i][j] === undefined) {
        person.push(temp);
        temp = "";
      } else {
        temp += data[i][j]; // if character is not equal to separator, add to temp
      }
    }
    const [name, temperature] = person; // destructure the person array
    if (Number(temperature) > 36) {
      result.push(name);
    }
  }
  return result;
}

let persons = ["Kosasih-36", "Dodi-35.5", "Amel-37", "Rudi-37.6"];
console.log(whoIsCovid(persons));
/*
  Output:
  [
    Amel,
    Rudi
  ]
*/
