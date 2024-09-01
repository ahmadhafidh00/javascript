# Advanced Conditional

## Table of Contents:

- [Default Flow](#default-flow)
- [Control Flow - Conditional](#control-flow---conditional)
- [Expression](#expression)
- [Switch Statement](#switch-case)
  - [Perbedaan Switch Case vs If-Else](#perbedaan-switch-case-vs-if-else)
- [Nested Conditional](#nested-conditional-pengkondisian-bersarang)
- [Jenis-Jenis Operasi](#jenis-jenis-operasi)
- [Perbedaan If - If dan If - Else](#perbedaan-if---if-dan-if---else)

## Default Flow

Kode di dalam JS akan dijalankan dari atas ke bawah. Contoh :

```js
console.log("Hello 1"); // ini akan dijalankan pertama kali
console.log("Hello 2");
console.log("Hello 3");
```

## Control Flow - Conditional

Source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

```js
console.log("Hello 1"); // intruksi 1, process 1, statement 1, p1

if (true) {
  console.log("Hello 2"); // p2-1
} // p2

console.log("Hello 3"); // p3

// true => p1, p2 (p2-1), p3
// false => p1, p2 (), p3
```

## Expression

Sesuatu yang setelah di evaluasi jadi satu nilai.

Source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators

```js
console.log(10); // value => 10, type => number, built in boolean => truthy
console.log("hello"); // value => 'hello', type => string, truthy
console.log(false); // value => false, type => boolean, falsy
```

## Switch Case

Source : https://www.geeksforgeeks.org/conditional-statements-in-javascript/

Seiring bertambahnya jumlah kondisi, Anda dapat menggunakan beberapa `else-if statement` di JavaScript. tapi ketika kita berhadapan dengan banyak kondisi, `switch statement` mungkin merupakan pilihan yang lebih disukai.

**Syntax:**

```js
switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    . . .
    case valueN:
        statementN;
        break;
    default: // selain dari pada case diatas (ELSE)
        statementDefault;
};
```

### Perbedaan Switch Case vs If-Else

![Switch Case vs If-Else](switch%20case%20vs%20if-else.png)

Lihat juga [selengkapnya!](https://badoystudio.com/perbedaan-if-else-dan-switch-case/)

## Nested Conditional (Pengkondisian Bersarang)

`Nested If` ini berbeda dengan `AND (&&) Operator`.

**Syntax:**

```js
if (condition1) {
  // Code block 1
  if (condition2) {
    // Code block 2
  } else {
    // Code block 3
  }
} else {
  // Code block 4
}
```

**Example:** This example demonstrates how nested if…else statements can be used to handle different scenarios based on multiple conditions.

```js
let weather = "sunny";
let temperature = 25;

if (weather === "sunny") {
  if (temperature > 30) {
    console.log("It's a hot day!");
  } else if (temperature > 20) {
    console.log("It's a warm day.");
  } else {
    console.log("It's a bit cool today.");
  }
} else if (weather === "rainy") {
  console.log("Don't forget your umbrella!");
} else {
  console.log("Check the weather forecast!");
}
```

**Output**

```
It's a warm day.
```

**Explanation:** In this example, the outer if statement checks the weather variable. If it’s “sunny,” it further checks the temperature variable to determine the type of day it is (hot, warm, or cool). Depending on the values of weather and temperature, different messages will be logged to the console.

## Jenis-Jenis Operasi

JavaScript has both _binary_ and _unary_ operators, and one special ternary operator, the conditional operator. A `binary operator` requires two operands, one before the operator and one after the operator:

**Syntax:**

```
operand1 operator operand2
```

For example, `3 + 4` or `x * y`. This form is called an infix binary operator, because the operator is placed between two operands. All binary operators in JavaScript are infix.

A `unary operator` requires a single operand, either before or after the operator:

**Syntax:**

```
operator operand
operand operator
```

For example, `x++` or `++x`. The operator operand form is called a prefix unary operator, and the operand operator form is called a postfix unary operator. `++` and `--` are the only postfix operators in JavaScript — all other operators, like `!`, `typeof`, etc. are prefix.

## Perbedaan If - If dan If - Else

### If - If

`If - If` : Penggunaan untuk Kondisi dengan persoalan berbeda, sehingga keduanya harus dieksekusi. Kedua kondisi akan di eksekusi jika kondisi masing-masing benilai **true**.

```js
if (condition A) {
    // statement...
}
if (condition B) {
    // statement...
}
```

### If - Else

`If - Else` : Penggunaan untuk Kondisi dengan persoalan sama dan hanya akan ada satu yang tereksekusi. Hanya akan ada salah satu kondisi yang dieksekusi jika kondisi tsb benilai **true**.

```js
if (condition 1) {
    // statement...
} else if (condition 2) {
    // statement...
}
```
