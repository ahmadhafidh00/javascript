let numbers = [1, 2, 3, 4, 5]; // Expected output: 3
// avg = sum / count

function getAverage(arr) {
  let sum = 0; // total penjumlahan seluruh angka
  let count = arr.length; // jumlah item (angka)

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    sum += num;
  }

  return sum / count;
}

const avg = getAverage(numbers);
console.log(avg);
