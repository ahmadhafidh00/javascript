# Advanced Conditional

**Advanced Conditional** dalam JavaScript merujuk pada teknik dan pendekatan
yang lebih canggih dalam menangani pengkondisian di dalam kode JavaScript.
Selain menggunakan struktur kondisional dasar seperti `if`, `else if`, dan
`else`, JavaScript juga mendukung penggunaan operator dan konsep yang lebih
kompleks untuk pengendalian alur eksekusi kode.

## Table of Contents

1. [Default Flow dan Control Flow (Conditional) dalam JavaScript](#default-flow-dan-control-flow-conditional-dalam-javascript)
2. [Expression](#expression)
3. [Switch Statement](#switch-statement)
4. [Perbedaan `switch-case` dan `if...else`](#perbedaan-switch-case-dan-ifelse)
5. [Nested Conditional](#nested-conditional)
6. [Perbedaan `if...if` dan `if...else`](#perbedaan-ifif-dan-ifelse)
7. [Resources](#resources)

## **Default Flow dan Control Flow (Conditional) dalam JavaScript**

Dalam JavaScript, **default flow** dan **control flow** merujuk pada cara
eksekusi kode berlangsung dalam program, yang sangat penting untuk memahami
bagaimana kode dijalankan dan bagaimana kita bisa mengatur alur eksekusinya.
Berikut adalah penjelasan mendetail tentang keduanya.

### 1. Default flow dalam JavaScript

Default flow adalah urutan eksekusi kode dalam program tanpa adanya perubahan
atau interupsi dari pernyataan khusus seperti kondisi (`if-else`) atau loop.
JavaScript akan membaca dan menjalankan kode secara berurutan dari atas ke
bawah.

**Contoh Default Flow:**

```javascript
console.log("Mulai");
console.log("Sedang proses...");
console.log("Selesai");
```

**Output:**

```
Mulai
Sedang proses...
Selesai
```

**Penjelasan:**

Ketiga pernyataan `console.log` akan dijalankan dari atas ke bawah tanpa
pengecekan kondisi atau interupsi.

**[⬆ back to top](#table-of-contents)**

### 2. Control flow (conditional) dalam JavaScript

Control flow mengacu pada alur eksekusi kode yang dapat berubah berdasarkan
kondisi tertentu, seperti dengan menggunakan _conditional statements_ (`if`,
`else if`, dan `else`) atau _looping_ (`for` dan `while`). Conditional control
flow berfokus pada conditional statements, di mana eksekusi kode akan
bergantung pada apakah kondisi tertentu terpenuhi atau tidak.

**Contoh Control Flow dengan Kondisi:**

```javascript
const jam = 9;

if (jam < 12) {
  console.log("Selamat pagi!");
} else if (jam >= 12 && jam < 18) {
  console.log("Selamat siang!");
} else {
  console.log("Selamat malam!");
}
```

**Output:**

```
Selamat pagi!
```

**Penjelasan:**

- Jika jam kurang dari 12 (di bawah jam 12), maka blok `if` akan dijalankan dan
  menampilkan pesan `"Selamat pagi!"`.
- Jika jam ada di rentang 12 - 17, maka blok `else if` akan dijalankan dan
  menampilkan pesan `"Selamat siang!"`.
- Jika jam 18 ke atas, maka blok `else` akan dijalankan dan menampilkan pesan
  `"Selamat malam!"`.

**[⬆ back to top](#table-of-contents)**

### Logika pengkondisian lanjutan

Selain `if`, `else if`, dan `else`, JavaScript menyediakan beberapa operator
dan teknik untuk menulis kondisi lebih efektif:

1. **Ternary Operator (`? :`)**: Sebuah cara singkat untuk menulis `if-else`
   dengan format `condition ? ifTrue : ifFalse`.

   ```javascript
   let age = 18;
   // Menentukan isAdult berdasarkan usia (age) yang diinputkan.
   // isAdult diset ke true jika usia 18 tahun keatas.
   // isAdult diset ke false jika usia dibawah 18 tahun.
   let isAdult = age >= 18 ? true : false;
   console.log(isAdult);
   ```

   **Output:**

   ```
   true
   ```

2. **Logical Operators**:

   - `&&` (AND): Mengembalikan `true` jika semua kondisi bernilai `true`.
   - `||` (OR): Mengembalikan `true` jika salah satu kondisi bernilai `true`.
   - `!` (NOT): Membalikkan nilai logika dari sebuah kondisi.

   ```javascript
   let age = 25;
   if (age >= 18 && age <= 30) {
     console.log("You are in the target age range.");
   }

   if (age < 18 || age > 30) {
     console.log("You are not in the target age range.");
   }

   if (!isNaN(age)) {
     console.log("Age is a valid number.");
   }
   ```

   **Output:**

   ```
   You are in the target age range.
   Age is a valid number.
   ```

3. **Nullish Coalescing Operator (`??`)**: adalah operator di JavaScript yang
   digunakan untuk memberikan nilai default ketika operand di sebelah kiri
   bernilai `null` atau `undefined`. Operator ini diperkenalkan di **ECMAScript
   2020 (ES11)**.

   **Sintaks:**

   ```javascript
   let result = operand1 ?? operand2;
   ```

   - Jika `operand1` adalah **null** atau **undefined**, maka hasilnya adalah
     `operand2`.
   - Jika `operand1` bukan **null** atau **undefined** (misalnya, `0`, `false`,
     `NaN`, atau string kosong `""`), maka hasilnya adalah `operand1`.

   **Contoh Penggunaan:**

   ```javascript
   let name = null;
   let defaultName = name ?? "Guest";
   console.log(defaultName); // Output: "Guest"
   ```

4. **Optional chaining** adalah fitur di JavaScript yang diperkenalkan dalam
   ECMAScript 2020 (ES11). Fitur ini memungkinkan kita untuk mengakses properti
   atau memanggil metode pada objek yang mungkin tidak ada, tanpa harus
   terlebih dahulu memeriksa apakah objek atau properti tersebut `undefined`
   atau `null`.

   Sintaks untuk optional chaining menggunakan operator `?.`.

   **Contoh Penggunaan:**

   1. **Mengakses properti**

      Memeriksa keberadaan properti sebelum mengaksesnya:

      ```javascript
      const user = {
        profile: {
          name: "Alice",
        },
      };

      console.log(user.profile?.name); // "Alice"
      console.log(user.profile?.age); // undefined (tanpa error)
      ```

   2. **Memanggil metode**

      Memastikan metode ada sebelum memanggilnya:

      ```javascript
      const user = {
        greet: () => "Hello!",
      };

      console.log(user.greet?.()); // "Hello!"
      console.log(user.sayBye?.()); // undefined (tanpa error)
      ```

   3. **Mengakses elemen array**

      Digunakan pada array yang mungkin undefined:

      ```javascript
      const users = [{ name: "Bob" }, undefined];

      console.log(users[0]?.name); // "Bob"
      console.log(users[1]?.name); // undefined (tanpa error)
      ```

   **Keuntungan**

   - Menghindari error `TypeError: Cannot read properties of undefined/null`.
   - Membuat kode lebih ringkas dan mudah dibaca dibandingkan dengan
     menggunakan `if` atau `try-catch`.

   **Contoh Perbandingan**

   Tanpa optional chaining:

   ```javascript
   const user = null;
   if (user && user.profile && user.profile.name) {
     console.log(user.profile.name);
   } else {
     console.log("Name not found");
   }
   ```

   Dengan optional chaining:

   ```javascript
   const user = null;
   console.log(user?.profile?.name || "Name not found");
   ```

   **Catatan**

   - Optional chaining hanya berhenti pada `undefined` atau `null`. Jika
     properti bernilai `false`, `0`, atau `''`, itu tetap dianggap valid.
   - Gunakan secara bijak, karena bisa menyembunyikan bug apabila terlalu
     sering digunakan tanpa memahami struktur data dengan baik.

**[⬆ back to top](#table-of-contents)**

## **Expression**

Expression dalam JavaScript adalah potongan kode yang dievaluasi untuk
menghasilkan suatu nilai. Setiap nilai di JavaScript berasal dari sebuah
expression. Expression bisa sederhana atau kompleks, dan bisa digunakan di
berbagai tempat dalam kode, seperti di dalam pernyataan (statements), fungsi,
atau objek.

### Jenis-jenis expression

1. **Literal Expression**

   Contoh:

   ```javascript
   10; // Nilai literal angka
   ("Hello"); // Nilai literal string
   true; // Nilai literal boolean
   ```

   - **Penjelasan**: Ini adalah nilai langsung yang tidak memerlukan
     perhitungan.

2. **Variable Expression**

   Contoh:

   ```javascript
   let x = 5;
   x; // Mengacu ke nilai variabel x, yaitu 5
   ```

3. **Arithmetic Expression**

   Contoh:

   ```javascript
   5 + 3; // Hasil: 8
   10 * 2; // Hasil: 20
   ```

   - **Penjelasan**: Melibatkan operator aritmatika seperti `+`, `-`, `*`,
     `/`, atau `%`.

4. **Logical Expression**

   Contoh:

   ```javascript
   true && false; // Hasil: false
   true || false; // Hasil: true
   ```

   - **Penjelasan**: Menggunakan operator logika seperti `&&` (AND), `||` (OR),
     dan `!` (NOT).

5. **String Expression**

   Contoh:

   ```javascript
   "Hello" + " World"; // Hasil: "Hello World"
   ```

6. **Function Expression**

   Contoh:

   ```javascript
   const add = function (a, b) {
     return a + b;
   };
   add(2, 3); // Hasil: 5
   ```

   - **Penjelasan**: Mendefinisikan fungsi sebagai nilai.

7. **Object Property Access Expression**

   Contoh:

   ```javascript
   const person = { name: "John", age: 30 };
   person.name; // Hasil: "John"
   person["age"]; // Hasil: 30
   ```

8. **Conditional (Ternary) Expression**

   Contoh:

   ```javascript
   let age = 20;
   let isAdult = age > 18 ? "Yes" : "No"; // Hasil: "Yes"
   ```

   - **Penjelasan**: Menggunakan operator ternary `? :` untuk evaluasi kondisi.

**[⬆ back to top](#table-of-contents)**

### Perbedaan antara expression dan statement

Dalam JavaScript (dan sebagian besar bahasa pemrograman), **expression** dan
**statement** memiliki peran yang berbeda dalam cara kode ditulis dan
dieksekusi. Berikut penjelasannya:

#### 1. **Expression (Ekspresi)**

- **Pengertian**: Sebuah expression adalah potongan kode yang menghasilkan
  sebuah nilai.
- **Tujuan**: Digunakan untuk menghitung atau mengembalikan suatu nilai.

**Contoh:**

```javascript
5 + 10; // Expression yang menghasilkan nilai 15
x * y; // Expression yang menghasilkan hasil perkalian x dan y
"Hello" + " World"; // Expression yang menghasilkan "Hello World" dari penggabungan string
```

**Ciri-ciri:**

- Dapat digunakan di mana saja nilai diharapkan, seperti dalam variabel,
  argumen fungsi, atau kondisi.
- Tidak diakhiri dengan tanda titik koma `;` kecuali bagian dari statement.

**Contoh Penggunaan dalam Kode:**

```javascript
let result = 5 + 10; // '5 + 10' adalah expression
console.log(result); // 'result' adalah expression
```

#### 2. **Statement (Pernyataan)**

- **Pengertian**: Sebuah statement adalah instruksi lengkap yang memberitahu
  JavaScript untuk melakukan suatu tindakan.
- **Tujuan**: Mengatur alur program, melakukan tugas tertentu, atau
  mendefinisikan sesuatu.

**Contoh:**

```javascript
let x = 10; // Statement untuk mendeklarasikan variabel dan memberi nilai
if (x > 5) {
  // Statement untuk kontrol alur
  console.log("x is greater than 5"); // Statement di dalam blok if
}
```

**Ciri-ciri:**

- Biasanya diakhiri dengan tanda titik koma `;`.
- Tidak selalu menghasilkan nilai (meskipun mungkin mengandung expression di
  dalamnya).

**Contoh Penggunaan dalam Kode:**

```javascript
let y = 20; // Statement
if (y > 10) {
  console.log("y is greater than 10"); // Statement
}
```

#### **Perbedaan Utama**

| **Aspek**              | **Expression**                         | **Statement**                         |
| ---------------------- | -------------------------------------- | ------------------------------------- |
| **Menghasilkan Nilai** | Selalu menghasilkan nilai              | Tidak selalu menghasilkan nilai       |
| **Fungsi Utama**       | Digunakan untuk perhitungan atau nilai | Mengontrol alur atau menjalankan aksi |
| **Contoh**             | `5 + 5`, `"Hello" + " World"`          | `if`, `for`, `let`, `return`          |
| **Penggunaan**         | Sebagai bagian dari statement          | Sebagai elemen struktural program     |

#### **Kesimpulan**

- **Expression**: Fokus pada "apa nilainya?"
- **Statement**: Fokus pada "apa aksinya?"

Keduanya sering digunakan bersama untuk membangun logika program yang lebih
kompleks. Misalnya:

```javascript
let sum = 5 + 10; // '5 + 10' adalah expression, sementara keseluruhan baris adalah statement
if (sum > 10) {
  // 'sum > 10' adalah expression, sementara 'if' adalah statement
  console.log(sum); // Statement
}
```

**[⬆ back to top](#table-of-contents)**

## **Switch Statement**

### Apa itu `switch statements`?

Switch statement adalah salah satu kontrol alur dalam JavaScript yang digunakan
untuk menjalankan blok kode tertentu berdasarkan nilai dari ekspresi. Ini
adalah alternatif yang lebih terstruktur dan mudah dibaca dibandingkan dengan
banyak pernyataan `if...else if`.

**Sintaks Dasar:**

```javascript
switch (expression) {
  case value1:
    // Kode yang akan dijalankan jika expression === value1
    break;
  case value2:
    // Kode yang akan dijalankan jika expression === value2
    break;
  default:
  // Kode yang akan dijalankan jika tidak ada kasus yang cocok
}
```

**Penjelasan:**

1. **`expression`**: Nilai yang akan dievaluasi dalam `switch`.
2. **`case`**: Berisi nilai-nilai yang dibandingkan dengan `expression`. Jika
   cocok, blok kode dalam case tersebut akan dieksekusi.
3. **`break`**: Digunakan untuk menghentikan eksekusi dan keluar dari `switch`.
   Jika tidak digunakan, eksekusi akan berlanjut ke case berikutnya (behavior
   ini disebut **fall-through**).
4. **`default`**: Opsional. Digunakan untuk menangani kasus ketika tidak ada
   nilai yang cocok (mirip `else`).

**[⬆ back to top](#table-of-contents)**

### Contoh penggunaan

#### **Contoh 1: Menentukan hari berdasarkan nomor**

```javascript
const day = 3;

switch (day) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  default:
    console.log("Hari tidak valid");
}
```

**Output**: `Rabu`

#### **Contoh 2: Tanpa `break` (Fall-through)**

```javascript
const fruit = "apple";

switch (fruit) {
  case "apple":
  case "banana":
    console.log("Buah yang tersedia");
    break;
  case "orange":
    console.log("Buah jeruk tersedia");
    break;
  default:
    console.log("Buah tidak tersedia");
}
```

**Output**: `Buah yang tersedia`

#### **Contoh 3: Menggunakan ekspresi**

```javascript
const age = 18;

switch (true) {
  case age < 13:
    console.log("Anak-anak");
    break;
  case age >= 13 && age <= 19:
    console.log("Remaja");
    break;
  case age > 19:
    console.log("Dewasa");
    break;
  default:
    console.log("Data tidak valid");
}
```

**Output**: `Remaja`

**[⬆ back to top](#table-of-contents)**

### Switch statement tanpa break

Jika **`switch` statements** di JavaScript tidak menggunakan `break`, maka
**fall-through** akan terjadi. Artinya, setelah eksekusi suatu case selesai,
program akan terus mengeksekusi case berikutnya hingga menemukan `break`,
mencapai akhir dari switch, atau menemukan `return`, `throw`, atau `continue`
di dalam loop.

Berikut adalah penyebabnya:

1. **Desain Default**:

   Fall-through adalah perilaku bawaan dalam JavaScript, di mana jika tidak ada
   `break`, eksekusi akan berlanjut ke case berikutnya tanpa memeriksa apakah
   kondisi case tersebut benar atau tidak.

2. **Tujuan Fall-Through**:

   Dalam beberapa kasus, fall-through disengaja untuk membuat satu blok kode
   dieksekusi oleh beberapa kondisi case.

#### **Contoh Masalah Tanpa `break`**

```javascript
const grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent!");
  case "B":
    console.log("Good job!");
  case "C":
    console.log("Well done!");
  default:
    console.log("Keep trying!");
}
```

**Output:**

```
Good job!
Well done!
Keep trying!
```

**Penjelasan:**

- Setelah case `"B"` cocok, kode terus berjalan ke case `"C"` dan `default`,
  karena tidak ada `break`.

#### **Kapan fall-through berguna?**

Jika fall-through diperlukan, biasanya diberi komentar untuk menunjukkan bahwa
itu disengaja:

```javascript
switch (grade) {
  case "A": // sama seperti logika OR => (grade === "A" || grade === "B)
  case "B":
    console.log("Great job!"); // Fall-through intentional
    break;
  case "C":
    console.log("Good effort!");
    break;
  default:
    console.log("Keep working hard!");
}
```

Di sini, case `"A"` dan `"B"` berbagi logika yang sama.

**[⬆ back to top](#table-of-contents)**

## **Perbedaan `switch-case` dan `if...else`**

Dalam JavaScript, baik `switch` statement maupun `if...else if` digunakan untuk
mengontrol alur program berdasarkan kondisi tertentu, namun ada beberapa
perbedaan dalam penggunaannya:

### 1. Switch statement

**Tujuan:** `switch` digunakan untuk memeriksa satu nilai terhadap beberapa
kondisi berbeda.

**Sintaks:**

```javascript
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
  // code block
}
```

**Cara Kerja:**

- Mengevaluasi _expression_ dan mencocokkannya dengan setiap `case`.
- Jika cocok, maka kode dalam blok `case` tersebut akan dijalankan.
- `break` digunakan untuk menghentikan eksekusi setelah ditemukan kecocokan.
- Jika tidak ada kecocokan, blok `default` akan dieksekusi (jika ada).

**Keuntungan:** Cocok untuk memilih satu dari banyak nilai yang berbeda
(misalnya, saat memilih dari beberapa nilai konstanta).

**[⬆ back to top](#table-of-contents)**

### 2. If...else if statement

**Tujuan:** `if...else if` digunakan untuk mengevaluasi serangkaian kondisi
yang berbeda secara berurutan.

**Sintaks:**

```javascript
if (condition1) {
  // code block
} else if (condition2) {
  // code block
} else {
  // code block
}
```

**Cara Kerja:**

- Mengevaluasi `condition1`, jika benar maka menjalankan blok kode di dalamnya.
- Jika tidak, melanjutkan untuk mengevaluasi kondisi berikutnya (yaitu
  `condition2`, `condition3`, dll).
- Jika tidak ada kondisi yang benar, bagian `else` yang terakhir (jika ada)
  akan dieksekusi.

**Keuntungan:** Lebih fleksibel karena kondisi yang dibandingkan bisa lebih
kompleks, seperti perbandingan lebih dari satu variabel atau operasi logika
yang lebih rumit.

**[⬆ back to top](#table-of-contents)**

### Perbedaan utama

1. **Struktur:**

   - `switch` memeriksa satu ekspresi terhadap beberapa nilai yang ditentukan.
   - `if...else if` membandingkan beberapa kondisi atau ekspresi yang berbeda,
     masing-masing bisa lebih kompleks.

2. **Kinerja:**

   - `switch` cenderung lebih efisien jika dibandingkan dengan banyaknya
     kondisi dalam `if...else if`, terutama jika ada banyak pilihan yang harus
     diperiksa.

3. **Fleksibilitas:**

   - `if...else if` lebih fleksibel karena memungkinkan evaluasi kondisi yang
     lebih rumit (misalnya perbandingan lebih dari satu variabel atau
     penggunaan operator logika).
   - `switch` lebih terbatas pada pencocokan nilai tunggal.

**[⬆ back to top](#table-of-contents)**

### Contoh:

#### **Menggunakan `switch`:**

```javascript
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("This is an apple.");
    break;
  case "banana":
    console.log("This is a banana.");
    break;
  default:
    console.log("Unknown fruit.");
}
```

#### **Menggunakan `if...else if`:**

```javascript
let fruit = "apple";

if (fruit === "apple") {
  console.log("This is an apple.");
} else if (fruit === "banana") {
  console.log("This is a banana.");
} else {
  console.log("Unknown fruit.");
}
```

**[⬆ back to top](#table-of-contents)**

## **Nested Conditional**

**Nested Conditional** dalam JavaScript mengacu pada penggunaan conditional
statement di dalam conditional statement lainnya. Ini digunakan ketika kita
perlu membuat keputusan lebih lanjut setelah mengevaluasi kondisi pertama.
Conditional statement dapat berupa `if`, `else if`, atau `else`, yang ditulis
di dalam satu sama lain.

### Sintaks nested conditional:

```javascript
if (condition1) {
  // aksi jika condition1 true
  if (condition2) {
    // aksi jika condition2 true
  } else {
    // aksi jika condition2 false
  }
} else {
  // aksi jika condition1 false
}
```

**[⬆ back to top](#table-of-contents)**

### Contoh implementasi nested conditional dalam dunia nyata:

Misalkan, kita ingin menentukan apakah seorang siswa dapat mengikuti ujian
berdasarkan dua kriteria:

1. Jika usia siswa lebih dari 18 tahun.
2. Jika siswa telah menyelesaikan kursus tertentu.

Kita bisa menggunakan nested conditional untuk memeriksa kedua kondisi
tersebut.

**Implementasi:**

```javascript
let age = 20;
let isCoursefinished = true;

if (age > 18) {
  // Jika age lebih dari 18 tahun
  if (isCoursefinished) {
    console.log("Siswa dapat mengikuti ujian.");
  } else {
    console.log(
      "Siswa belum menyelesaikan kursus, tidak dapat mengikuti ujian."
    );
  }
} else {
  console.log("Siswa belum cukup umur untuk mengikuti ujian.");
}
```

**Penjelasan:**

1. **Kondisi pertama** (`age > 18`) memeriksa apakah usia siswa lebih dari 18
   tahun.
2. **Kondisi kedua** (`isCoursefinished`) memeriksa apakah siswa telah
   menyelesaikan kursus setelah memastikan usia siswa lebih dari 18 tahun.
3. Jika salah satu kondisi tidak terpenuhi, maka pesan yang relevan akan
   ditampilkan.

**[⬆ back to top](#table-of-contents)**

## **Perbedaan `if...if` dan `if...else`**

Dalam JavaScript, `if-if` dan `if-else` adalah dua struktur pengkondisian yang
digunakan untuk mengontrol alur eksekusi program berdasarkan kondisi tertentu,
tetapi ada perbedaan cara penggunaannya.

### 1. `if-if`

`if-if` adalah penggunaan beberapa pernyataan `if` secara terpisah tanpa
adanya pasangan `else`. Setiap `if` akan dievaluasi secara independen satu
sama lain.

**Contoh:**

```javascript
let x = 10;
if (x > 5) {
  console.log("x lebih besar dari 5");
}
if (x < 20) {
  console.log("x lebih kecil dari 20");
}
```

Pada contoh ini, kedua kondisi (`x > 5` dan `x < 20`) akan dievaluasi, dan
jika kondisi tersebut benar, kedua pesan akan dicetak. Setiap `if` dievaluasi
terpisah tanpa saling bergantung.

**[⬆ back to top](#table-of-contents)**

### 2. `if-else`

`if-else` adalah pasangan struktur kondisi di mana satu kondisi (`if`)
dievaluasi terlebih dahulu. Jika kondisi tersebut benar (`true`), blok kode
dalam `if` dieksekusi. Namun, jika kondisi tersebut salah (`false`), blok kode
dalam `else` dieksekusi.

**Contoh:**

```javascript
let x = 10;
if (x > 5) {
  console.log("x lebih besar dari 5");
} else {
  console.log("x tidak lebih besar dari 5");
}
```

Pada contoh ini, jika kondisi `x > 5` true, maka hanya blok `if` yang
dieksekusi. Jika kondisi tersebut false, blok `else` yang akan dieksekusi.

### Perbedaan utama:

- `if-if`: Kondisi dievaluasi secara terpisah, dan lebih dari satu kondisi bisa
  dieksekusi jika true.
- `if-else`: Hanya satu dari dua blok (if atau else) yang dieksekusi
  berdasarkan apakah kondisi `if` true atau false.

Dengan kata lain, `if-if` memungkinkan untuk mengevaluasi beberapa kondisi
secara independen, sementara `if-else` memberikan pilihan eksklusif antara dua
kemungkinan blok kode.

**[⬆ back to top](#table-of-contents)**

## Resources

- [Ternary operator (`? :`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
- [Logical OR assignment (`||=`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
- [Nullish coalescing operator (`??`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Optional chaining (`?.`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)

**[⬆ back to top](#table-of-contents)**
