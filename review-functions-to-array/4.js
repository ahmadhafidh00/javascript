/**
 *
 * ===========
 * Min Max Avg
 * ===========
 *
 * Write a function that has one parameter as an array of array of numbers named "numbers".
 * Search the minimum number and maximum number inside the array.
 * Calculate the average number of all numbers inside the array.
 * The function will return a new array that contains minimum number, maximum number and average number.
 */

function minMaxAvg(numbers) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      // console.log(numbers[i][j]);
      let num = numbers[i][j];

      // mencari min
      if (num < min) {
        min = num;
      }
      // mencari max
      if (num > max) {
        max = num;
      }
      // mencari sum dan count
      sum += num;
      count++;
    }
  }
  // console.log(min, max, count, sum);
  const avg = sum / count;

  return [min, max, avg];
}

console.log(
  minMaxAvg([
    [2, 3, 1],
    [5, 6, 7, 6, 4],
    [0, 1, -1],
    [8, 9],
  ])
); // [ -1, 9, 3.923076923076923 ]
