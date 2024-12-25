# Javascript Intro

[JavaScript](https://www.geeksforgeeks.org/javascript/) is a versatile,
dynamically typed programming language used for interactive web applications,
supporting both client-side and server-side development, and integrating
seamlessly with
[HTML](https://www.geeksforgeeks.org/html-tutorial/), [CSS](https://www.geeksforgeeks.org/css-tutorial/),
and a rich standard library.

## Table of Contents

1. [Tipe Data Primitif dalam Javascript](#tipe-data-primitif-dalam-javascript)
2. [Informatives](#informatives)
3. [String Length and Indexing](#string-length-and-indexing)
4. [Variables](#variables)
5. [Javascript Arithmetic](#javascript-arithmetic)
6. [Remainder Operators](#remainder-operators)
7. [String Concatenation](#string-concatenation)
8. [Comparison and Logical Operators](#comparison-and-logical-operators)
9. [Conditional Statements](#conditional-statements)
10. [Truthy and Falsy Value](#truthy-and-falsy-value)
11. [Resources](#resources)

## **Tipe Data Primitif dalam Javascript**

Tipe data primitif adalah tipe data yang **tidak dapat diubah** (immutable)
setelah nilainya ditetapkan. Tipe data ini menyimpan **nilai itu sendiri** dan
tidak mengacu pada objek lain. Ada 7 tipe data primitif di JavaScript:

### 1. Number

Tipe data ini digunakan untuk menyimpan angka, baik **bilangan bulat**
(integer) maupun yang **desimal** (floating point). **Number** juga dapat
berupa **bilangan positif** dan **bilangan negatif**. Selain itu, **Number**
juga bisa merepresentasikan nilai **nol (0)**.

- **Bilangan Positif**: Angka yang lebih besar dari nol.
- **Bilangan Negatif**: Angka yang lebih kecil dari nol.
- **Nol (0)**: Angka nol itu sendiri.
- **Desimal**: Bilangan dengan titik desimal (floating point).
- **Infinity**: Nilai numerik yang lebih besar daripada bilangan lainnya dalam
  JavaScript.
- **-Infinity**: Nilai numerik yang lebih kecil daripada bilangan lainnya dalam
  JavaScript.
- **NaN (Not-a-Number)**: Properti dalam JavaScript yang menunjukkan bahwa
  suatu nilai **bukan merupakan angka valid**. Meskipun namanya "Not a Number"
  sebenarnya `NaN` adalah bagian dari tipe data **Number** di JavaScript.

**Contoh:**

```javascript
let positif = 42; // Bilangan positif
let negatif = -25; // Bilangan negatif
let nol = 0; // Bilangan nol
let desimal = 3.14; // Bilangan desimal
let terbesar = Infinity; // Bilangan tak terhingga
let terkecil = -Infinity; // Bilangan tak terhingga negatif
let notANumber = NaN; // Hasil operasi yang tidak valid
```

**Catatan:**

- Dalam JavaScript, `Infinity` dan `-Infinity` adalah nilai numerik khusus yang
  merepresentasikan bilangan tak terhingga positif dan negatif.
- Dalam JavaScript, `NaN` adalah singkatan dari **"Not-a-Number"**. Ini adalah
  nilai khusus yang menunjukkan bahwa suatu operasi atau ekspresi tidak
  menghasilkan angka yang valid.

**[⬆ back to top](#table-of-contents)**

### 2. String

Tipe data **string** dalam JavaScript digunakan untuk merepresentasikan data
teks. String terdiri dari serangkaian karakter yang diapit oleh tanda kutip
tunggal (`'`), tanda kutip ganda (`"`), atau tanda backtick (`` ` ``).

String dapat dideklarasikan menggunakan:

- **Tanda kutip tunggal**: `'Hello'`
- **Tanda kutip ganda**: `"Hello"`
- **Template literal** (backtick): `` `Hello` ``

**Contoh:**

```javascript
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello World`;
```

**[⬆ back to top](#table-of-contents)**

### 3. Boolean

Tipe data **Boolean** dalam JavaScript digunakan untuk merepresentasikan dua
nilai logis: **`true`** (benar) dan **`false`** (salah). Boolean biasanya
digunakan untuk membuat keputusan logis dalam program, seperti dalam pernyataan
kondisional atau perulangan.

#### **Karakteristik tipe data boolean:**

1. **Nilai**:
   - Boolean hanya memiliki dua nilai: `true` dan `false`.
2. **Kegunaan**:
   - Digunakan untuk mengevaluasi ekspresi logika.
   - Membantu dalam pengambilan keputusan berdasarkan kondisi tertentu.
3. **Tipe Primitive**:
   - Boolean adalah salah satu dari tujuh tipe data primitif di JavaScript.

#### **Contoh penggunaan:**

1. **Dalam Kondisi**:

   ```javascript
   let isLoggedIn = true;

   if (isLoggedIn) {
     console.log("Welcome, user!");
   } else {
     console.log("Please log in first.");
   }
   ```

2. **Dalam Perulangan**:

   ```javascript
   let count = 5;

   while (count) {
     // Selama count truthy (bukan 0), loop berjalan
     console.log(count);
     count--;
   }
   ```

Dengan memahami tipe data boolean, Anda dapat membuat logika program yang lebih
efektif dan efisien!

**[⬆ back to top](#table-of-contents)**

### 4. Undefined

`undefined` adalah tipe data yang merepresentasikan nilai yang belum
didefinisikan. Secara teknis, sebuah variabel atau properti memiliki nilai
`undefined` ketika:

1. Variabel dideklarasikan tetapi tidak diinisialisasi.
2. Sebuah fungsi tidak mengembalikan nilai secara eksplisit.
3. Properti objek yang diakses tidak ada.
4. Tidak ada argumen yang dikirimkan ke parameter fungsi tertentu.

#### **Contoh penggunaan**

1. **Variabel tanpa inisialisasi:**

   ```javascript
   let x;
   console.log(x); // Output: undefined
   ```

2. **Fungsi tanpa `return`:**

   ```javascript
   function noReturn() {}
   console.log(noReturn()); // Output: undefined
   ```

3. **Properti yang tidak ada:**

   ```javascript
   const obj = { name: "Alice" };
   console.log(obj.age); // Output: undefined
   ```

4. **Parameter fungsi yang tidak diisi:**

   ```javascript
   function greet(name) {
     console.log(name);
   }
   greet(); // Output: undefined
   ```

#### **Perbedaan `undefined` dengan `null`**

- `undefined` menunjukkan bahwa suatu nilai belum ditetapkan.
- `null` adalah nilai yang secara eksplisit ditetapkan untuk merepresentasikan
  "tidak ada" atau "kosong".

**Contoh:**

```javascript
let a;
let b = null;

console.log(a); // Output: undefined
console.log(b); // Output: null
```

#### **Cara menghindari kesalahan dengan `undefined`**

1. **Gunakan nilai default untuk parameter fungsi:**

   ```javascript
   function greet(name = "Guest") {
     console.log(`Hello, ${name}!`);
   }
   greet(); // Output: Hello, Guest!
   ```

2. **Periksa keberadaan properti:**
   ```javascript
   const obj = { name: "Alice" };
   console.log(obj.age ?? "Not defined"); // Output: Not defined
   ```

`undefined` adalah tipe data penting di JavaScript untuk menangani nilai yang
belum ditentukan. Memahami penggunaannya membantu mencegah bug yang mungkin
terjadi dalam kode Anda.

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

4. **Operasi dengan `null`**:

   Ketika `null` digunakan dalam operasi aritmatika atau perbandingan, nilainya
   diubah menjadi angka:

   ```javascript
   console.log(null + 5); // Output: 5
   console.log(null == undefined); // Output: true
   console.log(null === undefined); // Output: false
   ```

**[⬆ back to top](#table-of-contents)**

### 6. Symbol

Tipe data `Symbol` dalam JavaScript adalah tipe data primitif yang
diperkenalkan di ECMAScript 6 (ES6). Tipe data ini digunakan untuk menciptakan
**identifier unik** yang terutama digunakan sebagai kunci properti objek.
Berikut adalah penjelasan rinci mengenai `Symbol`:

#### 1. **Pembuatan Symbol**

Symbol dibuat menggunakan fungsi `Symbol()`:

```javascript
const mySymbol = Symbol();
console.log(mySymbol); // Output: Symbol()
```

#### 2. **Properti unik**

Setiap kali `Symbol()` dipanggil, ia menghasilkan nilai yang unik. Bahkan jika
Anda membuat dua simbol dengan deskripsi yang sama, keduanya tetap berbeda:

```javascript
const symbol1 = Symbol("desc");
const symbol2 = Symbol("desc");

console.log(symbol1 === symbol2); // Output: false
```

#### 3. **Deskripsi (Description)**

Anda dapat memberikan deskripsi (sebagai string) untuk simbol saat membuatnya.
Deskripsi ini hanya digunakan untuk debugging atau logging dan tidak
memengaruhi keunikannya:

```javascript
const mySymbol = Symbol("identifier");
console.log(mySymbol.description); // Output: "identifier"
```

#### 4. **Penggunaan sebagai kunci properti**

Symbol sering digunakan sebagai kunci untuk properti objek agar properti
tersebut tidak bertabrakan dengan properti lainnya (terutama pada objek besar
atau yang digunakan oleh pihak ketiga):

```javascript
const mySymbol = Symbol("key");
const myObject = {
  [mySymbol]: "value",
};

console.log(myObject[mySymbol]); // Output: "value"
```

Properti dengan kunci simbol tidak akan muncul dalam iterasi `for...in` atau
`Object.keys()`. Namun, dapat diakses menggunakan
`Object.getOwnPropertySymbols()`.

#### 5. **Symbol yang tersedia secara Global**

JavaScript memiliki beberapa simbol bawaan yang tersedia secara global, dikenal
sebagai **Well-known Symbols**. Contohnya:

- `Symbol.iterator`: Digunakan untuk membuat iterator custom.
- `Symbol.toStringTag`: Digunakan untuk mengubah hasil dari
  `Object.prototype.toString`.

Contoh penggunaan `Symbol.iterator`:

```javascript
const iterable = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        return step <= 3
          ? { value: step, done: false }
          : { value: undefined, done: true };
      },
    };
  },
};

for (const value of iterable) {
  console.log(value); // Output: 1, 2, 3
}
```

#### 6. **Keuntungan Symbol**

- **Unik dan Aman**: Simbol memastikan properti tidak berbenturan.
- **Penggunaan Khusus**: Sangat berguna untuk membuat properti tersembunyi
  pada objek.
- **Tidak Dapat Diubah**: Simbol adalah immutable dan selalu unik.

#### 7. **Batasan Symbol**

- Tidak dapat diakses langsung melalui metode konvensional seperti
  `JSON.stringify()` karena properti berbasis simbol tidak akan dimasukkan ke
  dalam string JSON.
- Tidak dapat dibuat menggunakan keyword `new`. Anda hanya dapat membuatnya
  dengan memanggil fungsi `Symbol()`.

Symbol merupakan fitur yang kuat dalam JavaScript untuk menciptakan properti
objek yang unik dan aman dari konflik, terutama dalam pengembangan aplikasi
yang kompleks.

**[⬆ back to top](#table-of-contents)**

### 7. BigInt

Tipe data **BigInt** dalam JavaScript adalah tipe data khusus yang digunakan
untuk merepresentasikan bilangan bulat yang sangat besar, yang tidak dapat
ditampung oleh tipe data **Number**. Tipe data **Number** memiliki batas
maksimal dan minimal untuk bilangan bulat, yaitu:

- Batas maksimal: 2^53 - 1 atau **9,007,199,254,740,991**.
- Batas minimal: -(2^53 - 1).

Bilangan di luar rentang ini dapat mengalami kehilangan presisi jika
menggunakan tipe data **Number**.

Dengan **BigInt**, Anda dapat bekerja dengan bilangan bulat yang lebih besar
dari batas tersebut tanpa kehilangan presisi.

#### **Cara membuat BigInt**

BigInt dapat dibuat dengan dua cara:

1. Menambahkan sufiks **`n`** pada bilangan bulat.

   ```javascript
   const bigIntValue = 1234567890123456789012345678901234567890n;
   ```

2. Menggunakan fungsi **`BigInt()`**.

   ```javascript
   const bigIntValue = BigInt("1234567890123456789012345678901234567890");
   ```

#### **Karakteristik BigInt**

1. **Operasi Aritmatika**
   Anda dapat melakukan operasi aritmatika seperti penjumlahan, pengurangan,
   perkalian, dan pembagian, tetapi hanya dengan sesama BigInt.

   ```javascript
   const a = 100n;
   const b = 200n;
   console.log(a + b); // 300n
   console.log(a * b); // 20000n
   ```

2. **Tidak Bisa Dicampur dengan Number**
   Anda tidak bisa mencampur tipe BigInt dengan Number secara langsung. Jika
   perlu, Anda harus melakukan konversi terlebih dahulu.

   ```javascript
   const bigIntValue = 100n;
   const numberValue = 50;
   // console.log(bigIntValue + numberValue); // Error
   console.log(bigIntValue + BigInt(numberValue)); // 150n
   ```

3. **Performa**
   BigInt lebih lambat dibandingkan Number karena digunakan untuk bilangan yang
   jauh lebih besar.

4. **Penggunaan**
   BigInt sangat berguna untuk aplikasi yang memerlukan presisi tinggi, seperti
   kriptografi, perhitungan ilmiah, atau pemrosesan data finansial.

#### **Keterbatasan BigInt**

1. Tidak mendukung metode bawaan **Math**.

   ```javascript
   const bigIntValue = 10n;
   console.log(Math.sqrt(bigIntValue)); // Error
   ```

2. Tidak kompatibel dengan JSON.
   BigInt tidak bisa digunakan langsung dalam objek JSON.
   ```javascript
   const obj = { value: 100n };
   console.log(JSON.stringify(obj)); // Error
   ```

#### **Contoh penggunaan BigInt**

```javascript
// Perhitungan dengan bilangan besar
const bigValue1 = 9007199254740991n; // Maksimal Number
const bigValue2 = bigValue1 + 1n; // BigInt memungkinkan lebih besar
console.log(bigValue2); // 9007199254740992n
```

Dengan BigInt, JavaScript menjadi lebih fleksibel dalam menangani bilangan
besar.

**[⬆ back to top](#table-of-contents)**

## **Informatives**

### Typeof operator

`typeof` adalah operator di JavaScript yang digunakan untuk menentukan tipe
data dari sebuah nilai atau variabel. Operator ini mengembalikan sebuah string
yang menunjukkan tipe dari operand yang diberikan.

**Sintaks:**

```javascript
typeof operand;
```

> **operand**: Nilai atau ekspresi yang ingin kita periksa tipe datanya.

**Contoh penggunaan:**

```javascript
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof { name: "John", age: 30 }); // "object"
console.log(typeof [1, 2, 3]); // "object" (array dianggap sebagai objek)
console.log(typeof null); // "object" (ini adalah kekeliruan yang sudah ada sejak awal JavaScript)
console.log(typeof function () {}); // "function"
```

Meskipun baik array maupun objek keduanya memiliki tipe `"object"` dalam
JavaScript, kamu dapat membedakannya dengan menggunakan metode
`Array.isArray()`. Metode ini akan mengembalikan `true` jika nilai tersebut
adalah array, dan `false` jika bukan.

Berikut contoh cara membedakan array dan objek:

```javascript
let arr = [1, 2, 3];
let obj = { name: "John", age: 30 };

console.log(typeof arr); // "object"
console.log(typeof obj); // "object"

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false
```

**Penjelasan:**

- `Array.isArray()` adalah cara yang tepat untuk memeriksa apakah sebuah
  variabel adalah array, karena `typeof` hanya akan memberikan `"object"`
  untuk keduanya (array dan objek).
- Untuk objek biasa, kamu hanya bisa menggunakan `typeof` atau memeriksa sifat
  tertentu yang hanya dimiliki oleh objek, misalnya `obj.hasOwnProperty()`.

Jadi, meskipun `typeof` menunjukkan bahwa keduanya adalah `"object"`,
`Array.isArray()` memberikan cara yang jelas untuk membedakan array dari objek
biasa.

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

1. **Menghapus elemen dari array**

   ```javascript
   let arr = [10, 20, 30, 40, 50];
   arr.length = 3; // Memotong array sehingga hanya ada 3 elemen
   console.log(arr); // [10, 20, 30]
   ```

   Ketika kita mengubah `arr.length = 3`, array akan dipotong sehingga hanya
   menyisakan tiga elemen pertama.

2. **Menambahkan elemen ke array**

   ```javascript
   let arr = [1, 2, 3];
   arr.length = 5; // Menambahkan dua elemen "undefined" pada akhir array
   console.log(arr); // [1, 2, 3, <2 empty slots>]
   ```

   Mengubah `arr.length` menjadi lebih besar dari jumlah elemen saat ini akan
   mengisi elemen-elemen yang baru dengan `undefined`.

**[⬆ back to top](#table-of-contents)**

## **String Length and Indexing**

Dalam JavaScript, **string length** dan **indexing** adalah konsep dasar yang
digunakan untuk mengukur panjang string dan mengakses karakter-karakter di
dalamnya.

### 1. String length

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

### 2. Indexing (Mengakses karakter dalam string)

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

### 3. Penggunaan indexing untuk mengakses karakter terakhir (dinamis)

Jika Anda ingin mengakses karakter terakhir dari string, Anda bisa menggunakan
indeks `str.length - 1`.

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
terbatas pada fungsi atau global, dan bisa dideklarasikan (re-declared) ulang
tanpa memberikan peringatan.

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
- **Scope global atau fungsi:** Variabel `var` hanya terbatas pada scope fungsi
  atau scope global, tidak dapat dibatasi pada blok (seperti dalam loop atau
  pernyataan kondisional).

**[⬆ back to top](#table-of-contents)**

### 2. Deklarasi variabel dengan `let`

`let` adalah cara yang lebih modern untuk mendeklarasikan variabel, dan
diperkenalkan di ES6 (ECMAScript 2015). Berbeda dengan `var`, `let` memiliki
**block scope** (ruang lingkup blok), yang berarti variabel hanya dapat
diakses dalam blok kode tempatnya dideklarasikan (seperti di dalam `if` atau
`for`).

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

- **Block scope:** Variabel yang dideklarasikan dengan `let` hanya bisa diakses
  dalam blok kode tempat variabel itu dideklarasikan.
- **Tidak bisa dideklarasikan ulang dalam satu blok**.

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
- **Function Scope:** Variabel yang dideklarasikan dengan `var`, `let`, dan
  `const` di dalam fungsi hanya dapat diakses di dalam fungsi tersebut.
- **Block Scope:** Variabel yang dideklarasikan dengan `let` dan `const` hanya
  dapat diakses di dalam blok tempat variabel tersebut dideklarasikan.

#### **Hoisting:**

- **Hoisting dengan `var`:**

  Variabel yang dideklarasikan dengan `var` diangkat ke bagian atas fungsi atau
  konteks global, **tetapi hanya deklarasinya**, bukan nilainya.

  ```javascript
  console.log(a); // Output: undefined
  var a = 5;
  console.log(a); // Output: 5
  ```

- **Hoisting dengan `let` dan `const`:**

  Meskipun deklarasinya diangkat, variabel yang dideklarasikan dengan `let` dan
  `const` berada dalam **temporal dead zone** (TDZ) hingga mereka
  dideklarasikan, sehingga akan menghasilkan error jika diakses sebelum
  dideklarasikan.

  ```javascript
  console.log(b); // Error: Cannot access 'b' before initialization
  let b = 10;
  ```

**[⬆ back to top](#table-of-contents)**

## **Javascript Arithmetic**

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
let sum = a + b; // Menetapkan hasil penjumlahan a + b ke sum
console.log(sum); // Output: 8

let text1 = "Hello, ";
let text2 = "World!";
let concat = text1 + text2; // Menggabungkan string (concatenation)
console.log(concat); // Output: "Hello, World!"
```

#### 1.2 **Pengurangan (-)**

Operator `-` digunakan untuk mengurangi satu angka dari angka lainnya.

**Contoh:**

```javascript
let currentYear = 2024;
let birthYear = 2008;

let age = currentYear - birthYear;
console.log(age); // Output: 16
```

#### 1.3 **Perkalian (\*)**

Operator `*` digunakan untuk mengalikan dua angka.

**Contoh:**

```javascript
let a = 6;
let b = 7;
let multiply = a * b; // 6 * 7 = 42
console.log(multiply); // Output: 42
```

#### 1.4 **Pembagian (/)**

Operator `/` digunakan untuk membagi satu angka dengan angka lainnya.

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

### 3. Operator penugasan (Assignment operator)

Operator penugasan digunakan untuk memberikan nilai baru kepada variabel.
Beberapa operator penugasan juga melakukan operasi matematika secara bersamaan.

#### 3.1 **Penugasan Dasar (=)**

Operator `=` digunakan untuk memberikan nilai (assign value) ke variabel.

**Contoh:**

```javascript
let a = 5; // Memberikan nilai 5 ke variabel a
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

### 4. Prioritas operator (Precedence operator)

Prioritas atau **precedence operator** dalam JavaScript merujuk pada aturan
yang menentukan urutan eksekusi operator dalam ekspresi. Ketika ada beberapa
operator dalam suatu ekspresi, prioritas ini menentukan operator mana yang
dieksekusi terlebih dahulu.

Contoh yang sederhana adalah dalam ekspresi `3 + 4 * 2`. Berdasarkan
**precedence**, operator perkalian (`*`) memiliki prioritas lebih tinggi
dibandingkan operator penjumlahan (`+`). Jadi, ekspresi ini akan dihitung
sebagai `3 + (4 * 2)`, bukan `(3 + 4) * 2`.

Berikut adalah beberapa kategori operator dengan prioritas yang umum dalam
JavaScript (dari yang tertinggi ke terendah):

1. **Parentheses (`()`)** – Digunakan untuk mengelompokkan ekspresi dan
   memastikan eksekusi dilakukan terlebih dahulu.

   - Contoh: `(3 + 4) * 2`

2. **Operator Aritmatika** – Seperti `*`, `/`, `%` (perkalian, pembagian, dan
   sisa bagi) memiliki prioritas lebih tinggi dibandingkan dengan `+` dan `-`
   (penjumlahan dan pengurangan).

   - Contoh: `3 + 4 * 2` → Eksekusi pertama: `4 * 2`, kemudian `3 + 8`

3. **Operator Pembanding** – Seperti `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`,
   `!==` untuk membandingkan nilai.

   - Contoh: `5 > 3` → Evaluasi ke `true`

4. **Operator Logika** – Operator seperti `!` (not), `&&` (and), dan `||` (or).

   - Prioritas: `!` lebih tinggi daripada `&&`, dan `&&` lebih tinggi daripada
     `||`.

5. **Penugasan (Assignment)** – Operator penugasan seperti `=`, `+=`, `-=`,
   `*=`, dan lainnya memiliki prioritas paling rendah.

   - Contoh: `x = 5 + 3` → Eksekusi pertama: `5 + 3`, kemudian hasilnya dipasang ke `x`.

Contoh kode dengan berbagai prioritas operator:

```javascript
let result = 5 + 3 * 2; // 5 + (3 * 2) => 5 + 6 = 11
let condition = (true && false) || true;
// Evaluasi 1: (true && false) || true
// Evaluasi 2: false || true
// Evaluasi 3: true
```

Untuk memaksa urutan eksekusi yang berbeda, Anda dapat menggunakan tanda kurung
`()` untuk mengubah prioritas operator.

**[⬆ back to top](#table-of-contents)**

## **Remainder Operators**

Remainder operator (operator sisa) adalah simbol `%` yang digunakan untuk
menghitung sisa pembagian antara dua angka. Hasilnya adalah angka yang tersisa
setelah pembagian.

### 1. Sintaks

```javascript
let mod = a % b;
```

- `a` adalah angka yang dibagi (dividend).
- `b` adalah angka pembagi (divisor).

### 2. Pembagian dan hasil sisa (Remainder)

Untuk dua angka, operator remainder (`%`) menghitung sisa setelah pembagian.
Sisa ini adalah angka yang "tertinggal" setelah proses pembagian.

**Contoh:**

```javascript
let result = 10 % 3;
console.log(result); // Output: 1
```

**Penjelasan:**

- 10 dibagi 3 menghasilkan 3, dengan sisa 1.
- Karena 3 dikalikan berapa yang mendekati 10, jawabannya adalah `3 * 3 = 9`
  dan `10 - 9 = 1`.
- Jadi, `10 % 3` akan menghasilkan 1.

### 3. Perilaku dengan angka negatif

Jika salah satu atau kedua angka yang digunakan adalah negatif, hasil remainder
akan memiliki tanda yang sesuai dengan angka yang dibagi (dividend).

**Contoh:**

```javascript
let result = -20 % 5;
console.log(result); // Output: -0
```

**Penjelasan:**

- -20 dibagi 5 menghasilkan -4, dengan sisa -0.
- Karena 5 dikalikan berapa yang mendekati -20, jawabannya adalah
  `5 * -4 = -20` dan `-20 - (-20) = -0`.
- Jadi, `-20 % 5` akan menghasilkan -0.

**[⬆ back to top](#table-of-contents)**

### 4. Penerapan umum remainder operator

Operator `%` sering digunakan dalam berbagai situasi, seperti:

1. **Menentukan apakah sebuah angka genap atau ganjil**:

   - **Angka genap** jika hasilnya 0. Berarti angka tersebut habis dibagi
     dengan 2 (kelipatan 2).
   - **Angka ganjil** jika hasilnya selain 0. Berarti angka tersebut tidak
     habis dibagi 2.

   ```javascript
   let num = 8;

   if (num % 2 === 0) {
     console.log(num + " adalah angka genap");
   } else {
     console.log(num + " adalah genap ganjil");
   }
   ```

2. **Looping atau perulangan berdasarkan interval**:

   Anda dapat menggunakan operator `%` untuk melakukan sesuatu setiap `n`
   iterasi. Misalnya, melakukan aksi setiap 5 langkah.

   ```javascript
   for (let i = 5; i <= 20; i++) {
     if (i % 5 === 0) {
       console.log(i + " adalah kelipatan 5");
     }
   }
   ```

3. **Membatasi nilai dalam rentang tertentu**:

   Jika Anda ingin menjaga angka tetap berada dalam rentang tertentu (misalnya,
   angka antara 0 dan 9), Anda dapat menggunakan operator modulus.

   ```javascript
   let num = 10;
   let limit = 9;
   let result = num % limit; // jika num melebihi batas (limit), mulai dari 1
   console.log(result); // Output: 1
   ```

4. **Menentukan kelipatan tertentu**:

   Modulus juga digunakan untuk menentukan apakah angka adalah kelipatan dari
   angka lainnya.

   ```javascript
   let angka = 25;
   if (angka % 5 === 0) {
     console.log(angka + " adalah kelipatan 5");
   }
   ```

**[⬆ back to top](#table-of-contents)**

## **String Concatenation**

**String concatenation** (penggabungan string) dalam JavaScript adalah proses
menggabungkan dua atau lebih string menjadi satu string tunggal. Proses ini
sangat berguna saat Anda ingin membangun pesan, membuat URL, atau menyatukan
data yang bersumber dari beberapa variabel atau nilai.

### Cara kerja string concatenation

JavaScript menyediakan beberapa cara untuk menggabungkan string, antara lain
dengan menggunakan operator **plus (`+`)** dan **template literals**
(menggunakan backtick, `` ` ``).

### 1. Menggunakan operator plus (`+`)

Operator plus (`+`) adalah cara paling dasar dan umum untuk menggabungkan
string dalam JavaScript.

**Sintaks:**

```javascript
let result = string1 + string2;
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

#### **Menambahkan variabel dan teks:**

```javascript
let name = "Alice";
let age = 25;
let message = name + " is " + age + " years old.";
console.log(message); // Output: "Alice is 25 years old."
```

Pada contoh ini, kita menggabungkan teks dengan nilai variabel, sehingga
menghasilkan kalimat yang lengkap.

**[⬆ back to top](#table-of-contents)**

### 2. Menggunakan template literals (template strings)

Template literals adalah fitur yang diperkenalkan di **ES6** yang memungkinkan
penggabungan string dengan cara yang lebih fleksibel dan mudah dibaca.
Template literals menggunakan tanda backtick (`` ` ``) dan memungkinkan
penggunaan **interpolasi** variabel di dalamnya menggunakan `${}`.

**Sintaks:**

```javascript
let result = `${string1} ${string2}`;
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

#### **Menambahkan variabel dan teks dengan template literals:**

```javascript
let name = "Alice";
let age = 25;
let message = `${name} is ${age} years old.`;
console.log(message); // Output: "Alice is 25 years old."
```

Keuntungan utama dari template literals adalah **kemampuan untuk menyisipkan
expression** langsung di dalam string tanpa memerlukan operator `+`.

**[⬆ back to top](#table-of-contents)**

### 3. Penggabungan dengan banyak variabel atau teks

Anda dapat menggabungkan banyak variabel dan teks dalam satu string dengan
menggunakan kedua metode di atas. Berikut adalah contoh keduanya:

#### **Menggunakan operator `+`:**

```javascript
let intro = "My name is";
let name = "John";
let age = 30;
let message = intro + " " + name + " and I am " + age + " years old.";
console.log(message); // Output: "My name is John and I am 30 years old."
```

#### **Menggunakan template literals:**

```javascript
let intro = "My name is";
let name = "John";
let age = 30;
let message = `${intro} ${name} and I am ${age} years old.`;
console.log(message); // Output: "My name is John and I am 30 years old."
```

Pada kedua contoh di atas, kita menggabungkan lebih dari dua string, tetapi
dengan template literals, kode menjadi lebih mudah dibaca dan lebih elegan.

**[⬆ back to top](#table-of-contents)**

### 4. Concatenation dengan karakter baru (Newline, Tab, dll.)

Template literals juga mendukung penggabungan string dengan karakter baru
seperti **newline** (`\n`) atau **tab** (`\t`) dengan cara yang lebih alami.
Berikut adalah contoh menggunakan newline dan tab:

```javascript
let name = "Alice";
let age = 25;
let address = "New York";

let message = `${name} is ${age} years old.
She lives in ${address}.`;

console.log(message);
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

## **Comparison and Logical Operators**

Dalam JavaScript, **comparison operators** dan **logical operators** digunakan
untuk membandingkan nilai atau kondisi, serta untuk mengkombinasikan ekspresi
logika. Berikut adalah penjelasan masing-masing:

### 1. Comparison operators (Operator perbandingan)

Operator ini digunakan untuk membandingkan dua nilai dan menghasilkan nilai
**boolean** (`true` atau `false`) berdasarkan hasil perbandingan tersebut.

- **`==` (Equality)**: Membandingkan dua nilai untuk kesamaan, tanpa
  memperhatikan tipe data.

  ```javascript
  5 == "5"; // true, karena nilai yang dibandingkan sama meskipun tipe data berbeda
  ```

- **`===` (Strict Equality)**: Membandingkan dua nilai dan tipe data, nilai dan
  tipe data harus sama.

  ```javascript
  5 === "5"; // false, karena tipe data berbeda (number vs string)
  ```

- **`!=` (Inequality)**: Membandingkan dua nilai untuk ketidaksamaan, tanpa
  memperhatikan tipe data.

  ```javascript
  5 != "5"; // false, karena nilai yang dibandingkan sama meskipun tipe data berbeda
  ```

- **`!==` (Strict Inequality)**: Membandingkan dua nilai dan tipe data, jika
  salah satu berbeda, hasilnya `true`.

  ```javascript
  5 !== "5"; // true, karena tipe data berbeda (number vs string)
  ```

- **`>` (Greater Than)**: Memeriksa apakah nilai di sebelah kiri lebih besar
  dari nilai di sebelah kanan.

  ```javascript
  5 > 3; // true
  ```

- **`<` (Less Than)**: Memeriksa apakah nilai di sebelah kiri lebih kecil dari
  nilai di sebelah kanan.

  ```javascript
  3 < 5; // true
  ```

- **`>=` (Greater Than or Equal to)**: Memeriksa apakah nilai di sebelah kiri
  lebih besar atau sama dengan nilai di sebelah kanan.

  ```javascript
  5 >= 5; // true
  ```

- **`<=` (Less Than or Equal to)**: Memeriksa apakah nilai di sebelah kiri
  lebih kecil atau sama dengan nilai di sebelah kanan.
  ```javascript
  3 <= 5; // true
  ```

**[⬆ back to top](#table-of-contents)**

### 2. Logical Operators (Operator logika)

Operator logika digunakan untuk mengkombinasikan beberapa ekspresi atau
kondisi.

- **`&&` (Logical AND)**: Mengembalikan `true` hanya jika kedua ekspresi
  bernilai `true`. Jika salah satu bernilai `false`, hasilnya `false`.

  ```javascript
  true && true; // true
  true && false; // false
  ```

- **`||` (Logical OR)**: Mengembalikan `true` jika salah satu ekspresi bernilai
  `true`. Jika kedua ekspresi bernilai `false`, hasilnya `false`.

  ```javascript
  true || false; // true
  false || false; // false
  ```

- **`!` (Logical NOT)**: Membalikkan nilai boolean dari ekspresi. Jika ekspresi
  bernilai `true`, hasilnya `false`, dan sebaliknya.
  ```javascript
  !true; // false
  !false; // true
  ```

**[⬆ back to top](#table-of-contents)**

### Contoh penggunaan:

```javascript
let a = 5;
let b = 10;

// Menggunakan comparison operators
console.log(a > b); // false
console.log(a === 5); // true

// Menggunakan logical operators
console.log(a < b && a === 5); // true (keduanya true)
console.log(a < b || a === 6); // true (salah satu true)
console.log(!(a > b)); // true (karena a tidak lebih besar dari b)
```

Dengan operator ini, Anda bisa membuat ekspresi kompleks untuk kontrol alur dalam program seperti kondisi `if` atau `while`.

**[⬆ back to top](#table-of-contents)**

## **Conditional Statements**

**Conditional statements** (pernyataan bersyarat) dalam JavaScript adalah
struktur yang memungkinkan program untuk mengeksekusi bagian tertentu dari
kode tergantung pada apakah suatu kondisi bernilai `true` atau `false`.
Conditional statements sangat penting dalam pengambilan keputusan dan
pengendalian alur eksekusi program.

### 1. `if` statement

Pernyataan `if` digunakan untuk mengevaluasi suatu kondisi, dan jika kondisi
tersebut bernilai `true`, maka kode di dalam blok `if` akan dijalankan.

**Sintaks:**

```javascript
if (condition) {
  // kode akan dijalankan jika kondisi bernilai true
}
```

**Contoh:**

```javascript
let age = 20;

if (age >= 18) {
  console.log("Access granted.");
}
```

**[⬆ back to top](#table-of-contents)**

### 2. `if-else` tatement

Pernyataan `else` digunakan bersama dengan `if` untuk mengeksekusi blok kode
jika kondisi pada `if` bernilai `false`.

**Sintaks:**

```javascript
if (condition) {
  // Kode akan dijalankan jika kondisi bernilai true
} else {
  // Kode akan dijalankan jika kondisi bernilai false
}
```

**Contoh:**

```javascript
let hour = 22;

if (hour < 21) {
  console.log("The store is open.");
} else {
  console.log("The store is closed."); // hour >= 21
}
```

**[⬆ back to top](#table-of-contents)**

### 3. `else if` Statement

Pernyataan `else if` digunakan jika ada beberapa kondisi yang perlu dievaluasi
secara berturut-turut. Jika kondisi pertama `false`, maka JavaScript akan
mengevaluasi kondisi berikutnya yang ada di `else if`.

**Sintaks:**

```javascript
if (condition1) {
  // kode akan dijalankan jika condition1 bernilai true
} else if (condition2) {
  // kode akan dijalankan jika condition2 bernilai true
} else {
  // kode akan dijalankan jika semua kondisi di atas bernilai false
}
```

**Contoh:**

```javascript
let score = 69;

if (score >= 90) {
  console.log("Grade: A"); // Jika score 90 ke atas, Grade A
} else if (score >= 80) {
  console.log("Grade: B"); // Jika score 80 ke atas, Grade B
} else if (score >= 70) {
  console.log("Grade: C"); // Jika score 70 ke atas, Grade C
} else {
  console.log("Grade: F"); // Jika score selain kondisi di atas (score < 70), Grade F
}
```

**[⬆ back to top](#table-of-contents)**

### 4. `switch` Statement

Pernyataan `switch` digunakan untuk memeriksa sebuah nilai dan mencocokkannya
dengan beberapa kemungkinan case. Switch statement lebih efisien daripada
menggunakan banyak `else if` dalam beberapa situasi.

**Sintaks:**

```javascript
switch (expression) {
  case value1:
    // Kode dijalankan jika expression === value1
    break;
  case value2:
    // Kode dijalankan jika expression === value2
    break;
  default:
  // Kode dijalankan jika tidak ada case yang cocok
}
```

**Contoh:**

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Sunday":
    console.log("Time to relax.");
    break;
  default:
    console.log("Just another day.");
}
```

**[⬆ back to top](#table-of-contents)**

### 5. Ternary Operator

Merupakan shorthand untuk `if-else`.

**Sintaks:**

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

**Contoh:**

```javascript
let isMember = true;
let discount = isMember ? 20 : 5; // Apakah isMember true ? Jika iya, discount 20 : Jika tidak, discount 5.
console.log(`You get ${discount}% discount.`);
// Output: You get 20% discount.
```

**[⬆ back to top](#table-of-contents)**

## **Truthy and Falsy Value**

Dalam JavaScript, **truthy** dan **falsy** adalah istilah yang merujuk pada
bagaimana nilai dievaluasi dalam konteks boolean, seperti dalam pernyataan
`if`.

1. **Falsy Values**: Nilai-nilai yang dianggap `false` ketika dievaluasi dalam
   konteks boolean. Nilai-nilai falsy meliputi:

   - `false` (boolean false)
   - `0` (angka nol)
   - `-0` (angka negatif nol)
   - `''`, `""`, `` ` `` (string kosong)
   - `null`
   - `undefined`
   - `NaN` (Not-a-Number)

2. **Truthy Values**: Semua nilai selain falsy dianggap `true`. Contoh truthy
   values:

   - `true` (boolean true)
   - Angka selain `0` (baik positif maupun negatif, seperti `1`, `-1`)
   - String yang tidak kosong (string dengan `length > 0`, misalnya `"H"`)
   - Array kosong (`[]`)
   - Object kosong (`{}`)
   - Function (`function(){}`)

### Contoh penerapan dalam aplikasi dunia nyata

#### 1. **Validasi input pengguna**

Misalnya, untuk memeriksa apakah input dari pengguna valid (tidak kosong atau
undefined).

```javascript
const userInput = "";

if (userInput) {
  console.log(`Halo, ${userInput}!`);
} else {
  console.log("Nama tidak boleh kosong.");
}
```

**Penjelasan**:

- Jika `userInput` ada, maka akan dianggap `truthy` dan menampilkan salam.
- Jika `userInput` adalah string kosong atau `null`, maka akan dianggap `falsy`
  dan menampilkan pesan error.

#### 2. **Default value dengan OR (`||`)**

Menggunakan nilai default ketika nilai sebenarnya adalah `undefined` atau
`null`.

```javascript
const userSettings = {};

const theme = userSettings.theme || "light";
console.log(`Tema yang digunakan: ${theme}`);
```

**Penjelasan**:

- Jika `userSettings.theme` tidak ada atau `falsy`, maka akan digunakan
  `"light"` sebagai nilai default.

#### 3. **Penanganan kondisi logis dalam API**

Saat memeriksa keberadaan data dalam API.

```javascript
const response = {
  data: null,
};

if (response.data) {
  console.log("Data berhasil diterima:", response.data);
} else {
  console.log("Tidak ada data yang diterima.");
}
```

**Penjelasan**:

- Jika `response.data` ada atau `truthy`, maka blok `if` akan dijalankan.
- Jika `response.data` tidak ada atau `falsy`, maka blok `else` akan dijalankan.

**[⬆ back to top](#table-of-contents)**

## Resources

- [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
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
