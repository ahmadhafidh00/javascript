# Nested Loop

## Table of Contents

1. [Introduction](#introduction)
2. [`break` statement dan `continue` statement](#break-statement-dan-continue-statement)
3. **Practice**
   - [pattern-kotak-1](1.js)
   - [pattern-kotak-2](2.js)
   - [pattern-asterisk](3.js)
   - [pattern-number](4.js)
4. [Resources](#resources)

## Introduction

**Nested loop** (loop bertingkat) adalah konsep dalam pemrograman yang
melibatkan penggunaan satu loop di dalam loop lainnya. Dalam konteks
JavaScript, nested loop berarti kita memiliki satu loop yang berada di dalam
blok eksekusi loop lainnya. Dengan kata lain, satu loop (misalnya, `for`,
`while`, atau `do...while`) digunakan di dalam tubuh dari loop lain.

### Sintaks nested loop di JavaScript

Berikut adalah contoh umum dari nested loop dalam JavaScript menggunakan `for`
loop:

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
```

Penjelasan:

1. Loop pertama (`for (let i = 0; i < 3; i++)`) mengulang sebanyak 3 kali
   (dengan nilai `i` berturut-turut 0, 1, dan 2).
2. Di dalam loop pertama, terdapat loop kedua (`for (let j = 0; j < 3; j++)`)
   yang juga mengulang sebanyak 3 kali untuk setiap iterasi `i`.
3. Di dalam tubuh loop kedua, program mencetak pasangan nilai `i` dan `j`.

**Output:**

```bash
i = 0, j = 0
i = 0, j = 1
i = 0, j = 2
i = 1, j = 0
i = 1, j = 1
i = 1, j = 2
i = 2, j = 0
i = 2, j = 1
i = 2, j = 2
```

**[⬆ back to top](#table-of-contents)**

### Penggunaan nested loop dalam JavaScript

#### **1. Mengakses elemen dalam array dua dimensi**

Nested loop sering digunakan untuk mengakses elemen dalam array dua dimensi
(array of arrays). Misalnya, untuk mencetak elemen-elemen dalam matriks:

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
```

#### **2. Membuat pola atau bentuk**

Nested loop digunakan untuk membuat pola seperti segitiga atau kotak di
konsol.

Contoh untuk membuat pola segitiga bintang:

```javascript
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}
```

**Output:**

```
*
**
***
****
*****
```

**[⬆ back to top](#table-of-contents)**

#### **3. Algoritma pencarian dan pengurutan**

Nested loop juga dapat digunakan dalam algoritma pencarian dan pengurutan,
misalnya dalam algoritma bubble sort yang mengurutkan elemen dalam array.

```javascript
let arr = [5, 2, 9, 1, 5, 6];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr); // Output: [1, 2, 5, 5, 6, 9]
```

### Kinerja dan efisiensi

- **Kompleksitas waktu**: Nested loop memiliki kompleksitas waktu yang lebih
  tinggi dibandingkan dengan loop biasa. Jika loop luar berulang `n` kali dan
  loop dalam berulang `m` kali, maka kompleksitas waktu keseluruhan adalah
  O(n \* m).
- Misalnya, dalam contoh pertama (mengakses matriks 3x3), jika ukuran matriks
  bertambah, jumlah iterasi yang dilakukan akan bertambah secara signifikan,
  terutama jika kedua loop bertumbuh secara besar-besaran.

**[⬆ back to top](#table-of-contents)**

## **`break` statement dan `continue` statement**

**`break`** dan **`continue`** adalah dua pernyataan kontrol alur (flow control
statements) yang sering digunakan dalam loop di JavaScript. Keduanya mengubah
alur eksekusi dalam loop, tetapi dengan cara yang berbeda.

### 1. `break` statement

Pernyataan **`break`** digunakan untuk menghentikan eksekusi loop secara
**langsung** dan keluar dari loop, terlepas dari apakah kondisi loop masih
terpenuhi atau tidak. Dengan kata lain, **`break`** menyebabkan penghentian
**total** dari loop (atau switch statement jika digunakan di dalam switch).

#### **Penggunaan dalam loop**

Misalnya, kita ingin menghentikan loop setelah menemukan elemen tertentu dalam
array, maka kita bisa menggunakan `break`:

```javascript
let numbers = [1, 3, 5, 7, 9, 11];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    console.log("Ditemukan angka 7");
    break; // Keluar dari loop ketika angka 7 ditemukan
  }
  console.log("Angka:", numbers[i]);
}
```

**Output:**

```
Angka: 1
Angka: 3
Angka: 5
Ditemukan angka 7
```

Pada contoh di atas, ketika angka `7` ditemukan dalam array, pernyataan `break`
menyebabkan program keluar dari loop meskipun masih ada elemen yang tersisa
dalam array.

#### **Penggunaan `break` dalam `switch`:**

`break` juga sering digunakan dalam `switch` statement untuk menghentikan
eksekusi setelah menemukan case yang cocok:

```javascript
let day = 3;
switch (day) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break; // Keluar setelah case 3
  default:
    console.log("Hari tidak valid");
}
```

**Output:**

```
Rabu
```

Jika tidak ada `break`, program akan melanjutkan untuk mengeksekusi semua blok
kode berikutnya, bahkan setelah menemukan case yang cocok (proses yang disebut
"fall-through").

**[⬆ back to top](#table-of-contents)**

### 2. `continue` statement

Pernyataan **`continue`** digunakan untuk **melewati** sisa blok kode dalam
satu iterasi loop dan melanjutkan ke iterasi berikutnya. Artinya, pernyataan
setelah `continue` dalam tubuh loop akan diabaikan untuk iterasi tersebut, dan
kontrol alur akan langsung menuju ke iterasi berikutnya.

#### **Penggunaan dalam loop**

Misalnya, kita ingin melewati angka yang tidak genap dalam sebuah array, dan
hanya mencetak angka genap:

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    continue; // Lewati angka ganjil
  }
  console.log(numbers[i]); // Hanya mencetak angka genap
}
```

**Output:**

```
2
4
6
```

Pada contoh di atas, ketika angka ganjil ditemukan, `continue` akan dilewatkan
dan program melanjutkan ke iterasi berikutnya, tanpa menjalankan
`console.log()` untuk angka ganjil.

**[⬆ back to top](#table-of-contents)**

### Perbedaan antara `break` dan `continue`

- **`break`** menghentikan eksekusi loop sepenuhnya dan keluar dari loop.
- **`continue`** hanya melewati sisa blok kode dalam iterasi saat ini dan
  melanjutkan ke iterasi berikutnya.

#### **Contoh kombinasi `break` dan `continue`:**

Misalnya, kita ingin mencetak angka yang genap dari 1 sampai 10, tetapi
berhenti setelah mencetak angka 6.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break; // Hentikan loop setelah angka 6
  }
  if (i % 2 !== 0) {
    continue; // Lewati angka ganjil
  }
  console.log(i); // Cetak hanya angka genap
}
```

**Output:**

```
2
4
```

- Pada iterasi pertama, angka `1` (ganjil) dilewati karena `continue`.
- Angka `2` (genap) dicetak.
- Begitu angka `6` ditemukan, `break` menghentikan loop.

Kedua pernyataan ini sangat berguna untuk mengontrol alur eksekusi dalam loop dan sering
digunakan dalam pengolahan data atau ketika kondisi tertentu tercapai.

**[⬆ back to top](#table-of-contents)**

## Resources

**Nesting For Loops in JavaScript:**

- [source-1](https://www.geeksforgeeks.org/nesting-for-loops-in-javascript/)
- [source-2](https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/)

**[⬆ back to top](#table-of-contents)**
