let str = "Kosasih-36"; // Output: [ 'Kosasih', '36' ]
// your code here

// v1 - using split method
function split(str, separator) {
  return str.split(separator);
}

// v2 - using for loop
function split(str, separator) {
  let result = [];
  let temp = "";
  for (let i = 0; i <= str.length; i++) {
    // if character is equal to separator or undefined, push temp to result and reset temp
    if (str[i] === separator || str[i] === undefined) {
      result.push(temp);
      temp = "";
    } else {
      temp += str[i]; // if character is not equal to separator, add to temp
    }
  }
  return result;
}

console.log(split(str, "-"));
