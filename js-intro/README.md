# Javascript Intro

[JavaScript](https://www.geeksforgeeks.org/javascript/) is a versatile,
dynamically typed programming language used for interactive web applications,
supporting both client-side and server-side development, and integrating
seamlessly with
[HTML](https://www.geeksforgeeks.org/html-tutorial/), [CSS](https://www.geeksforgeeks.org/css-tutorial/),
and a rich standard library.

## Table of contents

1. [Primitive data types dalam Javascript](#primitive-data-types-dalam-javascript)
2. [Informatives](#informatives)
3. [String length and indexing](#string-length-and-indexing)
4. [Variables](#variables)
5. [Javascript arithmetic](#javascript-arithmetic)
6. [Remainder operators](#remainder-operators)
7. [String concatenation](#string-concatenation)
8. [Comparison and logical operators](#comparison-and-logical-operators)
9. [Conditional statements](#conditional-statements)
10. [Truthy and falsy value](#truthy-and-falsy-value)
11. [Resources](#resources)

## **Primitive data types dalam Javascript**

Dalam JavaScript, **primitive data types** adalah tipe data yang tidak dapat
diubah (immutable) dan disalin dengan cara yang lebih sederhana dibandingkan
dengan tipe data lainnya (seperti objek). Ada 7 tipe data primitif yang ada
dalam JavaScript:

### 1. Number

Tipe data ini digunakan untuk menyimpan angka, baik bilangan bulat maupun
desimal. Tipe data **Number** dalam JavaScript juga dapat berupa
**bilangan positif** dan **bilangan negatif**. Selain itu, tipe data **Number**
juga bisa merepresentasikan nilai **nol (0)**, serta **bilangan desimal**
(floating point), seperti:

- **Bilangan Positif**: Angka yang lebih besar dari nol.
- **Bilangan Negatif**: Angka yang lebih kecil dari nol.
- **Nol (0)**: Tipe data number yang khusus.
- **Desimal**: Bilangan dengan titik desimal (floating point).
- **Infinity**: Sebuah nilai yang mewakili hasil dari operasi yang lebih besar
  dari batas maksimal bilangan dalam JavaScript.
- **-Infinity**: Sebuah nilai yang mewakili hasil dari operasi yang lebih kecil
  dari batas minimal bilangan dalam JavaScript.
- **NaN (Not-a-Number)**: Menunjukkan hasil dari operasi matematis yang tidak
  menghasilkan angka yang valid.

**Contoh:**

```javascript
let positif = 42; // Bilangan positif
let negatif = -25; // Bilangan negatif
let nol = 0; // Bilangan nol
let desimal = 3.14; // Bilangan desimal
let besar = Infinity; // Bilangan tak terhingga
let kecil = -Infinity; // Bilangan tak terhingga negatif
let notANumber = NaN; // Hasil operasi yang tidak valid
```

**Catatan:**

- **Infinity** dan **-Infinity** adalah nilai khusus yang digunakan ketika
  bilangan melebihi batas representasi angka yang dapat dilakukan oleh
  JavaScript.
- **NaN** adalah hasil dari operasi matematis yang tidak bisa menghasilkan
  angka yang valid, misalnya: `0 / 0` atau `Math.sqrt(-1)`.

**[⬆ back to top](#table-of-contents)**

### 2. String

Tipe data ini digunakan untuk menyimpan urutan karakter (teks). Tipe data ini
bisa berupa kombinasi huruf, angka, simbol, atau bahkan spasi yang dikelilingi
oleh tanda kutip.

**Contoh:**

```javascript
let name = "John"; // String dengan tanda kutip ganda
let greeting = 'Hello'; // String dengan tanda kutip tunggal
let message = `Hi!`; // String dengan template literal
```

**[⬆ back to top](#table-of-contents)**

### 3. Boolean

Tipe data ini hanya memiliki dua nilai: `true` atau `false`.

Boolean sering digunakan untuk:

1. **Pernyataan Kondisional**: Untuk mengevaluasi apakah sebuah kondisi `true`
   atau `false`.
2. **Mengontrol Alur Program**: Dalam `if` dan `else`, yang memutuskan
   jalannya program berdasarkan nilai `true` atau `false`.
3. **Operasi Logika**: Dalam operasi logika seperti `AND` (&&), `OR` (||), dan
   `NOT` (!).
4. **Operasi Perbandingan**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.

**Contoh:**

```javascript
let isRaining = true; // Kondisi benar
let hasUmbrella = false; // Kondisi salah

if (isRaining) {
  console.log("You should take an umbrella!");
} else {
  console.log("No umbrella needed.");
}
```

**[⬆ back to top](#table-of-contents)**

### 4. Undefined

Tipe data ini digunakan untuk menunjukkan bahwa suatu **variabel** telah
dideklarasikan tetapi belum diberi nilai atau belum diinisialisasi.

#### **Contoh penggunaan `undefined`:**

1. **Variabel yang Dideklarasikan tetapi Belum Diberi Nilai**:
   Ketika kita mendeklarasikan variabel tanpa memberikan nilai, JavaScript
   secara otomatis memberikan nilai `undefined`.

   ```javascript
   let x;
   console.log(x); // Output: undefined
   ```

   Pada contoh di atas, variabel `x` sudah dideklarasikan, tetapi belum diberi
   nilai, sehingga hasilnya adalah `undefined`.

2. **Fungsi yang Tidak Mengembalikan Nilai**:
   Jika sebuah fungsi tidak mengembalikan nilai (tidak ada `return`), maka
   fungsi tersebut secara otomatis mengembalikan `undefined`.

   ```javascript
   function greet() {
     console.log("Hello");
   }

   let result = greet(); // Output: Hello
   console.log(result); // Output: undefined
   ```

   Dalam kasus ini, fungsi `greet()` tidak mengembalikan apa pun, sehingga
   variabel `result` berisi `undefined`.

#### **Perbedaan antara `undefined` dan `null`**

Meskipun `undefined` dan `null` sering dianggap memiliki makna yang serupa
(kedua-duanya menunjukkan "ketiadaan" atau "kosong"), keduanya memiliki
perbedaan yang signifikan dalam JavaScript:

1. **`undefined`**:
   - **Default**: Merupakan nilai otomatis yang diberikan oleh JavaScript
     ketika sebuah variabel dideklarasikan tetapi belum diberi nilai.
   - **Tipe Data**: `undefined` adalah tipe data primitif yang berbeda dari
     `null`.
2. **`null`**:
   - **Ditugaskan oleh Programmer**: Merupakan nilai yang secara eksplisit
     ditetapkan oleh programmer untuk menunjukkan bahwa suatu variabel sengaja
     tidak memiliki nilai atau objek.
   - **Tipe Data**: Meskipun `null` sering dianggap sebagai objek, itu adalah
     nilai primitif yang terpisah.

#### **Nilai `undefined` dalam konteks lain**

1. **Pemeriksaan terhadap `undefined`**:
   Ketika kita ingin memeriksa apakah suatu variabel belum diberi nilai
   (yaitu `undefined`), kita bisa melakukannya dengan cara berikut:

   ```javascript
   let x;
   if (x === undefined) {
     console.log("x is undefined"); // Output: x is undefined
   }
   ```

   Sebagian besar developer lebih sering menggunakan **`typeof`** untuk
   memeriksa apakah suatu variabel adalah `undefined`, karena ini lebih aman
   (terhindar dari kesalahan jika variabel tersebut belum dideklarasikan sama
   sekali):

   ```javascript
   let y;
   if (typeof y === "undefined") {
     console.log("y is undefined"); // Output: y is undefined
   }
   ```

2. **Fungsi dengan Parameter Tidak Diberi Nilai**:
   Ketika fungsi dipanggil tanpa argumen untuk parameter yang diharapkan,
   parameter tersebut akan mendapatkan nilai `undefined` secara otomatis.

   ```javascript
   function greet(name) {
     console.log(name);
   }

   greet(); // Output: undefined (parameter 'name' tidak diberikan nilai)
   ```

3. **Mengakses Properti yang Tidak Ada pada Objek**:
   Jika kita mencoba mengakses properti yang tidak ada pada suatu objek,
   hasilnya adalah `undefined`.

   ```javascript
   let person = { name: "Alice" };
   console.log(person.age); // Output: undefined (karena properti 'age' tidak ada)
   ```

4. **Menggunakan `undefined` Secara Eksplisit**:
   Kita juga bisa memberikan nilai `undefined` secara eksplisit pada suatu
   variabel untuk menunjukkan bahwa variabel tersebut tidak memiliki nilai.

   ```javascript
   let x = undefined; // Variabel x diset ke 'undefined'
   console.log(x); // Output: undefined
   ```

   Meskipun demikian, biasanya kita menggunakan `null` jika ingin menunjukkan
   bahwa suatu variabel sengaja tidak memiliki nilai atau objek.

**[⬆ back to top](#table-of-contents)**

### 5. Null

Tipe data ini digunakan untuk menunjukkan bahwa **tidak ada nilai** atau
**tidak ada objek**. `null` sering digunakan untuk secara eksplisit menyatakan
bahwa sebuah variabel atau properti objek sengaja tidak memiliki nilai atau
objek yang valid.

#### **Deklarasi dan penggunaan `null`**

1. **Menginisialisasi Variabel dengan `null`**:
   Biasanya, `null` digunakan untuk menginisialisasi variabel yang nanti akan
   diisi dengan objek atau nilai lainnya. Ini membantu menunjukkan bahwa
   variabel tersebut belum memiliki objek yang valid.

   ```javascript
   let car = null;
   console.log(car); // Output: null
   ```

2. **Menggunakan `null` dalam Objek**:
   `null` sering digunakan untuk menghapus nilai atau mengatur nilai objek
   menjadi **tidak ada**. Hal ini berguna ketika kita ingin menghapus referensi
   atau menandakan bahwa objek tidak lagi digunakan.

   ```javascript
   let user = {
     name: "Alice",
     age: 25,
   };
   user = null; // Menghapus referensi objek
   console.log(user); // Output: null
   ```

3. **Pemeriksaan dengan `null`**:
   Kita dapat memeriksa apakah sebuah variabel atau objek berisi `null` untuk
   mengetahui apakah nilai atau objek tersebut sengaja dikosongkan.

   ```javascript
   let data = null;
   if (data === null) {
     console.log("Data is null");
   }
   ```

**[⬆ back to top](#table-of-contents)**

### 6. Symbol

Tipe data ini digunakan untuk membuat identitas unik dan sering digunakan
dalam objek. `Symbol` bersifat unik, artinya dua symbol yang berbeda tidak
akan pernah sama, meskipun deskripsinya sama.

**Contoh:**

```javascript
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // Output: false, karena symbol bersifat unik
```

**[⬆ back to top](#table-of-contents)**

### 7. BigInt

Tipe data ini digunakan untuk menyimpan angka yang lebih besar dari batasan
`Number` yang ada pada JavaScript (lebih dari 2^53 - 1).

**Contoh:**

```javascript
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // Output: 1234567890123456789012345678901234567890n
```

**[⬆ back to top](#table-of-contents)**

## **Informatives**

### Typeof operator

Operator `typeof` dalam JavaScript digunakan untuk memeriksa tipe data dari
sebuah nilai atau ekspresi. Dengan menggunakan `typeof`, kita dapat mengetahui
tipe dasar dari suatu variabel atau objek.

**Sintaks:**

```javascript
typeof operand;
```

> **operand**: Nilai atau ekspresi yang ingin kita periksa tipe datanya.

**Contoh penggunaan:**

```javascript
// Tipe data undefined
let a;
console.log(typeof a); // "undefined"

// Tipe data boolean
let isActive = true;
console.log(typeof isActive); // "boolean"

// Tipe data number
let age = 25;
console.log(typeof age); // "number"

// Tipe data string
let name = "Alice";
console.log(typeof name); // "string"

// Tipe data function
function greet() {}
console.log(typeof greet); // "function"

// Tipe data object
let person = { name: "Bob", age: 30 };
console.log(typeof person); // "object"

// Tipe data null (terlihat sebagai object, meskipun bug)
let obj = null;
console.log(typeof obj); // "object"

// Tipe data symbol
let sym = Symbol("id");
console.log(typeof sym); // "symbol"
```

**Catatan:**

1. **Fungsi** adalah tipe yang unik di JavaScript karena `typeof` mengembalikan
   `"function"` untuk fungsi, bukan `"object"`.
2. **null** dianggap sebagai objek oleh `typeof`, yang bisa membingungkan.
   Untuk memeriksa apakah nilai adalah `null`, kita harus menggunakan
   perbandingan eksplisit: `value === null`.
3. `typeof` tidak cocok untuk memeriksa tipe objek lebih lanjut
   (seperti array atau instance dari class), karena akan selalu mengembalikan
   `"object"` untuk objek, termasuk array dan `null`.

#### **Memeriksa array:**

Untuk memeriksa apakah sebuah variabel adalah array, kita biasanya menggunakan
`Array.isArray()` karena `typeof` hanya akan mengembalikan `"object"`.

```javascript
let arr = [1, 2, 3];
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true
```

**[⬆ back to top](#table-of-contents)**

### Length property

`length` adalah properti yang sangat berguna dalam JavaScript, yang digunakan
untuk mendapatkan panjang atau jumlah elemen dalam objek seperti string, array,
dan objek `arguments`. Properti ini dapat digunakan untuk mengetahui ukuran
koleksi data dalam berbagai struktur data.

#### 1. **Penggunaan pada string**

Pada string, properti `length` digunakan untuk mengetahui jumlah karakter dalam
string tersebut.

**Contoh:**

```javascript
let str = "Hello, World!";
console.log(str.length); // 13
```

> Di sini, `str.length` akan mengembalikan `13` karena ada 13 karakter dalam
> string `"Hello, World!"`, termasuk spasi dan tanda baca.

#### 2. **Penggunaan pada array**

Pada array, properti `length` digunakan untuk mengetahui jumlah elemen dalam
array tersebut.

**Contoh:**

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
```

> Di sini, `arr.length` akan mengembalikan `5` karena ada 5 elemen dalam array.

#### 3. **Penggunaan pada objek `arguments`**

`length` juga dapat digunakan pada objek `arguments` yang ada dalam fungsi.
Objek `arguments` adalah array-like object yang berisi semua argumen yang
diterima oleh fungsi.

**Contoh:**

```javascript
function sum() {
  console.log(arguments.length); // Menampilkan jumlah argumen yang diberikan
}

sum(1, 2, 3, 4); // 4
```

> Di sini, `arguments.length` akan mengembalikan `4` karena fungsi `sum`
> dipanggil dengan 4 argumen.

#### 4. **Modifikasi array dengan `length`**

Pada array, kita juga bisa memodifikasi panjang array dengan mengubah nilai
dari properti `length`.

**Contoh:** Menghapus elemen dari array

```javascript
let arr = [10, 20, 30, 40, 50];
arr.length = 3; // Memotong array sehingga hanya ada 3 elemen
console.log(arr); // [10, 20, 30]
```

> Ketika kita mengubah `arr.length = 3`, array akan dipotong sehingga hanya
> menyisakan tiga elemen pertama.

**Contoh:** Menambahkan elemen ke array

```javascript
let arr = [1, 2, 3];
arr.length = 5; // Menambahkan dua elemen "undefined" pada akhir array
console.log(arr); // [1, 2, 3, <2 empty slots>]
```

> Mengubah `arr.length` menjadi lebih besar dari jumlah elemen saat ini akan
> mengisi elemen-elemen yang baru dengan `undefined`.

**[⬆ back to top](#table-of-contents)**

## **String length and indexing**

Dalam JavaScript, **string length** dan **indexing** adalah konsep dasar yang
digunakan untuk mengukur panjang string dan mengakses karakter-karakter di
dalamnya.

### 1. String Length

String di JavaScript adalah urutan karakter, dan setiap karakter dalam string
memiliki posisi tertentu yang dimulai dari **0** (indeks pertama). Untuk
mengetahui panjang string, JavaScript menyediakan properti `length` yang
mengembalikan jumlah karakter dalam string tersebut.

**Contoh Penggunaan:**

```javascript
let str = "Hello, World!";
console.log(str.length); // Output: 13
```

Pada contoh di atas, string `"Hello, World!"` memiliki panjang 13 karakter
(termasuk spasi dan tanda baca).

**Penjelasan:**

- `str.length` mengembalikan jumlah karakter dalam string `str`.
- Jika string kosong, `str.length` akan mengembalikan `0`.

**[⬆ back to top](#table-of-contents)**

### 2. Indexing (Mengakses Karakter dalam String)

Karakter dalam string di JavaScript diakses menggunakan indeks numerik, mulai
dari **0** untuk karakter pertama hingga panjang string dikurangi 1 untuk
karakter terakhir. Anda dapat mengakses karakter menggunakan **notasi indeks**
(`str[index]`).

**Contoh Penggunaan:**

```javascript
let str = "Hello";
console.log(str[0]); // Output: "H"
console.log(str[4]); // Output: "o"
```

**Penjelasan:**

- `str[0]` mengakses karakter pertama dari string, yaitu `'H'`.
- `str[4]` mengakses karakter kelima, yaitu `'o'`.
- **Perhatian:** Jika Anda mencoba mengakses indeks di luar batas panjang
  string, misalnya `str[10]`, maka hasilnya adalah `undefined`.

**[⬆ back to top](#table-of-contents)**

### 3. Penggunaan Indexing untuk Mengakses Karakter Terakhir

Jika Anda ingin mengakses karakter terakhir dari string, Anda bisa menggunakan
indeks `length - 1`.

**Contoh Penggunaan:**

```javascript
let str = "Hello, World!";
console.log(str[str.length - 1]); // Output: "!"
```

Pada contoh ini, `str.length - 1` adalah indeks karakter terakhir dalam string,
yaitu tanda seru (`!`).

**[⬆ back to top](#table-of-contents)**

## **Variables**

Dalam JavaScript, **variabel** digunakan untuk menyimpan data yang bisa
digunakan dan dimanipulasi dalam program. Variabel memungkinkan kita untuk
menyimpan nilai (seperti angka, string, objek, dll.) dan kemudian mengaksesnya
atau mengubahnya selama eksekusi program.

Ada beberapa cara untuk mendeklarasikan variabel di JavaScript, yang
masing-masing memiliki sifat dan aturan berbeda.

### 1. Deklarasi variabel dengan `var`

`var` adalah cara tradisional untuk mendeklarasikan variabel di JavaScript.
Namun, `var` memiliki beberapa kelemahan, seperti ruang lingkup (scope) yang
terbatas pada fungsi atau global, dan bisa dideklarasikan ulang tanpa
memberikan peringatan.

**Contoh Penggunaan:**

```javascript
var x = 10;
console.log(x); // Output: 10

var x = 20; // Tidak ada error, bisa mendeklarasikan ulang
console.log(x); // Output: 20
```

**Kelemahan `var`:**

- **Hoisting:** Variabel yang dideklarasikan dengan `var` diangkat (hoisted)
  ke bagian atas fungsi atau konteks global, tetapi nilainya tidak
  diinisialisasi sampai baris deklarasi.
- **Scope global atau fungsi:** Variabel `var` hanya terbatas pada fungsi atau
  ruang lingkup global, tidak dapat dibatasi pada blok (seperti dalam loop
  atau pernyataan kondisional).

**[⬆ back to top](#table-of-contents)**

### 2. Deklarasi variabel dengan `let`

`let` adalah cara yang lebih modern untuk mendeklarasikan variabel, dan
diperkenalkan di ES6 (ECMAScript 2015). Berbeda dengan `var`, `let` memiliki
**block scope** (ruang lingkup blok), yang berarti variabel hanya dapat
diakses dalam blok kode tempatnya dideklarasikan
(seperti di dalam `if` atau `for`).

**Contoh Penggunaan:**

```javascript
let y = 30;
console.log(y); // Output: 30

if (true) {
  let y = 40; // Variabel y hanya tersedia di dalam blok ini
  console.log(y); // Output: 40
}

console.log(y); // Output: 30 (variabel luar tetap tidak berubah)
```

**Kelebihan `let`:**

- **Block scope:** Variabel yang dideklarasikan dengan `let` hanya bisa
  diakses dalam blok kode tempat variabel itu dideklarasikan.
- **Tidak bisa dideklarasikan ulang dalam satu blok.**

**[⬆ back to top](#table-of-contents)**

### 3. Deklarasi variabel dengan `const`

`const` juga diperkenalkan di ES6 dan digunakan untuk mendeklarasikan variabel
yang **nilai-nya tidak bisa diubah** setelah diinisialisasi (konstanta).
Seperti `let`, `const` juga memiliki **block scope**, tetapi variabel yang
dideklarasikan dengan `const` harus segera diinisialisasi dan tidak dapat
diubah setelah itu.

**Contoh Penggunaan:**

```javascript
const z = 50;
console.log(z); // Output: 50

// z = 60;  // Error: Assignment to constant variable.
```

**Kelebihan `const`:**

- **Konstanta:** Nilai dari variabel `const` tidak bisa diubah setelah
  deklarasi.
- **Block scope:** Sama seperti `let`, `const` juga memiliki block scope.

Namun, perlu dicatat bahwa meskipun Anda tidak bisa mengubah nilai primitif
dari variabel yang dideklarasikan dengan `const`, jika variabel tersebut
adalah objek atau array, Anda masih bisa mengubah properti atau elemen dari
objek atau array tersebut.

**Contoh dengan Objek:**

```javascript
const person = { name: "John", age: 30 };
person.age = 31; // Ini valid, karena kita mengubah nilai properti objek, bukan objek itu sendiri
console.log(person.age); // Output: 31

// person = { name: "Jane", age: 28 };  // Error: Assignment to constant variable
```

**[⬆ back to top](#table-of-contents)**

### 4. Scope dan hoisting

Selain perbedaan antara `var`, `let`, dan `const`, JavaScript juga memiliki
konsep **scope** (ruang lingkup) dan **hoisting**.

#### **Scope:**

- **Global Scope:** Variabel yang dideklarasikan di luar fungsi dapat diakses
  dari mana saja di seluruh program.
- **Function Scope:** Variabel yang dideklarasikan dengan `var` di dalam
  fungsi hanya dapat diakses di dalam fungsi tersebut.
- **Block Scope:** Variabel yang dideklarasikan dengan `let` dan `const` hanya
  dapat diakses di dalam blok tempat variabel tersebut dideklarasikan.

#### **Hoisting:**

- **Hoisting dengan `var`:** Variabel yang dideklarasikan dengan `var`
  diangkat ke bagian atas fungsi atau konteks global, tetapi hanya
  deklarasinya, bukan nilainya.
  ```javascript
  console.log(a); // Output: undefined
  var a = 5;
  console.log(a); // Output: 5
  ```
- **Hoisting dengan `let` dan `const`:** Meskipun deklarasinya diangkat,
  variabel yang dideklarasikan dengan `let` dan `const` berada dalam
  **temporal dead zone** (TDZ) hingga mereka dideklarasikan, sehingga akan
  menghasilkan error jika diakses sebelum dideklarasikan.
  ```javascript
  console.log(b); // Error: Cannot access 'b' before initialization
  let b = 10;
  ```

**[⬆ back to top](#table-of-contents)**

## **Javascript arithmetic**

**Operasi matematika** di JavaScript merujuk pada penggunaan operator untuk
melakukan perhitungan atau manipulasi angka (numerik) dalam program.
JavaScript menyediakan berbagai operator aritmatika dasar yang memungkinkan
kita untuk bekerja dengan angka dalam berbagai cara.

### 1. Operator aritmatika dasar

JavaScript menyediakan 5 operator dasar untuk operasi aritmatika, yaitu
penjumlahan, pengurangan, perkalian, pembagian, dan modulus (sisa bagi).

#### 1.1 **Penjumlahan (+)**

Operator `+` digunakan untuk menambahkan dua angka atau menggabungkan dua
string (concatenation).

**Contoh:**

```javascript
let a = 5;
let b = 3;
let sum = a + b; // 5 + 3 = 8
console.log(sum); // Output: 8

let text1 = "Hello, ";
let text2 = "World!";
let result = text1 + text2; // Menggabungkan string
console.log(result); // Output: "Hello, World!"
```

#### 1.2 **Pengurangan (-)**

Operator `-` digunakan untuk mengurangi satu angka dari angka lainnya.

**Contoh:**

```javascript
let a = 10;
let b = 4;
let difference = a - b; // 10 - 4 = 6
console.log(difference); // Output: 6
```

#### 1.3 **Perkalian (\*)**

Operator `*` digunakan untuk mengalikan dua angka.

**Contoh:**

```javascript
let a = 6;
let b = 7;
let product = a * b; // 6 * 7 = 42
console.log(product); // Output: 42
```

#### 1.4 **Pembagian (/)**

Operator `/` digunakan untuk membagi satu angka dengan angka lainnya. Hasilnya
adalah angka bertipe **floating point** (bilangan desimal).

**Contoh:**

```javascript
let a = 20;
let b = 4;
let quotient = a / b; // 20 / 4 = 5
console.log(quotient); // Output: 5

let x = 5;
let y = 2;
let result = x / y; // 5 / 2 = 2.5
console.log(result); // Output: 2.5
```

#### 1.5 **Modulus (%)**

Operator `%` digunakan untuk menemukan **sisa pembagian** antara dua angka.

**Contoh:**

```javascript
let a = 10;
let b = 3;
let remainder = a % b; // 10 % 3 = 1 (sisa bagi)
console.log(remainder); // Output: 1
```

**[⬆ back to top](#table-of-contents)**

### 2. Operator aritmatika tambahan

Selain operator dasar, JavaScript juga menyediakan beberapa operator tambahan
yang sering digunakan untuk mempermudah penulisan kode.

#### 2.1 **Increment (++)**

Operator `++` digunakan untuk menambah nilai variabel dengan 1. Ada dua jenis
penggunaan operator increment: **pre-increment** dan **post-increment**.

- **Pre-increment**: Menambah nilai sebelum digunakan.
- **Post-increment**: Menggunakan nilai sebelum menambahkannya.

**Contoh:**

```javascript
let a = 5;
console.log(a++); // Output: 5 (post-increment, menggunakan nilai lama)
console.log(a); // Output: 6 (nilai setelah increment)

let b = 5;
console.log(++b); // Output: 6 (pre-increment, nilai ditambah sebelum digunakan)
```

#### 2.2 **Decrement (--)**

Operator `--` digunakan untuk mengurangi nilai variabel dengan 1. Seperti
increment, ada dua jenis penggunaan: **pre-decrement** dan **post-decrement**.

- **Pre-decrement**: Mengurangi nilai sebelum digunakan.
- **Post-decrement**: Menggunakan nilai sebelum menguranginya.

**Contoh:**

```javascript
let a = 5;
console.log(a--); // Output: 5 (post-decrement, menggunakan nilai lama)
console.log(a); // Output: 4 (nilai setelah decrement)

let b = 5;
console.log(--b); // Output: 4 (pre-decrement, nilai dikurangi sebelum digunakan)
```

**[⬆ back to top](#table-of-contents)**

### 3. Operator penugasan (Assignment operators)

Operator penugasan digunakan untuk memberikan nilai baru kepada variabel.
Beberapa operator penugasan juga melakukan operasi matematika secara bersamaan.

#### 3.1 **Penugasan Dasar (=)**

Operator `=` digunakan untuk memberikan nilai kepada variabel.

**Contoh:**

```javascript
let a = 5; // Memberikan nilai 5 kepada variabel a
```

#### 3.2 **Penugasan dengan Operator Aritmatika (+=, -=, \*=, /=, %=)**

JavaScript juga mendukung operator penugasan yang menggabungkan operasi
matematika dengan penugasan, misalnya `+=` untuk penjumlahan dan penugasan.

**Contoh:**

```javascript
let a = 10;
a += 5; // a = a + 5 => 10 + 5 = 15
console.log(a); // Output: 15

let b = 20;
b -= 10; // b = b - 10 => 20 - 10 = 10
console.log(b); // Output: 10

let c = 4;
c *= 3; // c = c * 3 => 4 * 3 = 12
console.log(c); // Output: 12

let d = 15;
d /= 3; // d = d / 3 => 15 / 3 = 5
console.log(d); // Output: 5

let e = 17;
e %= 5; // e = e % 5 => 17 % 5 = 2 (sisa bagi)
console.log(e); // Output: 2
```

**[⬆ back to top](#table-of-contents)**

### 4. Prioritas operator (Operator precedence)

Sama seperti di bahasa pemrograman lainnya, **prioritas operator** di
JavaScript menentukan urutan operasi matematika mana yang dilakukan terlebih
dahulu. Secara umum, operasi perkalian (`*`), pembagian (`/`), dan
modulus (`%`) memiliki prioritas lebih tinggi dibandingkan dengan
penjumlahan (`+`) dan pengurangan (`-`).

**Contoh:**

```javascript
let result = 5 + 2 * 3; // 2 * 3 = 6, kemudian 5 + 6 = 11
console.log(result); // Output: 11
```

Untuk memaksa urutan tertentu, Anda bisa menggunakan tanda kurung `()`.

```javascript
let result = (5 + 2) * 3; // (5 + 2) = 7, kemudian 7 * 3 = 21
console.log(result); // Output: 21
```

**[⬆ back to top](#table-of-contents)**

### 5. Penyelesaian masalah dengan NaN (Not a Number)

Kadang-kadang, operasi matematika bisa menghasilkan nilai yang tidak
terdefinisi, yang disebut **NaN** (Not a Number). Misalnya, jika Anda mencoba
membagi angka dengan `0` atau melakukan operasi yang tidak valid lainnya.

**Contoh:**

```javascript
let result = 0 / 0; // Pembagian dengan 0 menghasilkan NaN
console.log(result); // Output: NaN

let invalid = "hello" * 2; // Operasi perkalian yang tidak valid dengan string
console.log(invalid); // Output: NaN
```

Untuk memeriksa apakah suatu nilai adalah `NaN`, Anda bisa menggunakan fungsi
`isNaN()`.

```javascript
let result = 0 / 0;
console.log(isNaN(result)); // Output: true
```

**[⬆ back to top](#table-of-contents)**

## **Remainder operators**

Operator **remainder** dalam JavaScript (yang sering dikenal dengan nama
**modulus** atau **mod**), dilambangkan dengan tanda persen (`%`). Operator
ini digunakan untuk menghasilkan sisa pembagian antara dua angka.

### Sintaks

```javascript
let hasil = a % b;
```

- `a`: angka pertama (dividend).
- `b`: angka kedua (divisor).
- `hasil`: sisa pembagian antara `a` dan `b`.

### Cara Kerja Operator `%`

1. Operator `%` membagi `a` dengan `b`.
2. Kemudian, operator ini **menghasilkan sisa** dari pembagian tersebut, yang
   disebut dengan "remainder" atau "modulus".

Sebagai contoh:

```javascript
let hasil = 10 % 3; // hasil adalah 1, karena 10 dibagi 3 sisanya 1
console.log(hasil); // Output: 1
```

Penjelasan:

- `10` dibagi dengan `3`, menghasilkan 3 sebagai hasil pembagian (karena
  3 \* 3 = 9) dan sisa 1.
- Jadi, `10 % 3` adalah `1`.

**[⬆ back to top](#table-of-contents)**

### Kasus Khusus dengan Negatif

Jika salah satu dari angka yang digunakan adalah negatif, hasil dari operator
`%` akan mempertahankan tanda dari **dividend** (angka pertama, `a`).

**Contoh:**

```javascript
console.log(10 % 3); // Output: 1
console.log(-10 % 3); // Output: -1
console.log(10 % -3); // Output: 1
console.log(-10 % -3); // Output: -1
```

Penjelasan:

- Pada kasus `-10 % 3`, kita memiliki pembagian `-10 ÷ 3`. Hasil pembagiannya
  adalah -4 (karena -4 \* 3 = -12) dengan sisa `-10 - (-12) = -1`. Jadi,
  `-10 % 3` adalah `-1`.
- Pada kasus `10 % -3`, hasil pembagian adalah -3 dengan sisa `1`, jadi
  `10 % -3` adalah `1`.

### Penerapan Umum Operator Remainder

Operator `%` sering digunakan dalam berbagai situasi, seperti:

1. **Menentukan apakah sebuah angka genap atau ganjil**:

   - Angka genap jika hasil bagi angka tersebut dengan 2 adalah 0.
   - Angka ganjil jika hasil sisa pembagiannya adalah 1.

   ```javascript
   let angka = 7;
   if (angka % 2 === 0) {
     console.log(angka + " adalah genap");
   } else {
     console.log(angka + " adalah ganjil");
   }
   ```

2. **Looping atau perulangan berdasarkan interval**:

   - Anda dapat menggunakan operator `%` untuk melakukan sesuatu setiap `n`
     iterasi. Misalnya, melakukan aksi setiap 5 langkah.

   ```javascript
   for (let i = 0; i < 20; i++) {
     if (i % 5 === 0) {
       console.log(i + " adalah kelipatan 5");
     }
   }
   ```

3. **Membatasi nilai dalam rentang tertentu**:

   - Jika Anda ingin menjaga angka tetap berada dalam rentang tertentu
     (misalnya, angka antara 0 dan 9), Anda dapat menggunakan operator
     modulus.

   ```javascript
   let angka = 12;
   let batas = 10;
   let hasil = angka % batas; // Hasilnya adalah 2, karena 12 % 10 = 2
   console.log(hasil); // Output: 2
   ```

4. **Menentukan kelipatan tertentu**:

   - Modulus juga digunakan untuk menentukan apakah angka adalah kelipatan
     dari angka lainnya.

   ```javascript
   let angka = 25;
   if (angka % 5 === 0) {
     console.log(angka + " adalah kelipatan 5");
   }
   ```

**[⬆ back to top](#table-of-contents)**

## **String concatenation**

**String concatenation** (penggabungan string) dalam JavaScript adalah proses
menggabungkan dua atau lebih string menjadi satu string tunggal. Proses ini
sangat berguna saat Anda ingin membangun pesan, membuat URL, atau menyatukan
data yang bersumber dari beberapa variabel atau nilai.

### Cara Kerja String Concatenation

JavaScript menyediakan beberapa cara untuk menggabungkan string, antara lain
dengan menggunakan operator **plus (`+`)** dan **template literals**
(menggunakan backtick, `` ` ``).

### 1. Menggunakan Operator Plus (`+`)

Operator plus (`+`) adalah cara paling dasar dan umum untuk menggabungkan
string dalam JavaScript.

**Sintaks:**

```javascript
let hasil = string1 + string2;
```

**Contoh:**

```javascript
let pertama = "Hello";
let kedua = "World!";
let gabungan = pertama + " " + kedua; // Menambahkan spasi di antara string
console.log(gabungan); // Output: "Hello World!"
```

Pada contoh di atas:

- Variabel `pertama` berisi string `"Hello"`, dan `kedua` berisi string
  `"World!"`.
- Dengan menggunakan operator `+`, kedua string digabungkan menjadi satu
  string `"Hello World!"`.

#### **Menambahkan Variabel dan Teks:**

```javascript
let nama = "Alice";
let usia = 25;
let pesan = nama + " is " + usia + " years old.";
console.log(pesan); // Output: "Alice is 25 years old."
```

Pada contoh ini, kita menggabungkan teks dengan nilai variabel, sehingga
menghasilkan kalimat yang lengkap.

**[⬆ back to top](#table-of-contents)**

### 2. Menggunakan Template Literals (Template Strings)

Template literals adalah fitur yang diperkenalkan di **ES6** yang memungkinkan
penggabungan string dengan cara yang lebih fleksibel dan mudah dibaca.
Template literals menggunakan tanda backtick (`` ` ``) dan memungkinkan
penggunaan **interpolasi** variabel di dalamnya menggunakan `${}`.

**Sintaks:**

```javascript
let hasil = `${string1} ${string2}`;
```

**Contoh:**

```javascript
let pertama = "Hello";
let kedua = "World!";
let gabungan = `${pertama} ${kedua}`;
console.log(gabungan); // Output: "Hello World!"
```

Pada contoh di atas:

- Variabel `pertama` dan `kedua` digabungkan di dalam template literal
  menggunakan `${}`.
- `gabungan` akan menghasilkan `"Hello World!"`, sama seperti contoh
  sebelumnya, tetapi lebih bersih dan mudah dibaca.

#### **Menambahkan Variabel dan Teks dengan Template Literals:**

```javascript
let nama = "Alice";
let usia = 25;
let pesan = `${nama} is ${usia} years old.`;
console.log(pesan); // Output: "Alice is 25 years old."
```

Keuntungan utama dari template literals adalah **kemampuan untuk menyisipkan
ekspresi** langsung di dalam string tanpa memerlukan operator `+`.

**[⬆ back to top](#table-of-contents)**

### 3. Penggabungan dengan Banyak Variabel atau Teks

Anda dapat menggabungkan banyak variabel dan teks dalam satu string dengan
menggunakan kedua metode di atas. Berikut adalah contoh keduanya:

#### **Menggunakan Operator `+`:**

```javascript
let pertama = "My name is";
let nama = "John";
let usia = 30;
let pesan = pertama + " " + nama + " and I am " + usia + " years old.";
console.log(pesan); // Output: "My name is John and I am 30 years old."
```

#### **Menggunakan Template Literals:**

```javascript
let pertama = "My name is";
let nama = "John";
let usia = 30;
let pesan = `${pertama} ${nama} and I am ${usia} years old.`;
console.log(pesan); // Output: "My name is John and I am 30 years old."
```

Pada kedua contoh di atas, kita menggabungkan lebih dari dua string, tetapi
dengan template literals, kode menjadi lebih mudah dibaca dan lebih elegan.

**[⬆ back to top](#table-of-contents)**

### 4. Concatenation dengan Karakter Baru (Newline, Tab, dll.)

Template literals juga mendukung penggabungan string dengan karakter baru
seperti **newline** (`\n`) atau **tab** (`\t`) dengan cara yang lebih alami.
Berikut adalah contoh menggunakan newline dan tab:

```javascript
let nama = "Alice";
let usia = 25;
let alamat = "New York";

let pesan = `${nama} is ${usia} years old.
She lives in ${alamat}.`;

console.log(pesan);
// Output:
// Alice is 25 years old.
// She lives in New York.
```

Pada contoh ini:

- String yang digabungkan menggunakan template literals menghasilkan **baris
  baru** secara otomatis ketika kita menekan Enter.
- Anda bisa menggunakan newline, tab, dan karakter khusus lainnya langsung di
  dalam template literals.

**[⬆ back to top](#table-of-contents)**

### 5. Penggunaan `String.prototype.concat()`

Selain menggunakan operator `+` dan template literals, JavaScript juga
menyediakan metode `concat()` yang dapat digunakan untuk menggabungkan dua
string atau lebih.

**Sintaks:**

```javascript
let hasil = string1.concat(string2, string3, ...);
```

**Contoh:**

```javascript
let pertama = "Hello";
let kedua = "World!";
let gabungan = pertama.concat(" ", kedua);
console.log(gabungan); // Output: "Hello World!"
```

Namun, penggunaan metode `concat()` tidak sepopuler operator `+` atau template
literals karena sintaksnya yang lebih panjang.

**[⬆ back to top](#table-of-contents)**

### Kapan Menggunakan Metode Mana?

1. **Operator `+`**: Sangat sederhana dan mudah digunakan untuk menggabungkan
   beberapa string.

   - **Kelebihan**: Mudah dipahami, cocok untuk penggabungan string sederhana.
   - **Kekurangan**: Menjadi lebih sulit dibaca jika banyak variabel yang
     digabungkan, terutama jika menggabungkan teks statis dan variabel.

2. **Template Literals**: Lebih modern dan bersih, memudahkan pembacaan dan
   pemeliharaan kode.

   - **Kelebihan**: Menyediakan interpolasi variabel, lebih fleksibel,
     mendukung ekspresi langsung, dan mendukung multi-line string.
   - **Kekurangan**: Diperkenalkan di ES6, jadi jika Anda mendukung
     lingkungan yang lebih lama, pastikan kompatibilitasnya.

3. **Metode `concat()`**: Dapat digunakan untuk menggabungkan beberapa string,
   tetapi lebih jarang digunakan dalam praktik.
   - **Kelebihan**: Bisa menggabungkan banyak string dalam satu panggilan
     fungsi.
   - **Kekurangan**: Lebih verbose daripada menggunakan operator `+` atau
     template literals.

**[⬆ back to top](#table-of-contents)**

## **Comparison and logical operators**

Dalam JavaScript, **comparison operators** dan **logical operators** adalah
dua jenis operator yang sering digunakan untuk membandingkan nilai dan
menentukan kondisi dalam kontrol alur program seperti _if statements_,
_loops_, dan ekspresi logika lainnya. Berikut adalah penjelasan lengkap
mengenai kedua jenis operator ini.

### 1. Comparison Operators (Operator Perbandingan)

**Comparison operators** digunakan untuk membandingkan dua nilai. Operator ini
menghasilkan nilai **boolean** (true atau false) tergantung pada hasil
perbandingan.

#### **Daftar Comparison Operators:**

1. **`==` (Equal to)**  
   Membandingkan dua nilai untuk kesetaraan **tanpa memeriksa tipe data**
   (perbandingan non-strict).

   ```javascript
   5 == "5"; // true, karena hanya memeriksa nilai tanpa peduli tipe data
   ```

2. **`===` (Strict equal to)**  
   Membandingkan dua nilai **dengan memeriksa tipe data** dan nilai yang
   sesungguhnya.

   ```javascript
   5 === "5"; // false, karena tipe data berbeda (number vs string)
   5 === 5; // true
   ```

3. **`!=` (Not equal to)**  
   Membandingkan dua nilai untuk **ketidaksamaan** **tanpa memeriksa tipe
   data**.

   ```javascript
   5 != "5"; // false, karena nilainya sama meskipun tipe datanya berbeda
   ```

4. **`!==` (Strict not equal to)**  
   Membandingkan dua nilai untuk **ketidaksamaan**, dengan memeriksa **baik
   nilai maupun tipe data**.

   ```javascript
   5 !== "5"; // true, karena tipe datanya berbeda
   5 !== 5; // false, karena nilai dan tipe datanya sama
   ```

5. **`>` (Greater than)**  
   Memeriksa apakah nilai di sebelah kiri lebih besar dari nilai di sebelah
   kanan.

   ```javascript
   10 > 5; // true
   3 > 8; // false
   ```

6. **`<` (Less than)**  
   Memeriksa apakah nilai di sebelah kiri lebih kecil dari nilai di sebelah
   kanan.

   ```javascript
   3 < 5; // true
   10 < 5; // false
   ```

7. **`>=` (Greater than or equal to)**  
   Memeriksa apakah nilai di sebelah kiri lebih besar atau sama dengan nilai
   di sebelah kanan.

   ```javascript
   10 >= 5; // true
   5 >= 5; // true
   3 >= 5; // false
   ```

8. **`<=` (Less than or equal to)**  
   Memeriksa apakah nilai di sebelah kiri lebih kecil atau sama dengan nilai
   di sebelah kanan.
   ```javascript
   3 <= 5; // true
   5 <= 5; // true
   10 <= 5; // false
   ```

**Contoh Penggunaan:**

```javascript
let a = 10;
let b = 20;

console.log(a == b); // false, karena 10 tidak sama dengan 20
console.log(a !== b); // true, karena 10 berbeda dengan 20
console.log(a < b); // true, karena 10 lebih kecil dari 20
console.log(a >= 10); // true, karena 10 lebih besar atau sama dengan 10
```

**[⬆ back to top](#table-of-contents)**

### 2. Logical Operators (Operator Logika)

**Logical operators** digunakan untuk menggabungkan ekspresi boolean dan
menghasilkan nilai boolean berdasarkan kondisi yang ada. Mereka sangat sering
digunakan dalam _if statements_ dan perulangan untuk menentukan apakah suatu
kondisi terpenuhi.

#### **Daftar Logical Operators:**

1. **`&&` (Logical AND)**  
   Operator `&&` mengembalikan **true** hanya jika kedua ekspresi yang
   dibandingkan bernilai true. Jika salah satu ekspresi bernilai false, maka
   hasilnya false.

   ```javascript
   true && true; // true
   true && false; // false
   false && true; // false
   false && false; // false
   ```

   - Jika kedua ekspresi bernilai true, maka hasilnya adalah true.
   - Jika salah satu ekspresi bernilai false, maka hasilnya adalah false.

2. **`||` (Logical OR)**  
   Operator `||` mengembalikan **true** jika salah satu ekspresi bernilai
   true. Jika kedua ekspresi bernilai false, maka hasilnya adalah false.

   ```javascript
   true || true; // true
   true || false; // true
   false || true; // true
   false || false; // false
   ```

   - Jika salah satu ekspresi bernilai true, maka hasilnya adalah true.
   - Jika kedua ekspresi bernilai false, maka hasilnya adalah false.

3. **`!` (Logical NOT)**  
   Operator `!` digunakan untuk membalik nilai boolean. Jika ekspresi bernilai
   true, maka hasilnya false, dan jika ekspresi bernilai false, hasilnya true.

   ```javascript
   !true; // false
   !false; // true
   ```

   - Jika ekspresi bernilai true, maka `!` akan mengubahnya menjadi false.
   - Jika ekspresi bernilai false, maka `!` akan mengubahnya menjadi true.

#### **Penggunaan dalam Kombinasi:**

Operator logika sering digunakan untuk menggabungkan beberapa kondisi dalam
pernyataan bersyarat.

```javascript
let x = 10;
let y = 20;
let z = 30;

if (x < y && y < z) {
  console.log("x lebih kecil dari y dan y lebih kecil dari z");
}
// Output: x lebih kecil dari y dan y lebih kecil dari z

if (x < y || y > z) {
  console.log("x lebih kecil dari y atau y lebih besar dari z");
}
// Output: x lebih kecil dari y atau y lebih besar dari z

if (!(x === 10)) {
  console.log("x bukan 10");
} else {
  console.log("x adalah 10");
}
// Output: x adalah 10
```

Pada contoh di atas:

- Pada kondisi pertama, `x < y && y < z`, kedua kondisi harus benar (true)
  agar blok kode dieksekusi.
- Pada kondisi kedua, `x < y || y > z`, cukup salah satu kondisi yang benar
  agar blok kode dijalankan.
- Pada kondisi ketiga, `!(x === 10)` membalikkan hasil dari `x === 10`, yang
  berarti kondisi ini akan menghasilkan false jika `x === 10`.

**[⬆ back to top](#table-of-contents)**

### Kombinasi Comparison dan Logical Operators

Kadang-kadang Anda perlu menggabungkan operator perbandingan dan logika untuk
membentuk ekspresi yang lebih kompleks. Berikut adalah contoh kombinasi
keduanya:

```javascript
let umur = 25;
let statusPernikahan = "single";

// Memeriksa apakah umur lebih dari 18 dan status pernikahan adalah single
if (umur > 18 && statusPernikahan === "single") {
  console.log("Kamu dewasa dan belum menikah.");
} else {
  console.log("Kamu tidak memenuhi kriteria.");
}
```

Di sini, dua ekspresi dibandingkan dengan menggunakan `&&`, sehingga kedua
kondisi harus bernilai `true` agar pesan `"Kamu dewasa dan belum menikah."`
ditampilkan.

**[⬆ back to top](#table-of-contents)**

## **Conditional statements**

**Conditional statements** (pernyataan bersyarat) dalam JavaScript adalah
struktur yang memungkinkan program untuk mengeksekusi bagian tertentu dari
kode tergantung pada apakah suatu kondisi bernilai **true** atau **false**.
Conditional statements sangat penting dalam pengambilan keputusan dan
pengendalian alur eksekusi program.

Berikut adalah penjelasan dan contoh penggunaan dari **if**, **else if**,
**else**, dan **switch** dalam JavaScript.

### 1. `if` Statement

Pernyataan `if` digunakan untuk mengevaluasi suatu kondisi, dan jika kondisi
tersebut bernilai `true`, maka kode di dalam blok `if` akan dijalankan.

**Sintaks:**

```javascript
if (kondisi) {
  // kode yang akan dijalankan jika kondisi bernilai true
}
```

**Contoh:**

```javascript
let angka = 10;

if (angka > 5) {
  console.log("Angka lebih besar dari 5");
}
// Output: "Angka lebih besar dari 5"
```

Penjelasan:

- Kondisi `angka > 5` bernilai `true`, sehingga kode di dalam blok `if`
  dijalankan.

**[⬆ back to top](#table-of-contents)**

### 2. `else` Statement

Pernyataan `else` digunakan bersama dengan `if` untuk mengeksekusi blok kode
jika kondisi pada `if` bernilai `false`.

**Sintaks:**

```javascript
if (kondisi) {
  // kode yang dijalankan jika kondisi bernilai true
} else {
  // kode yang dijalankan jika kondisi bernilai false
}
```

**Contoh:**

```javascript
let angka = 3;

if (angka > 5) {
  console.log("Angka lebih besar dari 5");
} else {
  console.log("Angka kurang dari atau sama dengan 5");
}
// Output: "Angka kurang dari atau sama dengan 5"
```

Penjelasan:

- Kondisi `angka > 5` bernilai `false`, sehingga blok kode di dalam `else`
  yang dijalankan.

**[⬆ back to top](#table-of-contents)**

### 3. `else if` Statement

Pernyataan `else if` digunakan jika ada beberapa kondisi yang perlu dievaluasi
secara berturut-turut. Jika kondisi pertama `false`, maka JavaScript akan
mengevaluasi kondisi berikutnya yang ada di `else if`.

**Sintaks:**

```javascript
if (kondisi1) {
  // kode yang dijalankan jika kondisi1 bernilai true
} else if (kondisi2) {
  // kode yang dijalankan jika kondisi2 bernilai true
} else {
  // kode yang dijalankan jika semua kondisi di atas bernilai false
}
```

**Contoh:**

```javascript
let angka = 8;

if (angka > 10) {
  console.log("Angka lebih besar dari 10");
} else if (angka === 8) {
  console.log("Angka adalah 8");
} else {
  console.log("Angka tidak lebih besar dari 10 dan bukan 8");
}
// Output: "Angka adalah 8"
```

Penjelasan:

- Kondisi pertama `angka > 10` bernilai `false`, maka `else if` yang
  mengevaluasi `angka === 8` dieksekusi, karena kondisi ini bernilai `true`.

**[⬆ back to top](#table-of-contents)**

### 4. `switch` Statement

Pernyataan `switch` digunakan untuk memeriksa sebuah nilai dan mencocokkannya
dengan beberapa kemungkinan kasus. Switch statement lebih efisien daripada
menggunakan banyak `else if` dalam beberapa situasi.

**Sintaks:**

```javascript
switch (ekspresi) {
  case nilai1:
    // kode yang dijalankan jika ekspresi === nilai1
    break;
  case nilai2:
    // kode yang dijalankan jika ekspresi === nilai2
    break;
  default:
  // kode yang dijalankan jika ekspresi tidak cocok dengan nilai1 atau nilai2
}
```

**Contoh:**

```javascript
let hari = 3;

switch (hari) {
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
    console.log("Weekend");
}
// Output: "Rabu"
```

Penjelasan:

- Dalam contoh ini, `switch` mengevaluasi nilai `hari` dan mencocokkannya
  dengan `case 3`, sehingga outputnya adalah "Rabu".
- Setelah setiap `case`, kita menggunakan `break` untuk menghentikan eksekusi
  setelah menemui kecocokan. Jika tidak ada `break`, eksekusi akan terus
  berlanjut ke `case` berikutnya.

**[⬆ back to top](#table-of-contents)**

### 5. `ternary` Operator (Conditional Operator)

Ternary operator adalah bentuk singkat dari `if-else`. Ini memungkinkan Anda
untuk membuat keputusan dalam satu baris kode. Operator ini memiliki bentuk
seperti berikut:

**Sintaks:**

```javascript
kondisi ? ekspresiTrue : ekspresiFalse;
```

**Contoh:**

```javascript
let angka = 5;
let hasil =
  angka > 10 ? "Lebih besar dari 10" : "Kurang dari atau sama dengan 10";
console.log(hasil); // Output: "Kurang dari atau sama dengan 10"
```

Penjelasan:

- Jika kondisi `angka > 10` bernilai `true`, maka `hasil` akan berisi "Lebih
  besar dari 10".
- Jika kondisi `angka > 10` bernilai `false`, maka `hasil` akan berisi "Kurang
  dari atau sama dengan 10".

Ternary operator sangat berguna untuk ekspresi yang sederhana, di mana Anda
ingin memeriksa suatu kondisi dan langsung mengambil keputusan berdasarkan
hasilnya.

**[⬆ back to top](#table-of-contents)**

### 6. Penggunaan Kondisional Bersarang (Nested Conditional Statements)

Kadang-kadang Anda perlu menempatkan `if` di dalam `if` (bersarang) untuk
membuat keputusan yang lebih kompleks.

**Contoh:**

```javascript
let umur = 20;
let status = "single";

if (umur > 18) {
  if (status === "single") {
    console.log("Kamu sudah dewasa dan masih single");
  } else {
    console.log("Kamu sudah dewasa dan sudah menikah");
  }
} else {
  console.log("Kamu masih di bawah umur");
}
// Output: "Kamu sudah dewasa dan masih single"
```

Penjelasan:

- Pada contoh ini, kondisi pertama memeriksa apakah `umur > 18`. Jika ya, maka
  lanjut memeriksa apakah `status === "single"`.
- Jika `umur <= 18`, maka program langsung mencetak "Kamu masih di bawah umur".

**[⬆ back to top](#table-of-contents)**

## **Truthy and falsy value**

Dalam JavaScript, **truthy** dan **falsy** merujuk pada nilai-nilai yang
dievaluasi sebagai **`true`** atau **`false`** ketika digunakan dalam konteks
boolean, seperti dalam _conditional statements_ (`if`, `while`, dll).
Meskipun JavaScript hanya memiliki dua nilai boolean, yaitu `true` dan
`false`, ada banyak nilai yang **secara implisit** dianggap `true` (truthy)
atau `false` (falsy) dalam perbandingan dan logika.

### Falsy Values

Nilai-nilai yang **falsy** adalah nilai yang dianggap `false` ketika
dievaluasi dalam konteks boolean. JavaScript memiliki **7 nilai falsy** yang
spesifik.

#### **7 Nilai Falsy dalam JavaScript:**

1. **`false`** — Nilai boolean `false` itu sendiri.
2. **`0`** — Angka nol.
3. **`-0`** — Angka nol negatif.
4. **`""` (String kosong)** — String kosong.
5. **`null`** — Nilai khusus yang menunjukkan tidak adanya nilai atau objek.
6. **`undefined`** — Variabel yang belum diinisialisasi atau tidak ada nilai.
7. **`NaN`** — Not a Number, hasil dari operasi matematika yang tidak valid,
   seperti `0 / 0`.

#### **Contoh Nilai Falsy:**

```javascript
if (false) {
  console.log("Ini akan dieksekusi");
} else {
  console.log("Ini tidak akan dieksekusi");
}
// Output: "Ini tidak akan dieksekusi"

if (0) {
  console.log("Ini akan dieksekusi");
} else {
  console.log("Ini tidak akan dieksekusi");
}
// Output: "Ini tidak akan dieksekusi"

if ("") {
  console.log("Ini akan dieksekusi");
} else {
  console.log("Ini tidak akan dieksekusi");
}
// Output: "Ini tidak akan dieksekusi"

if (null) {
  console.log("Ini akan dieksekusi");
} else {
  console.log("Ini tidak akan dieksekusi");
}
// Output: "Ini tidak akan dieksekusi"

if (undefined) {
  console.log("Ini akan dieksekusi");
} else {
  console.log("Ini tidak akan dieksekusi");
}
// Output: "Ini tidak akan dieksekusi"

if (NaN) {
  console.log("Ini akan dieksekusi");
} else {
  console.log("Ini tidak akan dieksekusi");
}
// Output: "Ini tidak akan dieksekusi"
```

Penjelasan:

- Semua nilai di atas akan dianggap `false` dalam pernyataan bersyarat atau
  ekspresi boolean.
- Sebagai contoh, jika sebuah variabel berisi `null`, maka `if (null)` akan
  dieksekusi di bagian `else`, karena `null` adalah falsy.

**[⬆ back to top](#table-of-contents)**

### Truthy Values

Sementara itu, **truthy values** adalah nilai-nilai yang dianggap `true` dalam
konteks boolean, meskipun secara eksplisit bukan nilai boolean `true`. Semua
nilai lain yang **bukan falsy** dianggap truthy.

#### **Beberapa Contoh Nilai Truthy:**

1. **`true`** — Nilai boolean `true` itu sendiri.
2. **Non-empty string** — String yang tidak kosong, misalnya `"Hello"`.
3. **Non-zero numbers** — Angka selain `0`, seperti `1`, `-1`, `100`, dan
   seterusnya.
4. **Objects** — Objek apapun, seperti `{}`, `[]` (array kosong).
5. **Functions** — Fungsi apapun, misalnya `function() {}`.
6. **`Infinity` dan `-Infinity`** — Kedua nilai ini juga dianggap truthy.

#### **Contoh Nilai Truthy:**

```javascript
if (true) {
  console.log("Ini akan dieksekusi");
} else {
  console.log("Ini tidak akan dieksekusi");
}
// Output: "Ini akan dieksekusi"

if ("Hello") {
  console.log("Ini akan dieksekusi");
} else {
  console.log("Ini tidak akan dieksekusi");
}
// Output: "Ini akan dieksekusi"

if (1) {
  console.log("Ini akan dieksekusi");
} else {
  console.log("Ini tidak akan dieksekusi");
}
// Output: "Ini akan dieksekusi"

if ({}) {
  console.log("Ini akan dieksekusi");
} else {
  console.log("Ini tidak akan dieksekusi");
}
// Output: "Ini akan dieksekusi"

if ([]) {
  console.log("Ini akan dieksekusi");
} else {
  console.log("Ini tidak akan dieksekusi");
}
// Output: "Ini akan dieksekusi"

if (function () {}) {
  console.log("Ini akan dieksekusi");
} else {
  console.log("Ini tidak akan dieksekusi");
}
// Output: "Ini akan dieksekusi"

if (Infinity) {
  console.log("Ini akan dieksekusi");
} else {
  console.log("Ini tidak akan dieksekusi");
}
// Output: "Ini akan dieksekusi"
```

Penjelasan:

- Nilai selain **7 falsy** di atas dianggap truthy. Sebagai contoh, string
  `"Hello"`, objek `{}`, array `[]`, angka selain `0` seperti `1` atau `-1`,
  dan fungsi adalah nilai-nilai truthy.

**[⬆ back to top](#table-of-contents)**

### Contoh Penggunaan dalam Conditional Statements

Penggunaan **truthy** dan **falsy** sangat berguna dalam pernyataan bersyarat
(`if`, `while`, dll.). Dalam JavaScript, Anda sering tidak perlu melakukan
perbandingan eksplisit dengan `true` atau `false`. Cukup dengan menuliskan
nilai yang ingin dievaluasi dalam kondisi.

**Contoh:**

```javascript
let x = "Hello";

if (x) {
  console.log("x adalah truthy"); // Karena x berisi string non-kosong, maka ini adalah truthy
} else {
  console.log("x adalah falsy");
}

let y = 0;

if (y) {
  console.log("y adalah truthy");
} else {
  console.log("y adalah falsy"); // 0 adalah falsy
}
```

Penjelasan:

- Pada kode di atas, `x` adalah string non-kosong, yang merupakan nilai
  truthy, sehingga blok `if` dijalankan.
- `y` adalah `0`, yang merupakan nilai falsy, sehingga blok `else` yang
  dijalankan.

**[⬆ back to top](#table-of-contents)**

### Menggunakan Default Values dengan Falsy

Salah satu penggunaan praktis dari **falsy** dan **truthy** adalah memberikan
**nilai default** jika sebuah variabel tidak memiliki nilai yang valid
(misalnya `null`, `undefined`, atau string kosong).

**Contoh:**

```javascript
let nama = "";
let pesan = nama || "Nama tidak tersedia";
console.log(pesan); // Output: "Nama tidak tersedia"
```

Penjelasan:

- Karena `nama` adalah string kosong (nilai falsy), maka operator `||` (OR)
  akan memilih nilai kedua, yaitu `"Nama tidak tersedia"`.
- Ini adalah cara umum dalam JavaScript untuk menetapkan nilai default dengan
  menggunakan **logical OR**.

**[⬆ back to top](#table-of-contents)**

## Resources

- [`var`, `let`, and `const`](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
- [JavaScript Arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)
- [Remainder (**%**)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Javascript Concatenate Strings](https://www.freecodecamp.org/news/how-js-string-concatenation-works/)
- [Template Literals (Template Strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)
- [JavaScript Logical Operators](https://www.geeksforgeeks.org/javascript-logical-operators/)
- [Conditional Statements in JavaScript](https://www.geeksforgeeks.org/conditional-statements-in-javascript/)
- [Truthy and Falsy Values](https://www.sitepoint.com/javascript-truthy-falsy/)

**[⬆ back to top](#table-of-contents)**
