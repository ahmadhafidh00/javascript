let numbers = [3, 1, 4, 5, 2]; // Expected output: 5

function getMaximum(arr) {
  //* v1 - Math.max
  // return Math.max(...arr);

  //* v2
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const maxNumber = getMaximum(numbers);
console.log(maxNumber);
