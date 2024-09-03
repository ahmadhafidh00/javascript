function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

console.log(getRandom(2)); // 1 - 2
console.log(getRandom(9)); // 1 - 9
