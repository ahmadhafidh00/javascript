/**
 *
 * ===============
 * Calculate Price
 * ===============
 *
 * Write a function that has one parameter as an array of strings named "items".
 * All elements in array "items" have a price which is stored in variable "prices".
 * calculate total price of all items in that array.
 * The function will return total price of all items in array.
 */

function calculatePrice(items) {
  const prices = [
    ["bag", 6000],
    ["clothes", 5000],
    ["shoe", 2000],
    ["snack", 500],
  ];

  let totalPrice = 0;

  for (let i = 0; i < items.length; i++) {
    let item = items[i];

    for (let j = 0; j < prices.length; j++) {
      let priceTag = prices[j]; // label harga
      let [name, price] = priceTag;
      // console.log(item, priceTag, name, price);

      if (item === name) {
        totalPrice += price;
      }
    }
  }

  return totalPrice;
}

console.log(calculatePrice(["clothes", "bag"])); // 11000
console.log(calculatePrice(["bag", "snack"])); // 6500
console.log(calculatePrice(["shoe", "snack", "shoe"])); // 4500
