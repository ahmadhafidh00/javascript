const inputAge = 0;

function defaultAge(age) {
  if (typeof age !== "number" || Number.isNaN(age)) {
    return "Invalid Input!";
  }

  return age || "Input tidak boleh kosong!";
}

const age = defaultAge(inputAge);
console.log(age);
