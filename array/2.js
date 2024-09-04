const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

function filterCar(arrCar, initialChar) {
  let result = [];

  for (let i = 0; i < arrCar.length; i++) {
    let car = arrCar[i]; // BMW, Volvo, Saab, dst
    let carInitialChar = arrCar[i][0]; // B, V, S, dst

    if (carInitialChar === initialChar) {
      result.push(car);
    }
  }

  return result;
}

console.log(filterCar(cars, "F"));
/*
  [ "Ford", "Fiat" ]
*/
