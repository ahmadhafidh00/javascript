# Array

Array adalah sebuah struktur data yang digunakan untuk menyimpan koleksi data
dengan tipe yang sama atau berbeda dalam satu variabel. Bayangkan array sebagai
sebuah kotak yang bisa kamu isi dengan berbagai macam barang, mulai dari angka,
teks, hingga objek lainnya. Setiap barang dalam kotak ini memiliki nomor urut
yang disebut indeks, yang dimulai dari 0.

## Table of Contents

1. [Array dalam JavaScript](#array-dalam-javascript)
2. [Aturan Penamaan Array dalam JavaScript](#aturan-penamaan-array-dalam-javascript)
3. [Mutasi pada Array (CRUD)](#mutasi-pada-array-crud)
4. **Array Quiz**
   - [Filter Car by Initial](filter-car.js)
   - [Split](split.js)
   - [Who Is Covid?](who-is-covid.js)
5. [Resources](#resources)

## **Array dalam JavaScript**

### Apa itu array dalam JavaScript?

Array dalam JavaScript adalah tipe data yang digunakan untuk menyimpan kumpulan
data dalam satu variabel. Array dapat menyimpan berbagai jenis data, seperti
string, number, object, function, atau bahkan array lain (array bersarang).

**Karakteristik Utama Array:**

- **Urutan:** Setiap elemen dalam array memiliki posisi yang spesifik,
  ditentukan oleh indeksnya yang dimulai dari 0.
- **Heterogen:** Array dapat menyimpan berbagai tipe data dalam satu array,
  seperti number, string, boolean, bahkan array lainnya atau object.
- **Dinamis:** Ukuran array dapat berubah selama program berjalan. Kita bisa
  menambahkan atau menghapus elemen kapan saja.

**[⬆ back to top](#table-of-contents)**

### Cara membuat array

1. **Menggunakan Bracket Notation (`[]`):**

   ```javascript
   let fruits = ["Apple", "Banana", "Cherry"];
   ```

2. **Menggunakan `Array()` Constructor:**

   ```javascript
   let numbers = new Array(1, 2, 3, 4, 5);
   ```

3. **Array Kosong:**

   ```javascript
   let emptyArray = [];
   ```

**[⬆ back to top](#table-of-contents)**

### Mengakses elemen array

Untuk mengakses elemen tertentu dalam array, kita menggunakan indeksnya.

**Contoh:**

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

// Mengakses elemen pertama
console.log(fruits[0]); // Output: Apple

// Mengakses elemen kedua
console.log(fruits[1]); // Output: Banana

// Mengubah elemen
fruits[1] = "Blueberry";
console.log(fruits[1]); // Output: Blueberry
```

**[⬆ back to top](#table-of-contents)**

### Contoh penggunaan di dunia nyata

#### **1. Menyimpan daftar barang**

Misalnya, sebuah aplikasi e-commerce menyimpan daftar produk dalam keranjang
belanja.

```javascript
let cart = ["Laptop", "Mouse", "Keyboard"];
console.log(`Items in cart: ${cart.join(", ")}`);
// Output: Items in cart: Laptop, Mouse, Keyboard
```

#### **2. Mengelola data pelanggan**

Menyimpan daftar pelanggan dalam array.

```javascript
let customers = ["Alice", "Bob", "Charlie"];

// Menambahkan pelanggan baru
customers.push("Diana");
console.log(customers);
// Output: ["Alice", "Bob", "Charlie", "Diana"]

// Menghapus pelanggan terakhir
let removedCustomer = customers.pop();
console.log(removedCustomer);
// Output: Diana
```

#### **3. Membuat jadwal**

Menyusun jadwal harian dalam bentuk array.

```javascript
let schedule = ["Meeting at 10 AM", "Lunch at 12 PM", "Project Review at 3 PM"];

// Mengakses jadwal pertama
console.log(schedule[0]); // Output: Meeting at 10 AM

// Menambahkan aktivitas baru
schedule.push("Workout at 6 PM");
console.log(schedule);
// Output: ["Meeting at 10 AM", "Lunch at 12 PM", "Project Review at 3 PM", "Workout at 6 PM"]
```

#### **4. Menghitung rata-rata nilai**

Menggunakan array untuk menyimpan nilai dan menghitung rata-rata.

```javascript
let grades = [80, 90, 85, 95, 88];

// Menghitung rata-rata
let total = grades.reduce((sum, grade) => sum + grade, 0);
let average = total / grades.length;

console.log(`Average grade: ${average}`);
// Output: Average grade: 87.6
```

**[⬆ back to top](#table-of-contents)**

## **Aturan Penamaan Array dalam JavaScript**

Dalam JavaScript, penamaan array mengikuti konvensi dan aturan yang sama
seperti variabel pada umumnya. Namun, untuk meningkatkan keterbacaan dan
pemahaman kode, ada beberapa best practices yang biasanya diikuti. Berikut
adalah aturan dan konvensi dalam penamaan array:

### 1. Aturan dasar penamaan (JavaScript variables):

- **Huruf Awal:** Nama array harus diawali dengan huruf, `$`, atau `_`. Tidak
  boleh diawali dengan angka atau karakter khusus lainnya.

  ```javascript
  let fruits = []; // Valid
  let _numbers = []; // Valid
  let $items = []; // Valid
  let 1array = []; // Tidak valid
  ```

- **Karakter Selanjutnya:** Nama array dapat berisi huruf, angka, `$`, atau
  `_`, tetapi tidak boleh mengandung spasi atau karakter khusus lainnya.

  ```javascript
  let fruits123 = []; // Valid
  let fruits_list = []; // Valid
  let fruits-list = []; // Tidak valid
  ```

**[⬆ back to top](#table-of-contents)**

### 2. Konvensi penamaan:

#### a. **Camel case**

Gunakan format **camelCase** untuk menamai array, terutama jika nama array
terdiri dari lebih dari satu kata.

```javascript
let studentNames = [];
let primeNumbers = [];
```

#### b. **Deskriptif**

Gunakan nama yang deskriptif untuk menunjukkan tujuan atau isi array. Hindari
nama yang terlalu umum seperti `data`, `list`, atau `array`.

```javascript
let colors = []; // Menjelaskan bahwa array berisi warna
let userIds = []; // Berisi ID pengguna
```

#### c. **Gunakan bentuk jamak (plural)**

Jika array menyimpan beberapa elemen dari jenis yang sama, gunakan nama dalam
bentuk jamak untuk menandakan bahwa itu adalah kumpulan.

```javascript
let books = []; // Kumpulan buku
let cars = []; // Kumpulan mobil
```

**[⬆ back to top](#table-of-contents)**

### 3. Hindari kata-kata yang tidak jelas atau dilarang

- Jangan gunakan kata kunci yang sudah ada di JavaScript (seperti `Array`,
  `var`, `let`, `const`, dll.).

  ```javascript
  let let = []; // Tidak valid
  let array = []; // Kurang baik (menggunakan kata yang terlalu umum)
  ```

**[⬆ back to top](#table-of-contents)**

### 4. Gunakan kata-kata terkait konten

Buat nama array sesuai dengan _jenis data_ yang disimpan.

```javascript
let studentScores = [90, 80, 70]; // Array angka
let productNames = ["Laptop", "Mouse", "Keyboard"]; // Array string
```

**[⬆ back to top](#table-of-contents)**

### 5. Konvensi tambahan (Opsional):

#### a. **Prefiks atau sufiks**

Tambahkan prefiks atau sufiks jika ingin membedakan array dari tipe data
lainnya.

```javascript
let arrColors = []; // Prefiks 'arr' untuk menandai array
let colorsArray = []; // Sufiks 'Array' untuk menandai array
```

#### b. **Konstanta untuk array tetap**

Gunakan huruf besar (UPPERCASE) dengan pemisah underscore (`_`) jika array
bersifat konstanta (tidak akan diubah).

```javascript
const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday"];
```

Dengan mengikuti aturan dan konvensi ini, kode JavaScript Anda akan lebih mudah
dibaca, dipahami, dan dipelihara.

**[⬆ back to top](#table-of-contents)**

## **Mutasi pada Array (CRUD)**

Mutasi pada array terjadi ketika kita mengubah **isi** array secara langsung,
seperti menambahkan, menghapus, atau memodifikasi elemen tanpa membuat array
baru. Metode-metode yang menyebabkan mutasi akan mengubah array **di tempat**
(in-place), berbeda dengan metode non-mutasi yang menghasilkan array baru tanpa
mengubah array asli.

### Operasi CRUD pada Array

CRUD adalah singkatan dari **Create, Read, Update, dan Delete**. Berikut adalah
masing-masing contoh implementasi CRUD pada array dengan metode **mutasi**
dalam JavaScript.

#### 1. Create (Menambahkan elemen)

**Metode yang digunakan**: `push()`, `unshift()`, atau `splice()`.

```javascript
// Array awal
let fruits = ["Apple", "Banana"];

// Menambahkan elemen di akhir array
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

// Menambahkan elemen di awal array
fruits.unshift("Mango");
console.log(fruits); // Output: ["Mango", "Apple", "Banana", "Orange"]

// Menambahkan elemen di tengah array
fruits.splice(2, 0, "Grapes");
console.log(fruits); // Output: ["Mango", "Apple", "Grapes", "Banana", "Orange"]
```

#### 2. Read (Membaca elemen)

Tidak mengubah array, hanya membaca nilai dengan indeks tertentu atau
menggunakan iterasi.

**Metode yang digunakan**: **Langsung menggunakan indeks** atau metode iterasi
seperti `forEach()`.

```javascript
// Array awal
let fruits = ["Mango", "Apple", "Grapes", "Banana", "Orange"];

// Membaca elemen tertentu
console.log(fruits[1]); // Output: "Apple"

// Iterasi membaca seluruh elemen
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output:
// 0: Mango
// 1: Apple
// 2: Grapes
// 3: Banana
// 4: Orange
```

#### 3. Update (Memperbarui elemen)

**Metode yang digunakan**: **Langsung menggunakan indeks** atau `splice()`.

```javascript
// Array awal
let fruits = ["Mango", "Apple", "Grapes", "Banana", "Orange"];

// Mengganti elemen pada indeks tertentu
fruits[1] = "Strawberry";
console.log(fruits); // Output: ["Mango", "Strawberry", "Grapes", "Banana", "Orange"]

// Mengganti elemen menggunakan splice()
fruits.splice(2, 1, "Blueberry");
console.log(fruits); // Output: ["Mango", "Strawberry", "Blueberry", "Banana", "Orange"]
```

#### 4. Delete (Menghapus elemen)

**Metode yang digunakan**: `pop()`, `shift()`, `splice()`.

```javascript
// Array awal
let fruits = ["Mango", "Strawberry", "Blueberry", "Banana", "Orange"];

// Menghapus elemen di akhir array
fruits.pop();
console.log(fruits); // Output: ["Mango", "Strawberry", "Blueberry", "Banana"]

// Menghapus elemen di awal array
fruits.shift();
console.log(fruits); // Output: ["Strawberry", "Blueberry", "Banana"]

// Menghapus elemen di tengah array
fruits.splice(1, 1); // Menghapus 1 elemen mulai dari indeks 1
console.log(fruits); // Output: ["Strawberry", "Banana"]
```

**[⬆ back to top](#table-of-contents)**

### Catatan

- **Mutasi** sering digunakan untuk efisiensi, tetapi perlu hati-hati dalam
  kode kolaboratif karena perubahan langsung pada array dapat menimbulkan bug.
- Jika ingin **menghindari mutasi**, gunakan metode **non-mutasi** seperti
  `toSpliced()`, `filter()`, atau `map()` untuk menghasilkan array baru.

**[⬆ back to top](#table-of-contents)**

## Resources

- [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Web Docs - Array literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
- [MDN Web Docs - Deleting array elements using `delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#deleting_array_elements)
- [MDN Web Docs - Guidelines for writing JavaScript code examples](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)

**[⬆ back to top](#table-of-contents)**
