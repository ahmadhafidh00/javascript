function convertObjectToArray(obj) {
  return Object.entries(obj);
}

// others
function convertObjectToArray(obj) {
  const result = [];
  // Loop melalui setiap properti dalam objek `obj`.
  for (const key in obj) {
    // Membuat array sementara berisi pasangan [key, value] dari objek
    const propFormatted = [key, obj[key]];

    // Menambahkan pasangan key-value ke dalam array `result`.
    result.push(propFormatted);
  }
  return result;
}

console.log(
  convertObjectToArray({
    prop1: 1,
    prop2: 2,
    prop3: 3,
  })
);
