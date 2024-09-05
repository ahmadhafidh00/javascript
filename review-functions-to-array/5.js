let numbers = [4, 2, 1, 3, 5]; // Expected Output: 1

function getMinimum(arr) {
  //* v1 - Math.min
  // return Math.min(...arr);

  //* v2
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const minNumber = getMinimum(numbers);
console.log(minNumber); // 1
