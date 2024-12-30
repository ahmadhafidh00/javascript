# Basic Loop

Dalam pemrograman, loop atau perulangan adalah sebuah mekanisme yang
memungkinkan kita untuk mengeksekusi sebuah blok kode secara berulang-ulang,
selama suatu kondisi tertentu terpenuhi. Dengan kata lain, kita tidak perlu
menulis baris kode yang sama jika kita ingin melakukan tugas yang sama berulang
kali.

## Table of Contents

1. [`for` Loop](#for-loop)
2. [`while` Loop](#while-loop)
3. [Perbedaan Antara `while loop` dan `do...while loop`](#perbedaan-antara-while-loop-dan-dowhile-loop)
4. [Flag Variable](#flag-variable)
5. **Practice**
   - [filtered-word](1.js)
   - [reversed-word](2.js)
   - [replaced-character](3.js)
6. [Resources](#resources)

## **`for` Loop**

### Apa itu `for loop`?

`for loop` adalah struktur perulangan (looping) dalam JavaScript yang
digunakan untuk menjalankan serangkaian perintah (statements) berulang kali
hingga kondisi tertentu terpenuhi. `for loop` sering digunakan ketika jumlah
iterasi (perulangan) sudah diketahui sebelumnya.

Struktur dasar `for loop` terdiri dari tiga bagian yang dipisahkan oleh titik
koma (`;`) di dalam tanda kurung `()`:

1. **Inisialisasi (Initialization):** Bagian ini digunakan untuk
   mendeklarasikan dan menginisialisasi variabel _counter_ yang akan mengontrol
   perulangan. Bagian ini dieksekusi hanya sekali sebelum perulangan dimulai.
2. **Kondisi (Condition):** Bagian ini berisi ekspresi boolean yang dievaluasi
   sebelum setiap iterasi. Jika kondisi bernilai `true`, blok kode di dalam
   `for loop` akan dieksekusi. Jika kondisi bernilai `false`, perulangan akan
   berhenti.
3. **Increment/Decrement (Update):** Bagian ini digunakan untuk memperbarui
   nilai variabel _counter_ setelah setiap iterasi. Biasanya, nilai variabel
   _counter_ dinaikkan (increment) atau diturunkan (decrement).

**Sintaks `for loop`:**

```javascript
for (inisialisasi; kondisi; increment / decrement) {
  // Blok kode yang akan dieksekusi berulang kali
}
```

**[⬆ back to top](#table-of-contents)**

### Contoh penggunaan dalam kasus dunia nyata

#### 1. **Menampilkan daftar item:**

Misalkan Anda memiliki daftar nama buah dalam sebuah array, dan Anda ingin
menampilkan setiap nama buah tersebut di konsol. Anda dapat menggunakan
`for loop` untuk melakukan iterasi melalui array dan menampilkan setiap
elemennya.

```javascript
const fruits = ["Apel", "Jeruk", "Mangga", "Pisang"];

for (let i = 0; i < fruits.length; i++) {
  console.log("Nama buah: " + fruits[i]);
}

// Output:
// Nama buah: Apel
// Nama buah: Jeruk
// Nama buah: Mangga
// Nama buah: Pisang
```

Dalam contoh ini:

- `let i = 0;` menginisialisasi variabel _counter_ `i` dengan nilai 0.
- `i < fruits.length;` adalah kondisi yang memastikan perulangan terus berjalan
  selama `i` kurang dari panjang array `fruits`.
- `i++;` menaikkan nilai `i` setelah setiap iterasi.

#### 2. **Menghitung total harga:**

Misalkan Anda memiliki daftar harga barang dalam sebuah array, dan Anda ingin
menghitung total harga semua barang. Anda dapat menggunakan `for loop` untuk
menjumlahkan setiap harga.

```javascript
const prices = [10000, 5000, 20000, 15000];
let totalPrice = 0;

for (let i = 0; i < prices.length; i++) {
  totalPrice += prices[i];
}

console.log("Total harga: " + totalPrice); // Output: Total harga: 50000
```

Dalam contoh ini, `totalPrice` diinisialisasi dengan 0, dan kemudian setiap
harga dalam array `prices` ditambahkan ke `totalPrice` dalam setiap iterasi.

**[⬆ back to top](#table-of-contents)**

## **`while` Loop**

### Apa itu `while loop`?

`while loop` adalah salah satu jenis perulangan dalam JavaScript yang digunakan
untuk mengeksekusi blok kode secara berulang-ulang selama kondisi yang
diberikan bernilai `true`. Perulangan ini akan terus berjalan sampai kondisi
tersebut bernilai `false`.

Berikut adalah sintaks dasar dari `while loop`:

```javascript
while (kondisi) {
  // kode yang akan dieksekusi selama kondisi bernilai true
}
```

**Cara kerja `while loop`:**

1.  **Pemeriksaan Kondisi:** Sebelum setiap iterasi, JavaScript memeriksa
    apakah `kondisi` bernilai `true` atau `false`.
2.  **Eksekusi Kode:** Jika `kondisi` bernilai `true`, blok kode di dalam
    kurung kurawal `{}` akan dieksekusi.
3.  **Pengulangan:** Setelah blok kode dieksekusi, JavaScript kembali ke
    langkah 1 untuk memeriksa `kondisi` lagi. Proses ini berulang sampai
    `kondisi` bernilai `false`.
4.  **Berhenti:** Ketika `kondisi` bernilai `false`, perulangan berhenti dan
    program melanjutkan ke baris kode setelah blok `while`.

**[⬆ back to top](#table-of-contents)**

### Contoh penggunaan

#### 1. **Menampilkan angka dari 1 hingga 5**

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++; // penting untuk menghentikan loop, jika tidak akan terjadi infinite loop
}

// Output:
// 1
// 2
// 3
// 4
// 5
```

**Penjelasan:**

1.  Kita inisialisasi variabel `i` dengan nilai 1.
2.  `while (i <= 5)`: Loop akan terus berjalan selama `i` kurang dari atau
    sama dengan 5.
3.  `console.log(i)`: Menampilkan nilai `i` ke konsol.
4.  `i++`: Menaikkan nilai `i` setiap kali loop dijalankan. Ini sangat penting
    untuk mencegah _infinite loop_ (loop tak terbatas). Jika kita lupa
    menambahkan `i++`, kondisi `i <= 5` akan selalu benar, dan loop tidak akan
    pernah berhenti.

#### 2. **Menjumlahkan angka dari 1 hingga 10**

```javascript
let angka = 1;
let total = 0;

while (angka <= 10) {
  total += angka; // total = total + angka;
  angka++;
}

console.log("Total penjumlahan dari 1 hingga 10 adalah: " + total);

// Output:
// Total penjumlahan dari 1 hingga 10 adalah: 55
```

**Penjelasan:**

1.  Kita inisialisasi `angka` dengan 1 dan `total` dengan 0.
2.  Di dalam loop, kita menambahkan nilai `angka` ke `total` setiap kali loop
    dijalankan.
3.  `angka++` menaikkan nilai `angka` untuk iterasi selanjutnya.

#### 3. **Menggunakan `break` untuk menghentikan loop lebih awal**

```javascript
let j = 0;

while (j < 10) {
  if (j === 5) {
    break; // menghentikan loop jika j sama dengan 5
  }
  console.log(j);
  j++;
}

// Output:
// 0
// 1
// 2
// 3
// 4
```

**Penjelasan:**

- Kata kunci `break` digunakan untuk keluar dari loop secara paksa, meskipun
  kondisi loop masih `true`. Dalam contoh ini, loop akan berhenti ketika `j`
  mencapai 5.

**Peringatan Penting: Infinite Loop**

Pastikan Anda selalu memiliki cara untuk menghentikan loop Anda. Jika kondisi
loop selalu `true`, Anda akan terjebak dalam _infinite loop_, yang dapat
menyebabkan browser atau program Anda membeku. Pastikan ada perubahan pada
variabel yang digunakan dalam kondisi loop di dalam blok kode loop.

**[⬆ back to top](#table-of-contents)**

## **Perbedaan Antara `while loop` dan `do...while loop`**

`while loop` dan `do...while loop` adalah dua jenis perulangan yang memiliki
perbedaan dalam cara mereka mengevaluasi kondisi dan menjalankan blok kode.
Berikut adalah penjelasan perbedaannya:

### 1. `while loop`

- **Cara Kerja:** `while loop` memeriksa kondisi _terlebih dahulu_ sebelum
  menjalankan blok kode di dalamnya. Jika kondisi bernilai `true`, maka blok
  kode akan dieksekusi. Proses ini berulang selama kondisi masih `true`. Jika
  kondisi awalnya sudah `false`, maka blok kode tidak akan dieksekusi sama
  sekali.
- **Sintaks:**

  ```javascript
  while (kondisi) {
    // Blok kode yang akan dieksekusi
  }
  ```

- **Contoh:**

  ```javascript
  let i = 0;

  while (i < 5) {
    console.log(i);
    i++;
  }
  // Output:
  // 0
  // 1
  // 2
  // 3
  // 4
  ```

Dalam contoh ini, perulangan akan terus berjalan selama `i` kurang dari 5.
Setelah `i` mencapai 5, kondisi `i < 5` menjadi `false`, dan perulangan berhenti.

**[⬆ back to top](#table-of-contents)**

### 2. `do...while loop`

- **Cara Kerja:** `do while loop` menjalankan blok kode _sekali terlebih
  dahulu_, kemudian baru memeriksa kondisi. Jika kondisi bernilai `true`, maka
  blok kode akan dieksekusi lagi. Proses ini berulang selama kondisi masih
  `true`. Perbedaan utamanya adalah blok kode di dalam `do while loop` pasti
  akan dieksekusi minimal satu kali, bahkan jika kondisi awalnya `false`.
- **Sintaks:**

  ```javascript
  do {
    // Blok kode yang akan dieksekusi
  } while (kondisi);
  ```

- **Contoh:**

  ```javascript
  let i = 5;

  do {
    console.log("Nilai i: " + i);
    i++;
  } while (i < 5);
  // Output:
  // Nilai i: 5
  ```

Dalam contoh ini, meskipun kondisi `i < 5` awalnya `false` karena `i` sudah
bernilai 5, blok kode di dalam `do while loop` tetap dieksekusi sekali,
mencetak "Nilai i: 5". Kemudian, kondisi diperiksa, dan karena `false`,
perulangan berhenti.

**[⬆ back to top](#table-of-contents)**

### Perbedaan utama

Perbedaan mendasar antara `while loop` dan `do while loop` adalah pada saat
pengecekan kondisi:

- **While Loop:** Kondisi dicek _sebelum_ blok kode di dalam loop dieksekusi.
  Jika kondisi awal bernilai `false`, blok kode tidak akan dieksekusi sama
  sekali.
- **Do While Loop:** Blok kode di dalam loop dieksekusi _setidaknya sekali_,
  kemudian kondisi dicek. Jadi, meskipun kondisi awal bernilai `false`, blok
  kode tetap akan dieksekusi satu kali.

Berikut contoh kode Javascript yang membedakan keduanya:

#### 1. **Kondisi awal `false`**

```javascript
// while loop
let i = 5;
while (i < 5) {
  console.log("while: i = " + i);
  i++;
}

// do while loop
let j = 5;
do {
  console.log("do while: j = " + j);
  j++;
} while (j < 5);
```

**Output:**

```
// Tidak ada output dari while loop karena kondisi i < 5 sudah false sejak awal.
do while: j = 5
```

Pada contoh di atas, karena nilai awal `i` dan `j` adalah 5, dan kondisi yang
diperiksa adalah apakah `i` atau `j` kurang dari 5, maka:

- `while loop` tidak menjalankan kode di dalamnya sama sekali, karena kondisi
  `i < 5` sudah `false` sejak awal.
- `do while loop` tetap menjalankan kode di dalamnya satu kali, mencetak
  "do while: j = 5", _kemudian_ memeriksa kondisi `j < 5`. Karena kondisi ini
  `false`, loop berhenti.

#### 2. **Kondisi awal `true`**

```javascript
// while loop
let i = 0;
while (i < 5) {
  console.log("while: i = " + i);
  i++;
}

// do while loop
let j = 0;
do {
  console.log("do while: j = " + j);
  j++;
} while (j < 5);
```

**Output:**

```
while: i = 0
while: i = 1
while: i = 2
while: i = 3
while: i = 4
do while: j = 0
do while: j = 1
do while: j = 2
do while: j = 3
do while: j = 4
```

Pada contoh ini, karena nilai awal `i` dan `j` adalah 0, dan kondisi yang
diperiksa adalah apakah `i` atau `j` kurang dari 5, maka baik `while loop`
maupun `do while loop` akan menghasilkan output yang serupa karena kondisi
terpenuhi di awal dan selama iterasi.

**Kapan menggunakan `while` dan `do while`?**

- Gunakan `while` jika Anda ingin memastikan bahwa blok kode _hanya_ dieksekusi
  jika kondisi terpenuhi sejak awal. Ini lebih umum digunakan.
- Gunakan `do while` jika Anda ingin blok kode _selalu_ dieksekusi setidaknya
  satu kali, terlepas dari kondisi awalnya. Ini berguna dalam situasi di mana
  Anda perlu menjalankan sesuatu setidaknya sekali dan kemudian memeriksa
  apakah perlu diulangi. Contohnya, dalam validasi input pengguna.

**[⬆ back to top](#table-of-contents)**

## **Flag Variable**

### Apa itu _Flag Variable_?

_Flag variable_, atau variabel bendera dalam bahasa Indonesia, adalah variabel
yang digunakan untuk menandai atau memberi sinyal suatu kondisi atau status
dalam program. Biasanya, _flag variable_ menyimpan nilai boolean (`true` atau
`false`) atau nilai numerik yang merepresentasikan dua status berbeda
(misalnya, 0 dan 1).

Tujuan utama penggunaan _flag variable_ adalah untuk mengontrol alur program
berdasarkan kondisi tertentu. Mereka sangat berguna dalam situasi di mana Anda
perlu mengingat apakah suatu peristiwa telah terjadi atau suatu kondisi telah
terpenuhi.

**[⬆ back to top](#table-of-contents)**

### Penggunaan _Flag Variable_ dalam JavaScript

Berikut beberapa contoh penggunaan _flag variable_ dalam JavaScript:

#### 1. **Pengontrol looping:**

_Flag variable_ dapat digunakan untuk menghentikan atau melanjutkan loop
berdasarkan kondisi tertentu.

```javascript
function searchElement(array, targetValue) {
  let found = false; // Flag variable

  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetValue) {
      found = true;
      break; // Keluar dari loop jika nilai ditemukan
    }
  }

  if (found) {
    console.log("Nilai ditemukan dalam array.");
  } else {
    console.log("Nilai tidak ditemukan dalam array.");
  }
}

searchElement([10, 20, 30, 40, 50], 15);
```

Dalam contoh ini, `found` adalah _flag variable_. Jika `targetValue` ditemukan
dalam array, `found` diatur menjadi `true`, dan loop dihentikan.

#### 2. **Penanda status:**

_Flag variable_ dapat menandai status suatu operasi atau proses.

```javascript
let isValid = true; // Flag variable

function validateInput(input) {
  if (input === "") {
    isValid = false;
    console.error("Input tidak boleh kosong.");
  }
  // Validasi lainnya...
  return isValid;
}

validateInput("");

if (isValid) {
  console.log("Input valid");
} else {
  console.log("Input tidak valid");
}
```

Di sini, `isValid` menandai apakah input pengguna valid atau tidak.

#### 3. **Pengontrol Kondisi:**

_Flag variable_ dapat digunakan untuk mengontrol blok kode yang akan
dieksekusi berdasarkan kondisi tertentu.

```javascript
let isProcessing = false; // Flag variable

function processData() {
  if (!isProcessing) {
    isProcessing = true; // Set flag menjadi true saat pemrosesan dimulai
    console.log("Memulai pemrosesan data...");
    // Lakukan pemrosesan data...
    console.log("Pemrosesan data selesai.");
    isProcessing = false; // Set flag kembali menjadi false setelah pemrosesan selesai
  } else {
    console.log("Data sedang diproses, mohon tunggu.");
  }
}

processData();
// Output: Memulai pemrosesan data...
// Pemrosesan data selesai.
```

Dalam contoh ini, `isProcessing` mencegah pemrosesan data dimulai dua kali
secara bersamaan.

### Keuntungan menggunakan _Flag Variable_

- **Meningkatkan Keterbacaan Kode:** _Flag variable_ membuat kode lebih mudah
  dibaca dan dipahami dengan memberikan nama yang deskriptif untuk kondisi atau
  status tertentu.
- **Memudahkan Pengendalian Alur Program:** Mereka mempermudah pengendalian
  alur program berdasarkan kondisi yang kompleks.
- **Mempermudah Debugging:** Dengan _flag variable_, Anda dapat dengan mudah
  melacak status program dan mengidentifikasi bug.

**Kesimpulan**

_Flag variable_ adalah alat yang berguna dalam pemrograman JavaScript untuk
menandai kondisi dan mengendalikan alur program. Dengan menggunakan nama yang
deskriptif, mereka dapat meningkatkan keterbacaan kode dan mempermudah
pemeliharaan.

**[⬆ back to top](#table-of-contents)**

## Resources

- [Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [`for` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [`while` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [While Loop vs Do While Loop](https://www.geeksforgeeks.org/difference-between-while-loop-and-do-while-loop-in-programming/)
- [What is a flag variable?](https://stackoverflow.com/questions/17402125/what-is-a-flag-variable)

**[⬆ back to top](#table-of-contents)**
