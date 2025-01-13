const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// v1 - Using startsWith method
function filterCar(arrCar, initialChar) {
  return arrCar.filter((car) => car.startsWith(initialChar));
}

// v2 - Using array index
function filterCar(arrCar, initialChar) {
  return arrCar.filter((car) => car[0] === initialChar); // car[0] is the first character of the car name
}

// v3 - Using for loop
function filterCar(arrCar, initialChar) {
  let result = [];
  for (let i = 0; i < arrCar.length; i++) {
    // Check if the first character of the car name is equal to the initial character
    if (arrCar[i][0] === initialChar) {
      result.push(arrCar[i]); // Add the car name to the result array
    }
  }
  return result;
}

console.log(filterCar(cars, "F"));
// Output: [ "Ford", "Fiat" ]
