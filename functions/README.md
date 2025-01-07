# Functions

Function dalam JavaScript adalah blok kode yang dirancang untuk menjalankan
tugas tertentu atau mengembalikan nilai. Fungsi dapat didefinisikan sekali dan
digunakan berkali-kali, sehingga mempermudah pengelolaan dan pengurangan
pengulangan kode.

Ada tiga cara utama untuk mendefinisikan fungsi di JavaScript: _Function
Declaration, Function Expression, Arrow Function_.

Fungsi dapat menerima **parameter** sebagai input, memiliki **badan** fungsi
untuk logika, dan dapat mengembalikan nilai menggunakan `return`.

## Table of Contents

1. [Fungsi dalam JavaScript](#fungsi-dalam-javascript)
2. [Aturan Penamaan Fungsi dalam JavaScript](#aturan-penamaan-fungsi-dalam-javascript)
3. [Function Expression](#function-expression)
4. [Arrow Function](#arrow-function)
5. **Function Quiz**
   - [check-login](check-login.js)
6. [Resources](#resources)

## **Fungsi dalam JavaScript**

### Apa itu function dalam JavaScript?

**Function** dalam JavaScript adalah sebuah blok kode yang dirancang untuk
melakukan tugas tertentu. Bayangkan function seperti sebuah resep: kamu
memberikan bahan-bahan tertentu (parameter), dan resep itu akan menghasilkan
sesuatu (nilai kembalian).

**Keuntungan menggunakan function:**

- **Modularitas:** Membagi kode menjadi bagian-bagian yang lebih kecil dan
  mudah dikelola.
- **Reusabilitas:** Kode dapat digunakan berulang kali tanpa perlu ditulis
  ulang.
- **Bacaan Kode Lebih Baik (Readable):** Membuat kode lebih terstruktur dan
  mudah dipahami.
- **Abstraksi:** Menyembunyikan detail implementasi dan hanya mengekspos
  fungsionalitas yang diperlukan.

**[⬆ back to top](#table-of-contents)**

### Cara mendefinisikan function

```javascript
function namaFungsi(parameter1, parameter2, ...) {
  // Blok kode yang akan dijalankan
  // ...
  return nilaiKembalian; // Opsional
}
```

- **`function`:** Kata kunci untuk mendefinisikan function.
- **`namaFungsi`:** Nama yang diberikan pada function untuk membedakannya
  dengan function lain.
- **`parameter1`, `parameter2`, ...:** Variabel yang digunakan untuk menerima
  data yang diberikan saat memanggil function.
- **`blok kode`:** Kumpulan perintah yang akan dijalankan ketika function
  dipanggil.
- **`return`:** Kata kunci untuk mengembalikan nilai dari function.

**[⬆ back to top](#table-of-contents)**

### Parameter dan argumen dalam function

**Parameter** dan **argumen** adalah dua konsep penting dalam fungsi JavaScript
yang seringkali membingungkan bagi pemula. Mari kita bedah perbedaan dan
hubungan keduanya.

#### **Parameter**

- **Definisi:** Parameter adalah variabel yang terdaftar dalam definisi sebuah
  fungsi. Mereka bertindak sebagai placeholder untuk data yang akan diberikan
  ketika fungsi dipanggil.
- **Tujuan:** Parameter memungkinkan fungsi menjadi lebih fleksibel, karena
  mereka memungkinkan kita untuk melakukan operasi yang sama pada data yang
  berbeda-beda.

**Contoh:**

```javascript
function greet(name) {
  console.log("Halo, " + name + "!");
}
```

Dalam contoh di atas, `name` adalah parameter.

#### **Argumen**

- **Definisi:** Argumen adalah nilai aktual yang diberikan kepada parameter
  ketika fungsi dipanggil.
- **Tujuan:** Argumen memberikan nilai spesifik kepada parameter, sehingga
  fungsi dapat menjalankan tugasnya dengan data yang sesuai.

**Contoh:**

```javascript
greet("Budi");
```

Dalam contoh di atas, `"Budi"` adalah argumen yang diberikan kepada parameter
`name`.

**Intinya:**

- Parameter adalah seperti variabel yang menunggu nilai di dalam fungsi.
- Argumen adalah nilai konkret yang kita berikan kepada parameter saat
  memanggil fungsi.

**Analogi:**
Bayangkan fungsi sebagai sebuah mesin yang memproses bahan mentah. Parameter
adalah seperti tempat untuk memasukkan bahan mentah tersebut, sedangkan argumen
adalah bahan mentah itu sendiri.

**[⬆ back to top](#table-of-contents)**

### Cara memanggil function

Untuk menjalankan kode di dalam function, kita perlu memanggilnya dengan
menggunakan nama function diikuti oleh tanda kurung. Jika function memiliki
parameter, kita perlu memberikan nilai untuk parameter tersebut di dalam
kurung.

### Jenis-jenis function

- **Function Declaration:** Cara paling umum untuk mendefinisikan function.
- **Function Expression:** Function yang disimpan dalam sebuah variabel.
- **Arrow Function:** Sintaks yang lebih singkat untuk menulis function.
- **Recursive Function:** Function yang memanggil dirinya sendiri.

**[⬆ back to top](#table-of-contents)**

### Pernyataan `return` dalam function

**Pernyataan `return`** digunakan untuk:

1. **Mengembalikan nilai:** Fungsi dapat menghasilkan suatu nilai yang dapat
   digunakan di bagian lain dari kode. Nilai ini bisa berupa angka, string,
   objek, array, atau bahkan fungsi lain.
2. **Mengakhiri eksekusi fungsi:** Ketika `return` dijumpai, eksekusi fungsi
   akan segera berhenti dan nilai yang ditentukan akan dikembalikan.

**Contoh:**

```javascript
function sum(a, b) {
  return a + b;
}

let hasil = sum(3, 4);
console.log(hasil); // Output: 7
```

Dalam contoh di atas:

- Fungsi `sum` menerima dua parameter, `a` dan `b`.
- Fungsi ini menghitung jumlah dari `a` dan `b`, lalu mengembalikan hasilnya
  menggunakan `return`.
- Hasil perhitungan disimpan dalam variabel `hasil`.

**Contoh lain:**

```javascript
function isEvenOdd(num) {
  if (num % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

console.log(isEvenOdd(5)); // Output: Ganjil
```

**Fungsi tanpa `return`:**

Fungsi yang tidak memiliki `return` secara implisit akan mengembalikan
`undefined`.

```javascript
function greet(name) {
  console.log("Halo, " + name + "!");
}

let hasil = greet("Andi");
console.log(hasil); // Output: undefined
```

**Penggunaan `return` dalam kondisi:**

```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120
```

**Kapan menggunakan `return`:**

- Ketika Anda ingin menghitung dan mengembalikan hasil suatu operasi.
- Ketika Anda ingin menghentikan eksekusi fungsi lebih awal.
- Ketika Anda ingin membuat fungsi yang dapat digunakan sebagai bagian dari
  ekspresi yang lebih besar.

**[⬆ back to top](#table-of-contents)**

## **Aturan Penamaan Fungsi dalam JavaScript**

Aturan penamaan fungsi dalam JavaScript mengikuti konvensi tertentu untuk
memastikan kode mudah dibaca, dipahami, dan dikelola. Berikut adalah aturan
dan panduan penamaannya:

### 1. Huruf awal dan karakter valid

- Nama fungsi harus dimulai dengan huruf (`a-z` atau `A-Z`), tanda garis bawah
  (`_`), atau tanda dolar (`$`).
- Tidak boleh dimulai dengan angka.
- Setelah karakter pertama, nama fungsi dapat mengandung huruf, angka, garis
  bawah (`_`), atau tanda dolar (`$`).

**[⬆ back to top](#table-of-contents)**

### 2. Tidak boleh menggunakan kata kunci (keyword)

Nama fungsi tidak boleh menggunakan kata kunci yang sudah dipesan (reserved
keywords) di JavaScript, seperti `function`, `var`, `if`, `return`, dll.

**[⬆ back to top](#table-of-contents)**

### 3. Peka huruf besar dan kecil (case-sensitive)

JavaScript membedakan antara huruf besar dan huruf kecil. Misalnya,
`myFunction` dan `myfunction` adalah nama yang berbeda.

**[⬆ back to top](#table-of-contents)**

### 4. Konvensi penamaan (best practices)

- Gunakan **camelCase** untuk nama fungsi, yaitu huruf pertama kecil, kata
  berikutnya diawali huruf besar, contohnya:
  ```javascript
  function calculateSum() {
    // kode fungsi
  }
  ```
- Nama fungsi sebaiknya deskriptif dan mencerminkan tugas atau tujuan fungsi
  tersebut.
  - **Baik:** `addMonthToDate(month, date)`
  - **Buruk:** `addToDate(date, month)`

**[⬆ back to top](#table-of-contents)**

### 5. Hindari penggunaan karakter khusus

Jangan gunakan spasi atau karakter khusus (seperti `-`, `!`, `@`, dll.) dalam
nama fungsi.

**[⬆ back to top](#table-of-contents)**

### 6. Nama fungsi dengan tujuan tertentu

- Untuk fungsi yang menghasilkan nilai Boolean, gunakan awalan seperti `is`,
  `has`, atau `can`. Contoh:
  ```javascript
  function isAvailable() {
    return true;
  }
  ```
- Untuk fungsi yang merupakan aksi, gunakan kata kerja seperti `get`, `set`,
  `calculate`, `fetch`, dll.

**[⬆ back to top](#table-of-contents)**

### 7. Fungsi khusus untuk class atau object

- Jika fungsi merupakan metode dalam sebuah class, gunakan nama yang relevan
  dengan perilaku class tersebut:
  ```javascript
  class User {
    login() {
      // kode login
    }
    logout() {
      // kode logout
    }
  }
  ```

**[⬆ back to top](#table-of-contents)**

### Contoh nama fungsi yang baik

```javascript
function addNumbers(a, b) {
  return a + b;
}

function fetchUserData(userId) {
  // Ambil data pengguna
}

function isLoggedIn() {
  return true;
}
```

Dengan mengikuti aturan dan panduan ini, Anda akan menulis kode yang lebih
rapi, terstruktur, dan mudah dipahami oleh tim pengembang lainnya.

**[⬆ back to top](#table-of-contents)**

## **Function Expression**

### Definisi function expression

Function expression adalah cara mendefinisikan fungsi dalam JavaScript dengan
cara menugaskan (assign) sebuah fungsi ke sebuah variabel atau konstanta.
Berbeda dengan **function declaration**, function expression tidak memiliki
nama fungsi yang eksplisit (meskipun bisa diberi nama/opsional).

**Sintaks Function Expression:**

```javascript
const myFunction = function (parameter1, parameter2) {
  // Body of the function
  return parameter1 + parameter2;
};
```

Fungsi ini bisa berupa fungsi anonim (tanpa nama) atau fungsi dengan nama.
Ketika menggunakan function expression, fungsi tidak dihoisting seperti pada
function declaration.

**[⬆ back to top](#table-of-contents)**

### Penggunaan function expression

Function expression sering digunakan dalam berbagai skenario, seperti:

1. **Fungsi Anonim (Anonymous Function):**
   Digunakan saat fungsi tidak perlu diberi nama. Contoh:

   ```javascript
   const add = function (a, b) {
     return a + b;
   };

   console.log(add(2, 3)); // Output: 5
   ```

2. **IIFE (Immediately Invoked Function Expression):**
   Fungsi langsung dieksekusi setelah didefinisikan. Contoh:

   ```javascript
   (function () {
     console.log("IIFE berjalan!");
   })();
   ```

3. **Callback Function:**
   Function expression sering digunakan sebagai callback. Contoh:

   ```javascript
   const numbers = [1, 2, 3, 4];
   const doubled = numbers.map(function (num) {
     return num * 2;
   });

   console.log(doubled); // Output: [2, 4, 6, 8]
   ```

4. **Fungsi di dalam Objek:**
   Digunakan untuk mendefinisikan metode di objek. Contoh:

   ```javascript
   const person = {
     name: "John",
     greet: function () {
       return `Hello, my name is ${this.name}`;
     },
   };

   console.log(person.greet()); // Output: Hello, my name is John
   ```

**[⬆ back to top](#table-of-contents)**

### Perbedaan function expression vs function declaration

| Aspek               | Function Declaration                  | Function Expression                                           |
| ------------------- | ------------------------------------- | ------------------------------------------------------------- |
| **Hoisting**        | Dapat diakses sebelum deklarasi       | Tidak dapat diakses sebelum deklarasi                         |
| **Penamaan Fungsi** | Harus memiliki nama                   | Bisa anonim atau dengan nama                                  |
| **Penggunaan**      | Digunakan saat fungsi berdiri sendiri | Digunakan untuk fleksibilitas, seperti callback atau variabel |

**[⬆ back to top](#table-of-contents)**

### Kapan menggunakan function expression?

- Saat membutuhkan fungsi anonim atau callback.
- Untuk mendefinisikan fungsi di dalam objek atau kelas.
- Ketika ingin membatasi cakupan (scope) fungsi agar tidak tersedia di seluruh
  program.
- Untuk IIFE, yang langsung berjalan saat didefinisikan.

**[⬆ back to top](#table-of-contents)**

## **Arrow Function**

### Definisi arrow function

Arrow function adalah cara singkat untuk menulis fungsi anonim (tidak bernama)
di JavaScript. Fungsi ini diperkenalkan di ECMAScript 6 (ES6) dan menggunakan
tanda panah (`=>`) untuk mendefinisikan fungsi.

**Sintaks Arrow Function:**

```javascript
const functionName = (parameter1, parameter2) => {
  // Body of the function
  return parameter1 + parameter2;
};
```

Arrow function memiliki sintaks yang lebih ringkas dibandingkan function
expression, terutama untuk fungsi sederhana. Selain itu, arrow function tidak
memiliki konteks `this` sendiri, sehingga sangat berguna dalam situasi
tertentu.

**[⬆ back to top](#table-of-contents)**

### Penggunaan arrow function

Arrow function sering digunakan untuk membuat kode lebih bersih dan ringkas.
Berikut adalah beberapa contohnya:

1. **Fungsi Sederhana:**
   Jika fungsi hanya memiliki satu baris logika, Anda bisa menuliskannya dalam
   satu baris:

   ```javascript
   const add = (a, b) => a + b;

   console.log(add(3, 5)); // Output: 8
   ```

2. **Tanpa Parameter:**
   Jika tidak ada parameter, gunakan tanda kurung kosong `()`:

   ```javascript
   const sayHello = () => console.log("Hello!");

   sayHello(); // Output: Hello!
   ```

3. **Satu Parameter:**
   Jika hanya memiliki satu parameter, tanda kurung dapat dihilangkan:

   ```javascript
   const square = x => x * x;

   console.log(square(4)); // Output: 16
   ```

4. **Sebagai Callback Function:**
   Arrow function sering digunakan dalam metode array seperti `map`, `filter`,
   dan `reduce`:

   ```javascript
   const numbers = [1, 2, 3, 4];
   const doubled = numbers.map((num) => num * 2);

   console.log(doubled); // Output: [2, 4, 6, 8]
   ```

5. **Fungsi dengan Objek Literal:**
   Untuk mengembalikan objek literal, bungkus objek dalam tanda kurung `()`:

   ```javascript
   const createUser = (name, age) => ({ name, age });

   console.log(createUser("Alice", 25));
   // Output: { name: 'Alice', age: 25 }
   ```

**[⬆ back to top](#table-of-contents)**

### Kelebihan arrow function

1. **Sintaks Ringkas:**
   Membuat fungsi sederhana lebih mudah dibaca dan ditulis.
2. **`this` Tidak Terikat:**
   Arrow function tidak memiliki `this` sendiri; ia menggunakan `this` dari
   lingkup luar (lexical scoping). Hal ini sangat berguna dalam metode seperti:

   ```javascript
   function Person(name) {
     this.name = name;
   }

   Person.prototype.sayName = function () {
     setTimeout(() => {
       console.log(`My name is ${this.name}`);
     }, 1000);
   };

   const person = new Person("John");
   person.sayName(); // Output: My name is John
   ```

3. **Tidak Ada `arguments` Object:**
   Arrow function tidak memiliki objek `arguments`. Jika butuh, Anda harus
   menggunakan fungsi biasa atau spread syntax:

   ```javascript
   const sum = (...args) => args.reduce((total, num) => total + num, 0);

   console.log(sum(1, 2, 3, 4)); // Output: 10
   ```

**[⬆ back to top](#table-of-contents)**

### Kekurangan arrow function

1. **Tidak Bisa Digunakan Sebagai Constructor:**
   Arrow function tidak memiliki kemampuan untuk digunakan dengan `new`.
   Contoh:

   ```javascript
   const Person = (name) => {
     this.name = name; // Error: `this` tidak mendukung konteks ini
   };
   ```

2. **Tidak Memiliki `this`, `super`, dan `arguments`:**
   Ini bisa menjadi kendala jika Anda membutuhkan akses eksplisit ke `this`
   atau `arguments`.

3. **Tidak Cocok untuk Metode di Objek:**
   Ketika digunakan dalam metode objek, `this` akan merujuk ke lingkup luar,
   bukan objek itu sendiri:

   ```javascript
   const obj = {
     name: "John",
     sayName: () => console.log(this.name), // `this` tidak merujuk ke `obj`
   };

   obj.sayName(); // Output: undefined
   ```

**[⬆ back to top](#table-of-contents)**

### Kapan menggunakan arrow function?

Gunakan arrow function ketika:

- Anda membutuhkan sintaks yang ringkas.
- Anda ingin menggunakan fungsi tanpa konteks `this` khusus (seperti dalam
  callback atau IIFE).
- Anda tidak memerlukan `arguments` object.

Namun, hindari arrow function ketika:

- Anda butuh fungsi dengan `this` yang spesifik (seperti pada metode objek atau
  constructor).
- Anda ingin membuat fungsi generator.

**[⬆ back to top](#table-of-contents)**

## Resources

- [**w3schools:** JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
- [**MDN:** Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [`return` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [Function hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_hoisting)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [**MDN:** Guidelines for writing JavaScript code examples](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Clean Code - Functions](https://github.com/ryanmcdermott/clean-code-javascript?tab=readme-ov-file#functions)
- [Function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [Function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
- [Arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

**[⬆ back to top](#table-of-contents)**
