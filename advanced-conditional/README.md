# Advanced Conditional

**Advanced Conditional dalam JavaScript** merujuk pada teknik dan pendekatan
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

## **Default Flow dan Control Flow (Conditional) dalam JavaScript**

Dalam JavaScript, **default flow** dan **control flow** merujuk pada cara
eksekusi kode berlangsung dalam program, yang sangat penting untuk memahami
bagaimana kode dijalankan dan bagaimana kita bisa mengatur alur eksekusinya.
Berikut adalah penjelasan mendetail tentang keduanya.

### Default flow dalam JavaScript

**Default flow** merujuk pada urutan eksekusi kode secara linier. JavaScript
secara default akan menjalankan kode dari atas ke bawah, satu per satu, tanpa
ada kondisi atau perubahan arah.

#### **Penjelasan:**

- **Urutan Eksekusi**: JavaScript akan mengeksekusi kode dari baris pertama
  hingga baris terakhir.
- **Fungsi**: Ketika mendeklarasikan fungsi, JavaScript tidak akan menjalankan
  kode di dalamnya kecuali fungsi tersebut dipanggil.
- **Pernyataan Return**: Jika sebuah fungsi memiliki pernyataan `return`,
  eksekusi fungsi akan berhenti dan nilai yang dikembalikan akan diberikan.

#### **Contoh default flow:**

```javascript
console.log("Ini baris pertama");
console.log("Ini baris kedua");

function sayHello() {
  console.log("Hello, World!");
}

sayHello(); // Fungsi dipanggil di sini

console.log("Ini baris ketiga");
```

**Output:**

```
Ini baris pertama
Ini baris kedua
Hello, World!
Ini baris ketiga
```

**Penjelasan:**

- Kode pertama dan kedua dieksekusi berurutan.
- Fungsi `sayHello()` dipanggil, lalu kode di dalamnya dijalankan.
- Kode setelah pemanggilan fungsi `sayHello()` dilanjutkan setelah eksekusi
  fungsi selesai.

**[⬆ back to top](#table-of-contents)**

### Control flow (conditional) dalam JavaScript

**Control flow** mengacu pada alur eksekusi kode yang dapat berubah berdasarkan
kondisi tertentu, seperti dengan menggunakan pengkondisian (`if`, `else`,
`switch`) atau perulangan (`for`, `while`). **Conditional control flow**
berfokus pada pengkondisian, di mana eksekusi kode akan bergantung pada apakah
kondisi tertentu terpenuhi atau tidak.

#### 1. **Pernyataan `if` dan `else`**

`if` dan `else` memungkinkan kita untuk mengarahkan eksekusi kode berdasarkan
kondisi tertentu. Jika kondisi yang dievaluasi `true`, blok kode yang
bersangkutan akan dieksekusi. Jika tidak, kita bisa menggunakan `else` untuk
menjalankan kode lain.

```javascript
let age = 20;

if (age >= 18) {
  console.log("Dewasa");
} else {
  console.log("Anak-anak");
}
```

**Output:**

```
Dewasa
```

**Penjelasan:**

- Jika `age` lebih besar atau sama dengan 18, maka blok pertama (`"Dewasa"`)
  yang akan dieksekusi.
- Jika tidak, blok `else` yang akan dieksekusi.

#### 2. **Pernyataan `else if`**

Digunakan ketika kita ingin memeriksa lebih dari satu kondisi. Setelah kondisi
pertama gagal, JavaScript akan memeriksa kondisi berikutnya di dalam `else if`.

```javascript
let grade = 85;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else {
  console.log("C");
}
```

**Output:**

```
B
```

**Penjelasan:**

- JavaScript pertama akan memeriksa apakah nilai `grade` lebih besar atau sama
  dengan 90.
- Jika tidak, ia akan memeriksa kondisi `else if (grade >= 80)`, dan
  menampilkan `"B"` karena kondisi ini benar.

#### 3. **Switch-Case**

`switch` digunakan untuk membandingkan sebuah nilai dengan beberapa kemungkinan
nilai lainnya. Ini lebih efisien daripada banyak pernyataan `if-else` jika kita
memeriksa banyak kondisi.

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Midweek");
}
```

**Output:**

```
Start of the week
```

**Penjelasan:**

- JavaScript memeriksa nilai `day`, dan jika cocok dengan salah satu `case`,
  kode yang bersangkutan akan dijalankan.
- Jika tidak ada yang cocok, blok `default` yang akan dijalankan.

**[⬆ back to top](#table-of-contents)**

### Logika pengkondisian lanjutan

Selain `if`, `else`, dan `switch`, JavaScript menyediakan beberapa operator dan
teknik untuk menulis kondisi lebih efektif:

1. **Ternary Operator (`? :`)**: Sebuah cara singkat untuk menulis `if-else`
   dengan format `kondisi ? nilai_true : nilai_false`.

   ```javascript
   let isAdult = age >= 18 ? "Dewasa" : "Anak-anak";
   console.log(isAdult);
   ```

   **Output:**

   ```
   Dewasa
   ```

2. **Logical Operators (`&&`, `||`)**:

   - `&&` (AND) hanya mengembalikan `true` jika kedua kondisi bernilai `true`.
   - `||` (OR) mengembalikan `true` jika salah satu kondisi bernilai `true`.

   ```javascript
   let age = 25;
   if (age > 18 && age < 60) {
     console.log("Dewasa produktif");
   }
   ```

   **Output:**

   ```
   Dewasa produktif
   ```

3. **Nullish Coalescing Operator (`??`)**: Memeriksa nilai `null` atau
   `undefined` dan memberikan nilai default jika itu terjadi.

   ```javascript
   let name = user.name ?? "Guest";
   console.log(name);
   ```

   **Output:**

   ```
   Guest
   ```

4. **Optional Chaining (`?.`)**: Memungkinkan kita mengakses properti atau
   metode dari objek yang mungkin `null` atau `undefined` tanpa menyebabkan
   error.

   ```javascript
   let user = { profile: { name: "John" } };
   console.log(user?.profile?.name); // John
   console.log(user?.address?.city); // undefined
   ```

### Ringkasan:

- **Default Flow** adalah alur eksekusi kode secara berurutan dari atas ke
  bawah, kecuali ada perubahan alur menggunakan pernyataan seperti `return`,
  fungsi, atau exception handling.
- **Control Flow (Conditional)** adalah pengkondisian yang mengubah alur
  eksekusi berdasarkan kondisi yang diberikan. Dalam JavaScript, ini biasanya
  menggunakan `if`, `else if`, `else`, `switch`, dan operator logika (`&&`,
  `||`, `? :`, dll.).

Dengan memahami **default flow** dan **control flow**, Anda bisa menulis kode
yang lebih dinamis dan fleksibel dalam menangani berbagai skenario eksekusi di
dalam program.

**[⬆ back to top](#table-of-contents)**

## **Expression**

**Expression** dalam JavaScript adalah kombinasi dari variabel, nilai,
operator, dan fungsi yang dievaluasi untuk menghasilkan sebuah nilai.
Expression dapat terdiri dari berbagai elemen seperti angka, string, objek,
dan bahkan fungsi, yang semuanya diolah oleh JavaScript untuk menghasilkan
sebuah output atau nilai.

### Jenis-jenis expression dalam JavaScript

1. **Literal Expressions:** Merupakan nilai tetap yang dituliskan secara
   langsung dalam kode.

   - **Angka (Number Literals):**
     ```javascript
     42;
     ```
   - **String Literals:**
     ```javascript
     "Hello, World!";
     ```
   - **Boolean Literals:**
     ```javascript
     true;
     ```
   - **Object Literals:**
     ```javascript
     { name: "John", age: 30 }
     ```
   - **Array Literals:**
     ```javascript
     [1, 2, 3, 4, 5];
     ```

   Literal-literal ini adalah contoh dari **expression** karena mereka
   menghasilkan nilai yang dapat digunakan lebih lanjut dalam program.

2. **Variable Expressions:** Variabel dalam JavaScript dapat dianggap sebagai
   **expression** karena mereka menyimpan nilai dan menghasilkan nilai saat
   dievaluasi.

   ```javascript
   let x = 10;
   let y = 5;
   let sum = x + y; // x + y adalah expression
   ```

   Di sini, `x + y` adalah **expression** yang dievaluasi menjadi `15`.

3. **Operator Expressions:** Ketika kita menggunakan operator (seperti `+`,
   `-`, `*`, `&&`, dll.), itu adalah **expression** karena operator
   mengoperasikan nilai-nilai untuk menghasilkan hasil.

   - **Aritmetika:**
     ```javascript
     let result = 5 + 3; // 5 + 3 adalah expression, hasilnya 8
     ```
   - **Logika:**
     ```javascript
     let isTrue = true && false; // true && false adalah expression, hasilnya false
     ```
   - **Penugasan:**
     ```javascript
     let a = 3; // a = 3 adalah expression, hasilnya 3
     ```

4. **Function Expressions:** Fungsi dalam JavaScript juga dapat dianggap
   sebagai expression, terutama ketika didefinisikan dalam bentuk
   **function expression** (berbeda dengan deklarasi fungsi biasa).

   ```javascript
   let greet = function (name) {
     return "Hello, " + name;
   };
   console.log(greet("Alice")); // Output: Hello, Alice
   ```

   Di sini, `function(name) {...}` adalah **function expression** yang
   menghasilkan sebuah fungsi yang bisa dipanggil.

5. **Conditional Expressions (Ternary Operator):** Salah satu contoh expression
   kondisional adalah **ternary operator**, yang memungkinkan eksekusi kode
   berdasarkan kondisi.

   ```javascript
   let age = 20;
   let status = age >= 18 ? "Dewasa" : "Anak-anak"; // expression
   console.log(status); // Output: Dewasa
   ```

   Ternary operator adalah **expression** yang mengembalikan nilai berdasarkan
   kondisi yang diberikan.

6. **Array Expressions:** Array juga merupakan **expression** karena mereka
   berisi nilai-nilai dan bisa dievaluasi.

   ```javascript
   let numbers = [1, 2, 3, 4]; // [1, 2, 3, 4] adalah array expression
   ```

7. **Object Expressions:** Objek juga merupakan bentuk **expression**, karena
   mereka mengandung nilai-nilai dalam bentuk properti.

   ```javascript
   let person = { name: "John", age: 30 }; // { name: "John", age: 30 } adalah object
   expression;
   ```

8. **Logical Expressions:** Ekspresi logika menghasilkan nilai boolean (`true`
   atau `false`) setelah evaluasi.

   ```javascript
   let isAdult = age >= 18; // age >= 18 adalah expression, hasilnya true atau false
   ```

**[⬆ back to top](#table-of-contents)**

### Perbedaan antara **expression** dan **statement**

Untuk lebih memahami konsep **expression**, kita perlu mengetahui perbedaannya
dengan **statement**.

- **Expression** selalu menghasilkan nilai (value). Apapun yang dapat dihitung
  atau dievaluasi dan menghasilkan suatu nilai adalah **expression**.

  Contoh:

  ```javascript
  5 + 3; // Ini adalah expression yang menghasilkan nilai 8
  ```

- **Statement** adalah unit kode yang melakukan sesuatu tetapi
  **tidak menghasilkan nilai** secara langsung. Statement adalah instruksi
  untuk melakukan tindakan, seperti mendeklarasikan variabel atau mengontrol
  alur eksekusi (dengan `if`, `for`, dll).

  Contoh:

  ```javascript
  let a = 5; // Ini adalah statement, bukan expression
  ```

**[⬆ back to top](#table-of-contents)**

### Contoh-contoh penggunaan expression dalam kode

1. **Menggunakan Expression dalam Fungsi:**
   Fungsi `calculate` di bawah ini mengandung ekspresi aritmetika.

   ```javascript
   function calculate(a, b) {
     return a + b; // a + b adalah expression yang menghasilkan nilai
   }
   console.log(calculate(2, 3)); // Output: 5
   ```

2. **Expression dalam Kondisi `if:`**
   Di dalam sebuah pernyataan `if`, kita bisa menggunakan ekspresi untuk
   mengevaluasi kondisi.

   ```javascript
   let x = 5;
   if (x > 3) {
     console.log("x lebih besar dari 3"); // x > 3 adalah expression
   }
   ```

3. **Array dan Object sebagai Expression:**
   Array dan objek adalah jenis ekspresi karena mereka menghasilkan struktur
   data yang bisa digunakan dalam program.

   ```javascript
   let numbers = [1, 2, 3, 4]; // Array expression
   let person = { name: "Alice", age: 25 }; // Object expression
   ```

4. **Ternary Operator sebagai Expression:**
   Operator ternary adalah ekspresi yang mengembalikan hasil berdasarkan
   kondisi.
   ```javascript
   let age = 16;
   let status = age >= 18 ? "Dewasa" : "Anak-anak"; // expression
   ```

### Expression dalam context ekspresi yang lebih kompleks

Kadang-kadang ekspresi dapat berupa gabungan dari beberapa ekspresi, yang
disebut sebagai **complex expressions**. Misalnya, kita bisa menggabungkan
beberapa operator untuk membuat ekspresi yang lebih kompleks:

```javascript
let a = 10;
let b = 20;
let c = 30;
let result = (a + b) * c - 5; // Ini adalah complex expression
console.log(result); // Output: 595
```

Dalam contoh ini, `(a + b) * c - 5` adalah ekspresi yang terdiri dari beberapa
operator dan menghasilkan nilai yang dihitung.

**[⬆ back to top](#table-of-contents)**

## **Switch Statement**

`switch` adalah salah satu statement percabangan dalam JavaScript yang
digunakan untuk memilih salah satu dari beberapa blok kode yang akan
dieksekusi, berdasarkan kondisi tertentu. `switch` sering digunakan ketika kita
memiliki banyak pilihan untuk diuji, sehingga lebih efisien daripada
menggunakan banyak `if-else`.

### Struktur dasar `switch`:

```javascript
switch (ekspresi) {
  case nilai1:
    // Blok kode jika ekspresi == nilai1
    break;
  case nilai2:
    // Blok kode jika ekspresi == nilai2
    break;
  case nilai3:
    // Blok kode jika ekspresi == nilai3
    break;
  default:
  // Blok kode jika tidak ada nilai yang cocok
}
```

### Penjelasan:

1. **`ekspresi`:** Ekspresi yang ingin diuji (biasanya variabel atau nilai).
2. **`case`:** Merupakan nilai-nilai yang akan dibandingkan dengan ekspresi.
   Jika ekspresi cocok dengan nilai dari salah satu `case`, maka blok kode di
   bawah `case` tersebut akan dieksekusi.
3. **`break`:** Setelah blok kode dalam `case` dijalankan, pernyataan `break`
   digunakan untuk keluar dari `switch`. Tanpa `break`, eksekusi akan
   "melompat" ke `case` berikutnya (ini disebut _fall-through_).
4. **`default`:** Bagian ini opsional dan akan dijalankan jika tidak ada `case`
   yang cocok dengan ekspresi. Biasanya digunakan sebagai kondisi fallback.

**[⬆ back to top](#table-of-contents)**

### Contoh penggunaan:

```javascript
let hari = 3;
let namaHari;

switch (hari) {
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  default:
    namaHari = "Hari tidak valid";
}

console.log(namaHari); // Output: Rabu
```

Pada contoh di atas:

- `hari` di-set ke 3, sehingga blok kode yang sesuai dengan `case 3` (yang
  berisi `namaHari = 'Rabu'`) akan dieksekusi.
- Setelah eksekusi blok kode di dalam `case 3`, pernyataan `break` menghentikan
  eksekusi lebih lanjut dan keluar dari `switch`.

**[⬆ back to top](#table-of-contents)**

### Tanpa `break` (Fall-through):

Jika tidak ada `break`, maka eksekusi akan berlanjut ke `case` berikutnya,
bahkan jika kondisinya tidak sesuai.

```javascript
let angka = 2;
let hasil;

switch (angka) {
  case 1:
    hasil = "Satu";
  case 2:
    hasil = "Dua";
  case 3:
    hasil = "Tiga";
  default:
    hasil = "Tidak ada pilihan";
}

console.log(hasil); // Output: Tiga
```

Pada contoh di atas, karena tidak ada `break` di antara setiap `case`, nilai
`hasil` akan diubah oleh setiap `case` yang dilewati, dan akhirnya berisi
`'Tiga'`.

**[⬆ back to top](#table-of-contents)**

## **Perbedaan `switch-case` dan `if...else`**

Dalam JavaScript, baik `switch-case` maupun `if...else` adalah struktur kontrol
percabangan yang digunakan untuk memeriksa kondisi dan mengeksekusi blok kode
tertentu. Meskipun keduanya berfungsi untuk tujuan yang sama, ada beberapa
perbedaan penting dalam cara mereka bekerja dan kapan sebaiknya digunakan.
Berikut adalah penjelasan tentang perbedaan utama antara keduanya:

### 1. Penggunaan yang Sesuai:

- **`switch-case`:** Digunakan ketika ada banyak kondisi yang harus diuji
  terhadap nilai yang sama, misalnya untuk memeriksa nilai dari sebuah variabel
  yang dapat memiliki banyak kemungkinan. Biasanya digunakan jika kita perlu
  memeriksa beberapa nilai konstan atau enumerasi (seperti hari, bulan, pilihan
  menu, dll.).
- **`if...else`:** Digunakan untuk menguji kondisi yang lebih kompleks,
  misalnya ekspresi logika yang melibatkan lebih dari satu kondisi (misalnya
  kombinasi `AND` atau `OR`), kondisi yang tidak hanya membandingkan nilai
  tunggal, atau untuk kasus di mana lebih dari satu kondisi perlu diuji dalam
  urutan tertentu.

### 2. Sintaks dan Struktur:

- **`switch-case`** memiliki sintaks yang lebih terstruktur, dengan `case` yang
  memeriksa nilai dari ekspresi yang diberikan, dan `default` untuk menangani
  kasus yang tidak cocok.

  ```javascript
  switch (ekspresi) {
    case nilai1:
      // Blok kode
      break;
    case nilai2:
      // Blok kode
      break;
    default:
    // Blok kode jika tidak ada yang cocok
  }
  ```

- **`if...else`** memiliki struktur yang lebih fleksibel, dapat digunakan untuk
  mengevaluasi ekspresi kompleks dan kondisi boolean.

  ```javascript
  if (kondisi1) {
    // Blok kode jika kondisi1 true
  } else if (kondisi2) {
    // Blok kode jika kondisi2 true
  } else {
    // Blok kode jika tidak ada kondisi yang benar
  }
  ```

**[⬆ back to top](#table-of-contents)**

### 3. Kemampuan Menguji Kondisi:

- **`switch-case`** hanya cocok untuk membandingkan nilai ekspresi terhadap
  beberapa nilai tetap (konstan). Biasanya, `switch` bekerja dengan tipe data
  primitif (seperti `number`, `string`, `boolean`), dan pembandingannya adalah
  pemeriksaan ketat (`===`).
- **`if...else`** lebih fleksibel karena bisa menguji kondisi yang lebih
  kompleks, termasuk ekspresi logika seperti:

  - Kombinasi kondisi menggunakan `&&` (AND) atau `||` (OR).
  - Membandingkan lebih dari satu variabel atau jenis data yang berbeda.

  Contoh penggunaan dengan ekspresi logika:

  ```javascript
  if (x > 10 && y < 5) {
    // Eksekusi jika kedua kondisi benar
  }
  ```

### 4. Performance (Kinerja):

- **`switch-case`:** Untuk jumlah kondisi yang sangat besar, `switch` mungkin
  lebih efisien karena JavaScript bisa mengoptimalkan struktur `switch` untuk
  melakukan pencarian yang lebih cepat (terutama untuk nilai yang kontinu atau
  dalam bentuk enumerasi). Namun, ini hanya terasa signifikan pada kasus dengan
  banyak kondisi.
- **`if...else`:** Dalam kasus percabangan dengan banyak kondisi, `if...else`
  mungkin sedikit kurang efisien karena kondisi akan dievaluasi satu per satu
  dari atas ke bawah hingga ditemukan yang benar. Namun, perbedaan kinerjanya
  tidak signifikan untuk kebanyakan aplikasi kecil.

**[⬆ back to top](#table-of-contents)**

### 5. Fall-through (Jika tidak ada `break`):

- **`switch-case`:** Salah satu fitur khas `switch-case` adalah
  _fall-through_. Jika tidak ada `break`, maka kode akan "terjatuh" ke dalam
  `case` berikutnya, meskipun nilai `case` berikutnya tidak sesuai. Ini bisa
  menjadi fitur yang berguna dalam beberapa situasi, tetapi jika tidak
  hati-hati, bisa menyebabkan bug.

  ```javascript
  let angka = 2;
  switch (angka) {
    case 1:
      console.log("Satu");
    case 2:
      console.log("Dua");
    case 3:
      console.log("Tiga");
  }
  // Output: Dua, Tiga (karena tidak ada break)
  ```

- **`if...else`:** Tidak ada konsep _fall-through_ dalam `if...else`. Setiap
  kondisi hanya diuji sekali, dan setelah kondisi yang cocok ditemukan,
  eksekusi berhenti.

### 6. Kapan Menggunakan `switch-case` vs `if...else`:

- Gunakan **`switch-case`:**

  - Ketika Anda memiliki banyak kondisi yang perlu diuji terhadap nilai yang
    sama (misalnya, membandingkan nilai `bulan`, `hari`, atau `status`).
  - Ketika nilai-nilai yang diuji bersifat tetap dan konstan (misalnya angka
    atau string).
  - Ketika lebih mudah untuk membaca dan mengelola banyak kondisi dibandingkan
    dengan banyak `if-else`.

- Gunakan **`if...else`:**
  - Ketika kondisi lebih kompleks atau melibatkan kombinasi ekspresi logika
    (misalnya `x > 10 && y < 5`).
  - Ketika Anda perlu melakukan perbandingan atau evaluasi terhadap berbagai
    jenis data atau kondisi.
  - Ketika logika percabangan lebih dinamis, seperti memeriksa rentang nilai
    atau kondisi yang lebih kompleks.

**[⬆ back to top](#table-of-contents)**

### Contoh Perbandingan:

1. **`switch-case` untuk Pilihan Menu:**

   ```javascript
   let menu = 2;
   switch (menu) {
     case 1:
       console.log("Pilihan 1");
       break;
     case 2:
       console.log("Pilihan 2");
       break;
     case 3:
       console.log("Pilihan 3");
       break;
     default:
       console.log("Pilihan tidak valid");
   }
   ```

2. **`if...else` untuk Logika yang Lebih Kompleks:**

   ```javascript
   let usia = 25;
   let status = "pelajar";

   if (usia >= 18 && status === "pelajar") {
     console.log("Dewasa pelajar");
   } else if (usia < 18) {
     console.log("Anak-anak");
   } else {
     console.log("Dewasa");
   }
   ```

### Ringkasan Perbedaan:

| **Fitur**        | **`switch-case`**                                     | **`if...else`**                          |
| ---------------- | ----------------------------------------------------- | ---------------------------------------- |
| **Penggunaan**   | Banyak kondisi dengan nilai tetap                     | Kondisi lebih kompleks dan dinamis       |
| **Sintaks**      | Lebih terstruktur                                     | Lebih fleksibel                          |
| **Kondisi**      | Membandingkan satu ekspresi dengan banyak nilai tetap | Dapat menangani ekspresi logika kompleks |
| **Efisiensi**    | Lebih efisien untuk banyak kondisi tetap              | Bisa lebih lambat pada banyak kondisi    |
| **Fall-through** | Ada jika tidak ada `break`                            | Tidak ada                                |

Secara keseluruhan, `switch-case` lebih cocok untuk kasus yang lebih sederhana
dengan banyak nilai tetap, sementara `if...else` lebih fleksibel dan cocok
untuk kondisi yang lebih kompleks atau melibatkan ekspresi logika.

**[⬆ back to top](#table-of-contents)**

## **Nested Conditional**

**Nested Conditional** dalam JavaScript merujuk pada penggunaan **percabangan**
di dalam percabangan lainnya, baik itu menggunakan `if...else` ataupun
`switch-case`. Dalam hal ini, sebuah `if` (atau `else`) dapat berisi pernyataan
`if` lainnya, dan kondisi ini akan dievaluasi secara bertahap. Dengan
menggunakan _nested_ (bersarang), kita bisa membuat keputusan lebih spesifik
berdasarkan beberapa kondisi yang lebih kompleks.

### Struktur nested conditional:

1. **Nested `if...else`:**

```javascript
if (kondisi1) {
  if (kondisi2) {
    // Blok kode jika kondisi1 dan kondisi2 terpenuhi
  } else {
    // Blok kode jika kondisi1 terpenuhi dan kondisi2 tidak
  }
} else {
  // Blok kode jika kondisi1 tidak terpenuhi
}
```

2. **Nested `switch-case`:**

```javascript
switch (nilai1) {
  case "A":
    switch (nilai2) {
      case "X":
        // Blok kode jika nilai1 == 'A' dan nilai2 == 'X'
        break;
      case "Y":
        // Blok kode jika nilai1 == 'A' dan nilai2 == 'Y'
        break;
      default:
      // Blok kode jika nilai1 == 'A' dan nilai2 tidak sesuai
    }
    break;
  case "B":
    // Blok kode untuk nilai1 == 'B'
    break;
  default:
  // Blok kode untuk nilai1 yang tidak cocok
}
```

**Penjelasan:**

- **Nested `if...else`**: Dalam struktur ini, kita menulis sebuah `if` atau
  `else` di dalam blok lainnya. Hal ini digunakan untuk kondisi yang lebih
  kompleks di mana keputusan harus didasarkan pada beberapa faktor sekaligus.
- **Nested `switch-case`**: Dalam struktur ini, kita menulis sebuah `switch`
  di dalam `switch` lainnya untuk memeriksa kondisi yang lebih mendetail. Ini
  berguna jika kita perlu membuat keputusan berdasarkan beberapa tingkat nilai
  yang berbeda.

**[⬆ back to top](#table-of-contents)**

### Contoh penggunaan nested conditional:

#### 1. **Nested `if...else`**: Mengecek usia dan status pekerjaan

Misalkan kita ingin memeriksa dua kondisi: usia seseorang dan status pekerjaan
mereka (apakah mahasiswa atau pekerja).

```javascript
let usia = 25;
let statusPekerjaan = "mahasiswa";

if (usia >= 18) {
  if (statusPekerjaan === "mahasiswa") {
    console.log("Dewasa, mahasiswa");
  } else {
    console.log("Dewasa, pekerja");
  }
} else {
  console.log("Anak-anak");
}
```

Pada contoh ini:

- Pertama, kita memeriksa apakah usia lebih besar atau sama dengan 18.
- Jika kondisi pertama benar, kita kemudian memeriksa status pekerjaan.
- Jika status pekerjaan adalah "mahasiswa", maka akan muncul pesan "Dewasa,
  mahasiswa".
- Jika tidak, berarti status pekerjaan adalah "pekerja", dan akan muncul pesan
  "Dewasa, pekerja".
- Jika usia kurang dari 18, maka akan muncul pesan "Anak-anak".

**[⬆ back to top](#table-of-contents)**

#### 2. **Nested `switch-case`**: Memeriksa pilihan menu dan tipe pengguna

Misalkan kita memiliki menu dengan beberapa pilihan, dan kita ingin memberikan
akses berbeda berdasarkan jenis pengguna.

```javascript
let pilihan = 2;
let tipePengguna = "premium";

switch (pilihan) {
  case 1:
    console.log("Pilihan menu 1");
    break;
  case 2:
    switch (tipePengguna) {
      case "premium":
        console.log("Pilihan menu 2 untuk pengguna premium");
        break;
      case "reguler":
        console.log("Pilihan menu 2 untuk pengguna reguler");
        break;
      default:
        console.log("Tipe pengguna tidak dikenal");
    }
    break;
  case 3:
    console.log("Pilihan menu 3");
    break;
  default:
    console.log("Pilihan tidak valid");
}
```

Pada contoh ini:

- Pertama, kita memeriksa nilai dari `pilihan`. Jika `pilihan` adalah 2, maka
  program akan melanjutkan untuk memeriksa `tipePengguna`.
- Jika `tipePengguna` adalah `'premium'`, maka akan menampilkan pesan untuk
  pengguna premium. Jika `tipePengguna` adalah `'reguler'`, maka menampilkan
  pesan untuk pengguna reguler.
- Jika `tipePengguna` tidak dikenali, maka akan muncul pesan "Tipe pengguna
  tidak dikenal".

**[⬆ back to top](#table-of-contents)**

#### 3. **Nested Ternary Operator** (Operator Kondisional)

Selain menggunakan `if...else` atau `switch-case`, JavaScript juga mendukung
operator kondisional (ternary operator) yang dapat digunakan secara _nested_
untuk membuat percabangan lebih singkat. Formatnya adalah:

```
kondisi ? nilaiJikaTrue : nilaiJikaFalse;
```

Berikut adalah contoh penggunaan _nested ternary operator_ untuk memeriksa usia
dan status pekerjaan:

```javascript
let usia = 25;
let status = "mahasiswa";

let hasil =
  usia >= 18
    ? status === "mahasiswa"
      ? "Dewasa, mahasiswa"
      : "Dewasa, pekerja"
    : "Anak-anak";

console.log(hasil); // Output: Dewasa, mahasiswa
```

Penjelasan:

- Jika `usia >= 18` maka kita memeriksa kondisi `status`.
- Jika `status === 'mahasiswa'`, maka hasilnya adalah `'Dewasa, mahasiswa'`.
  Jika tidak, maka hasilnya adalah `'Dewasa, pekerja'`.
- Jika `usia < 18`, maka hasilnya adalah `'Anak-anak'`.

**[⬆ back to top](#table-of-contents)**

### Kapan menggunakan nested conditional?

- **Menggunakan Nested `if...else`:**
  - Jika kondisi yang perlu diuji sangat kompleks dan melibatkan banyak langkah
    logika.
  - Jika Anda perlu memeriksa beberapa kondisi bertingkat, misalnya usia dan
    status pekerjaan dalam satu keputusan.
- **Menggunakan Nested `switch-case`:**

  - Jika Anda memiliki beberapa pilihan dan dalam setiap pilihan ada pilihan
    lebih lanjut berdasarkan nilai lain.
  - Berguna saat memeriksa banyak nilai yang berbeda pada beberapa variabel.

- **Menggunakan Nested Ternary Operator**:
  - Ketika Anda ingin membuat kode lebih ringkas dan lebih elegan dalam kasus
    dengan kondisi yang sederhana.
  - Biasanya untuk keputusan biner atau keputusan sederhana yang membutuhkan
    _ternary operator_ untuk menyederhanakan kode.

### Kelemahan nested conditional:

- **Keterbacaan**: Penggunaan nested conditional dapat membuat kode lebih sulit
  dibaca dan di-debug, terutama jika kondisi bertingkatnya banyak.
- **Kebutuhan untuk pemeliharaan**: Jika logika semakin kompleks, nested
  conditional bisa membuat perubahan kode menjadi lebih rumit.

Nested conditional memungkinkan Anda menangani logika yang lebih rumit, tetapi perlu
digunakan dengan hati-hati agar kode tetap mudah dibaca dan dipelihara.

**[⬆ back to top](#table-of-contents)**

## **Perbedaan `if...if` dan `if...else`**

Dalam JavaScript, pernyataan `if...if` dan `if...else` digunakan untuk
pengkondisian, namun keduanya memiliki perbedaan dalam cara mereka mengatur
jalannya program berdasarkan kondisi yang diberikan.

### 1. `if...if`

Pernyataan `if...if` digunakan untuk memeriksa beberapa kondisi secara
terpisah. Jika suatu kondisi `if` terpenuhi, maka blok kode yang terkait
dengan kondisi itu akan dieksekusi. Jika tidak, pemeriksaan akan diteruskan
ke kondisi berikutnya (jika ada). Tidak ada hubungan saling mengikat antara
kondisi-kondisi yang satu dengan yang lainnya.

**Contoh `if...if`:**

```javascript
let nilai = 80;

if (nilai >= 90) {
  console.log("A");
}
if (nilai >= 80 && nilai < 90) {
  console.log("B");
}
if (nilai < 80) {
  console.log("C");
}
```

**Penjelasan:**

- Pada contoh di atas, ada tiga kondisi yang diperiksa satu per satu.
- Jika nilai adalah 85, maka hanya kondisi kedua yang terpenuhi dan
  menampilkan "B".
- Setiap kondisi diperiksa secara terpisah, tanpa mempengaruhi kondisi lainnya.

**[⬆ back to top](#table-of-contents)**

### 2. `if...else`

Pernyataan `if...else` digunakan untuk memeriksa kondisi yang saling
bertentangan (mutually exclusive). Jika kondisi pertama tidak terpenuhi, maka
blok kode dalam bagian `else` akan dieksekusi. Hanya satu blok yang akan
dijalankan, tergantung pada apakah kondisi `if` pertama benar atau tidak.

**Contoh `if...else`:**

```javascript
let nilai = 80;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 80) {
  console.log("B");
} else {
  console.log("C");
}
```

**Penjelasan:**

- Pada contoh ini, hanya satu kondisi yang dieksekusi.
- Jika nilai 80, maka kondisi `else if (nilai >= 80)` akan terpenuhi dan
  menampilkan "B".
- Setelah kondisi pertama atau kedua terpenuhi, pemeriksaan lainnya tidak
  dilakukan.

### Perbedaan utama:

- **`if...if`**: Semua kondisi diperiksa secara terpisah, dan lebih dari satu
  kondisi bisa dieksekusi.
- **`if...else`**: Memeriksa kondisi pertama, dan jika tidak terpenuhi, kondisi
  berikutnya dalam `else if` atau `else` akan diperiksa. Hanya satu blok kode
  yang dieksekusi.

Dengan demikian, `if...else` digunakan ketika Anda ingin memastikan hanya satu
kondisi yang dieksekusi, sedangkan `if...if` lebih cocok untuk memeriksa
beberapa kondisi yang tidak saling bergantung satu sama lain.

**[⬆ back to top](#table-of-contents)**
