# Short Circuit Assignment in JavaScript

Evaluasi truthy dan falsy membuka berbagai kemungkinan shorthand!

Misalkan Anda memiliki sebuah website dan ingin mengambil username pengguna untuk membuat salam yang personal. Terkadang, pengguna tidak memiliki akun, sehingga variabel `username` menjadi falsy. Kode di bawah ini memeriksa apakah `username` telah didefinisikan dan memberikan nilai string default jika tidak:

```js
let username = "";
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = "Stranger";
}

console.log(defaultName); // Output: Stranger
```

Dengan menggabungkan pengetahuan Anda tentang logical operator, Anda dapat menggunakan singkatan untuk kode di atas. Dalam kondisi boolean, JavaScript akan memberikan nilai truthy ke suatu variabel jika Anda menggunakan operator `||` dalam assignment:

```js
let username = "";
let defaultName = username || "Stranger";

console.log(defaultName); // Output: Stranger
```

Karena operator `||` (OR) memeriksa kondisi di sebelah kiri terlebih dahulu, variabel `defaultName` akan diberikan nilai sebenarnya dari `username` jika nilai tersebut truthy, dan akan diberikan nilai `'Stranger'` jika `username` adalah falsy. Konsep ini juga dikenal sebagai _short-circuit evaluation_ atau evaluasi pemutusan singkat.

## See Also:

- [Short Circuit Assignment in JavaScript](https://dev.to/flexdinesh/short-circuit-assignment-in-javascript--4k80)
- [Logical OR assignment (||=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
- [Logical AND assignment (&&=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
- [Nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)