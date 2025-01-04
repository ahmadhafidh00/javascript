# Nested Loop

## Table of Contents

1. [Introduction](#introduction)
2. [`break` Statement dan `continue` Statement](#break-statement-dan-continue-statement)
3. **Practice**
   - [pattern-kotak-1](1.js)
   - [pattern-kotak-2](2.js)
   - [pattern-asterisk](3.js)
   - [pattern-number](4.js)
4. [Resources](#resources)

## Introduction

### Apa itu nested loop?

Nested loop dalam bahasa pemrograman JavaScript adalah sebuah **struktur
perulangan di dalam perulangan lainnya**. Dalam nested loop, sebuah loop
(biasanya disebut "outer loop") berisi loop lain di dalamnya (disebut "inner
loop"). Loop dalam ini akan dieksekusi sepenuhnya setiap kali iterasi dari loop
luar dijalankan.

Cara kerja nested loop:

1. **Outer loop** dimulai dan menjalankan satu iterasi.
2. Setiap kali outer loop menjalankan satu iterasi, **inner loop** akan
   berjalan dari awal hingga selesai.
3. Setelah inner loop selesai, outer loop akan melanjutkan iterasi berikutnya.

Berikut adalah contoh penggunaan nested loop:

```javascript
for (let i = 1; i <= 3; i++) {
  // Outer loop
  console.log(`Outer loop iteration: ${i}`);

  for (let j = 1; j <= 2; j++) {
    // Inner loop
    console.log(`  Inner loop iteration: ${j}`);
  }
}
```

**Output:**

```
Outer loop iteration: 1
  Inner loop iteration: 1
  Inner loop iteration: 2
Outer loop iteration: 2
  Inner loop iteration: 1
  Inner loop iteration: 2
Outer loop iteration: 3
  Inner loop iteration: 1
  Inner loop iteration: 2
```

**Penjelasan:**

1. Outer loop berjalan sebanyak **3 kali** (nilai `i` dari 1 hingga 3).
2. Setiap kali outer loop berjalan satu iterasi, inner loop berjalan sebanyak
   **2 kali** (nilai `j` dari 1 hingga 2).
3. Ini menghasilkan total **6 iterasi kombinasi** (`3 outer * 2 inner`).

**Kapan menggunakan nested loop?**

Nested loop biasanya digunakan untuk:

- Mengakses **elemen multidimensi**, seperti array 2D atau matriks.
- Menjalankan logika yang melibatkan pasangan atau kombinasi elemen.
- Masalah iteratif yang membutuhkan pencocokan elemen atau pengulangan
  kompleks.

**[⬆ back to top](#table-of-contents)**

### Contoh penggunaan dalam kasus dunia nyata

#### **1. Membuat tabel HTML secara dinamis:**

Misalkan kita ingin membuat sebuah tabel HTML yang menampilkan data dari sebuah
array dua dimensi. Setiap baris dalam array mewakili satu baris dalam tabel,
dan setiap elemen dalam baris mewakili satu kolom.

```javascript
let data = [
  ["Nama", "Umur", "Kota"],
  ["Budi", 25, "Jakarta"],
  ["Ani", 30, "Bandung"],
  ["Citra", 28, "Surabaya"],
];

let table = document.createElement("table");

for (let i = 0; i < data.length; i++) {
  let row = table.insertRow();
  for (let j = 0; j < data[i].length; j++) {
    let cell = row.insertCell();
    cell.textContent = data[i][j];
  }
}

document.body.appendChild(table);
```

- **Loop luar:** Mengiterasi setiap baris dalam array `data`.
- **Loop dalam:** Mengiterasi setiap kolom dalam setiap baris.
- **Hasil:** Sebuah tabel HTML akan dibuat dengan data yang sesuai.

#### **2. Menampilkan pola bintang:**

Contoh klasik penggunaan nested loop adalah untuk membuat pola-pola tertentu,
misalnya segitiga bintang.

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

- **Loop luar:** Mengontrol jumlah baris.
- **Loop dalam:** Mengontrol jumlah bintang pada setiap baris.
- **Hasil:** Sebuah segitiga bintang akan dicetak di konsol.

#### **3. Memeriksa matriks:**

Jika kita memiliki sebuah matriks (array dua dimensi) yang berisi angka, kita
bisa menggunakan nested loop untuk mencari nilai tertentu, menghitung jumlah
elemen yang memenuhi suatu kondisi, atau melakukan operasi matematika pada
setiap elemen.

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
}

console.log("Jumlah semua elemen:", sum);
```

**[⬆ back to top](#table-of-contents)**

### Perhatian

Penggunaan nested loop yang berlebihan dapat menyebabkan penurunan performa,
terutama jika data yang diproses sangat besar. Oleh karena itu, penting untuk
memikirkan alternatif yang lebih efisien jika memungkinkan, seperti menggunakan
metode array yang sudah tersedia atau algoritma yang lebih baik.

**Kesimpulan**

Nested loop adalah alat yang sangat kuat dalam pemrograman, tetapi harus
digunakan dengan bijak. Dengan memahami konsep ini dan contoh-contoh
penerapannya, Anda akan lebih siap untuk menyelesaikan berbagai macam
masalah pemrograman yang melibatkan data multi-dimensi.

**[⬆ back to top](#table-of-contents)**

## **`break` Statement dan `continue` Statement**

Dalam **JavaScript**, `break` dan `continue` adalah pernyataan yang digunakan
untuk mengontrol alur eksekusi dalam **looping**. Berikut penjelasan perbedaan
utamanya:

### 1. `break` statement

- **Fungsi:** Menghentikan eksekusi loop sepenuhnya dan keluar dari blok loop.
- **Efek:** Semua iterasi berikutnya dalam loop **tidak akan dijalankan**, dan
  program akan melanjutkan eksekusi di luar loop.

**Contoh:**

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Keluar dari loop ketika i bernilai 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

**[⬆ back to top](#table-of-contents)**

### 2. `continue` statement

- **Fungsi:** Menghentikan eksekusi iterasi **saat ini** dan langsung
  melanjutkan ke iterasi berikutnya.
- **Efek:** Loop tidak berhenti, tetapi kode setelah `continue` dalam iterasi
  saat ini tidak akan dieksekusi.

**Contoh:**

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Lewati iterasi ketika i bernilai 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
```

**[⬆ back to top](#table-of-contents)**

### Perbedaan utama

| **Aspek**            | **`break`**                                 | **`continue`**                                                       |
| -------------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| **Penghentian Loop** | Menghentikan seluruh loop.                  | Melanjutkan ke iterasi berikutnya.                                   |
| **Kode setelahnya**  | Tidak dieksekusi dan keluar.                | Tidak dieksekusi dalam iterasi saat ini, tetapi loop tetap berjalan. |
| **Kegunaan Utama**   | Ketika perlu _keluar sepenuhnya_ dari loop. | Ketika perlu _melewati iterasi_ tertentu tanpa keluar dari loop.     |

**[⬆ back to top](#table-of-contents)**

### Contoh penggunaan

Berikut adalah contoh penggunaan nyata dari `break` dan `continue` dalam kasus
dunia nyata:

#### **Kasus 1: Mencari Item Tertentu dalam Array (Menggunakan `break`)**

**Deskripsi:** Dalam sebuah aplikasi, Anda memiliki daftar produk dan ingin
_menemukan produk pertama_ yang harganya lebih dari 100 ribu. Setelah
ditemukan, Anda tidak perlu memeriksa produk lainnya.

```javascript
const products = [
  { name: "Book", price: 50_000 },
  { name: "Pen", price: 20_000 },
  { name: "Bag", price: 150_000 },
  { name: "Notebook", price: 80_000 },
];

for (const product of products) {
  if (product.price > 100_000) {
    console.log(`Found expensive product: ${product.name}`);
    break; // Berhenti setelah menemukan produk pertama
  }
}
// Output: Found expensive product: Bag
```

**Penjelasan:**

Setelah menemukan produk dengan harga lebih dari 100 ribu (`Bag`), loop
dihentikan dengan `break`, sehingga tidak perlu memeriksa produk berikutnya.

#### **Kasus 2: Melewati Item Tertentu dalam Proses Validasi (Menggunakan `continue`)**

**Deskripsi:** Anda ingin memproses daftar pesanan, tetapi ingin melewati
pesanan yang memiliki status "Pending".

```javascript
const orders = [
  { id: 1, status: "Completed" },
  { id: 2, status: "Pending" },
  { id: 3, status: "Completed" },
  { id: 4, status: "Pending" },
];

for (const order of orders) {
  if (order.status === "Pending") {
    continue; // Lewati pesanan dengan status Pending
  }
  console.log(`Processing order: ${order.id}`);
}
// Output:
// Processing order: 1
// Processing order: 3
```

**Penjelasan:**

Saat loop menemukan pesanan dengan status "Pending", `continue` digunakan untuk
melewati iterasi tersebut dan langsung melanjutkan ke iterasi berikutnya.

**[⬆ back to top](#table-of-contents)**

## Resources

- [Nesting For Loops in JavaScript](https://www.geeksforgeeks.org/nesting-for-loops-in-javascript/)
- [Nested Loop in JavaScript with Examples](https://www.scaler.com/topics/nested-loop-in-javascript/)

**[⬆ back to top](#table-of-contents)**
