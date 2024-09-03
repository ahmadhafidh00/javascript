const inputName = "";

function defaultName(name) {
  if (typeof name !== "string") {
    return "Invalid Input!";
  }

  //* v1 - if...else
  // if (name) { // truthy
  //   return name;
  // } else { // falsy
  //   return "Nama tidak boleh kosong!";
  // }

  //* v2 - ternary operator
  // return name ? name : "Nama tidak boleh kosong!";

  //* v3 - logical OR (short-circuit evaluation)
  return name || "Nama tidak boleh kosong!";
}

const name = defaultName(inputName);
console.log(name);
