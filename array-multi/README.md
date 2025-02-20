# Array Multidimensi

Dalam JavaScript, **array multidimensi** adalah array yang berisi array lain
sebagai elemennya. Ini memungkinkan kita untuk menyusun data dalam bentuk
matriks, tabel, atau struktur kompleks lainnya.

## Table of Contents

1. [Kenapa Menggunakan Array Multidimensi](#kenapa-menggunakan-array-multidimensi)
2. [Cara Membuat Array Multidimensi](#cara-membuat-array-multidimensi)
3. [Mengakses Elemen dalam Array Multidimensi](#mengakses-elemen-dalam-array-multidimensi)
4. [Menambahkan dan Menghapus Elemen](#menambahkan-dan-menghapus-elemen)
5. **Array Multidimensi Quiz**
   - [Filter Age](filter-age.js)
   - [Split by Space](split-by-space.js)
   - [Split Every Sentence](split-every-sentence.js)
6. [Resources](#resources)

## **Kenapa Menggunakan Array Multidimensi**

Menggunakan **array multidimensi** dalam JavaScript memiliki beberapa manfaat,
terutama dalam pengelolaan data yang lebih kompleks. Berikut adalah beberapa
alasan mengapa array multidimensi diperlukan:

### 1. Menyimpan data dalam struktur tabel (Grid)

- Array multidimensi memungkinkan penyimpanan data dalam bentuk **baris dan
  kolom**, seperti tabel pada database atau spreadsheet.
- Contoh: Representasi data dalam bentuk matriks atau papan catur.

```javascript
let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(grid[1][2]); // Output: 6
```

**[⬆ back to top](#table-of-contents)**

### 2. Mengelola data dalam bentuk hierarki

- Berguna untuk menyimpan **data bersarang (nested data)**, seperti daftar
  kategori dan subkategori.
- Contoh: Struktur menu navigasi atau pohon keputusan.

```javascript
let menu = [["Home"], ["Products", ["Laptop", "Smartphone"]], ["Contact"]];
console.log(menu[1][1][0]); // Output: Laptop
```

**[⬆ back to top](#table-of-contents)**

### 3. Efisiensi dalam pengelolaan data

- Mempermudah manipulasi data yang memiliki **relasi antar elemen**.
- Memungkinkan penyimpanan **banyak elemen dalam satu variabel** daripada
  membuat banyak variabel terpisah.

**[⬆ back to top](#table-of-contents)**

### 4. Mempermudah iterasi dan manipulasi data

- Dengan menggunakan **loop bersarang**, iterasi terhadap elemen dalam array
  multidimensi menjadi lebih mudah.

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

**[⬆ back to top](#table-of-contents)**

### 5. Berguna dalam pemrosesan gambar, grafik, atau game development

- Array multidimensi sering digunakan dalam **pemrosesan piksel gambar**,
  **pembuatan game (papan permainan)**, dan **simulasi data spasial**.

```javascript
let chessBoard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];
console.log(chessBoard[0][3]); // Output: Q (Queen)
```

Array multidimensi dalam JavaScript sangat berguna untuk mengelola data yang
memiliki struktur **lebih dari satu dimensi**, seperti tabel, grafik, atau
hierarki data. Dengan penggunaannya, pengelolaan dan manipulasi data menjadi
lebih **efisien dan terorganisir**.

**[⬆ back to top](#table-of-contents)**

## **Cara Membuat Array Multidimensi**

### Menggunakan array literal (`[]`)

```javascript
let array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(array2D[1][2]); // Output: 6
```

- `array2D[1][2]` artinya mengambil elemen di baris ke-2 dan kolom ke-3
  (indeks dimulai dari 0).

**[⬆ back to top](#table-of-contents)**

### Menggunakan nilai variabel

```javascript
const box1 = ["Mint", "Choco", "Tiramisu"];
const box2 = ["Cheese", "Choco", "Avocado"];
const box3 = ["Red Velvet", "Choco", "Mint"];
const box4 = ["Mint", "Wasabi", "Tiramisu"];

const dusDonut = [box1, box2, box3, box4];
console.log(dusDonut);
```

**[⬆ back to top](#table-of-contents)**

### Menggunakan `push()` untuk menambahkan baris

```javascript
let array2D = [];
array2D.push([1, 2, 3]);
array2D.push([4, 5, 6]);
array2D.push([7, 8, 9]);
console.log(array2D);
```

**[⬆ back to top](#table-of-contents)**

### Array multidimensi lebih dari 2 dimensi

```javascript
let array3D = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
console.log(array3D[1][0][1]); // Output: 6
```

- `array3D[1][0][1]` berarti mengambil elemen ke-2 dari array utama, lalu array
  pertama di dalamnya, lalu elemen ke-2 di array itu.

**[⬆ back to top](#table-of-contents)**

## **Mengakses Elemen dalam Array Multidimensi**

Untuk mengakses elemen dalam array multidimensi, gunakan **notasi indeks
bertingkat** (`array[row][col]`).

**Contoh Penggunaan**

Misalkan kita memiliki **array 2D (dua dimensi)** berikut:

```javascript
let matrix = [
  [1, 2, 3], // Baris 0
  [4, 5, 6], // Baris 1
  [7, 8, 9], // Baris 2
];
```

Untuk mengakses elemen tertentu:

- **Akses elemen baris ke-1, kolom ke-1** (`5`):
  ```javascript
  console.log(matrix[1][1]); // Output: 5
  ```
- **Akses elemen baris ke-2, kolom ke-0** (`7`):
  ```javascript
  console.log(matrix[2][0]); // Output: 7
  ```

**[⬆ back to top](#table-of-contents)**

### Iterasi dalam array multidimensi

Untuk **menelusuri seluruh elemen dalam array multidimensi**, gunakan **loop
bersarang** (`for` atau `forEach`).

#### **Menggunakan `for` loop**

```javascript
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] =`, matrix[i][j]);
  }
}
```

#### **Menggunakan `forEach`**

```javascript
matrix.forEach((row, i) => {
  row.forEach((col, j) => {
    console.log(`matrix[${i}][${j}] =`, col);
  });
});
```

**[⬆ back to top](#table-of-contents)**

### Array multidimensi lebih dari 2 dimensi

JavaScript mendukung array dengan lebih dari dua dimensi. Contoh **array 3D**:

```javascript
let cube = [
  [
    [1, 2],
    [3, 4],
  ], // Lapisan 0
  [
    [5, 6],
    [7, 8],
  ], // Lapisan 1
];

console.log(cube[1][0][1]); // Output: 6
```

Di sini, `cube[1][0][1]` berarti:

1. **Lapisan ke-1** → `[ [5, 6], [7, 8] ]`
2. **Baris ke-0** dalam lapisan tersebut → `[5, 6]`
3. **Kolom ke-1** dalam baris tersebut → `6`

**[⬆ back to top](#table-of-contents)**

### Kesimpulan

1. **Gunakan notasi indeks bertingkat** (`array[row][col]`) untuk mengakses
   elemen dalam array multidimensi.
2. **Gunakan loop bersarang** untuk menelusuri array multidimensi.
3. **Array multidimensi bisa memiliki lebih dari 2 tingkat**, cukup tambahkan
   lebih banyak indeks (`array[x][y][z]`).

**[⬆ back to top](#table-of-contents)**

## **Menambahkan dan Menghapus Elemen**

Untuk **menambahkan** dan **menghapus** elemen dalam array multidimensi, kita
bisa menggunakan metode seperti `push()`, `pop()`, `unshift()`, `shift()`, dan
`splice()`.

### 1. Menambahkan elemen ke dalam array multidimensi

#### **a. Menggunakan `push()`**

Menambahkan elemen di akhir array.

```javascript
let arr = [
  [1, 2],
  [3, 4],
];
arr.push([5, 6]);

console.log(arr); // Output: [[1, 2], [3, 4], [5, 6]]
```

#### **b. Menggunakan `unshift()`**

Menambahkan elemen di awal array.

```javascript
arr.unshift([0, 0]);

console.log(arr); // Output: [[0, 0], [1, 2], [3, 4], [5, 6]]
```

#### **c. Menambahkan elemen ke dalam sub-array**

Untuk menambahkan elemen dalam sub-array, gunakan `push()` atau `unshift()`
pada elemen tertentu.

```javascript
arr[1].push(7);

console.log(arr); // Output: [[0, 0], [1, 2, 7], [3, 4], [5, 6]]
```

#### **d. Menggunakan `splice()` untuk menyisipkan elemen**

Menambahkan elemen pada posisi tertentu.

```javascript
arr.splice(1, 0, [9, 9]);

console.log(arr); // Output: [[0, 0], [9, 9], [1, 2, 7], [3, 4], [5, 6]]
```

**[⬆ back to top](#table-of-contents)**

### 2. Menghapus elemen dari array multidimensi

#### **a. Menggunakan `pop()`**

Menghapus elemen terakhir.

```javascript
arr.pop();

console.log(arr); // Output: [[0, 0], [9, 9], [1, 2, 7], [3, 4]]
```

#### **b. Menggunakan `shift()`**

Menghapus elemen pertama.

```javascript
arr.shift();

console.log(arr); // Output: [[9, 9], [1, 2, 7], [3, 4]]
```

#### **c. Menghapus elemen dari sub-array**

Misalnya, menghapus elemen terakhir dari sub-array indeks ke-1.

```javascript
arr[1].pop();

console.log(arr); // Output: [[9, 9], [1, 2], [3, 4]]
```

#### **d. Menggunakan `splice()` untuk menghapus elemen di posisi tertentu**

Menghapus elemen pada indeks ke-1.

```javascript
arr.splice(1, 1);

console.log(arr); // Output: [[9, 9], [3, 4]]
```

**[⬆ back to top](#table-of-contents)**

### Kesimpulan

- Gunakan **`push()`** dan **`unshift()`** untuk menambahkan elemen di
  akhir/awal array.
- Gunakan **`pop()`** dan **`shift()`** untuk menghapus elemen dari akhir/awal
  array.
- Gunakan **`splice()`** untuk menyisipkan atau menghapus elemen di posisi
  tertentu.
- Jika ingin mengubah isi sub-array, gunakan metode yang sama pada sub-array
  yang dituju.

**[⬆ back to top](#table-of-contents)**

## Resources

- [GeeksforGeeks - JavaScript Multidimensional Array](https://www.geeksforgeeks.org/javascript-multidimensional-array/)
- [JavaScript Tutorial - JavaScript Multidimensional Array](https://www.javascripttutorial.net/javascript-multidimensional-array/)
- [freeCodeCamp - JavaScript 2D Array](https://www.freecodecamp.org/news/javascript-2d-arrays/)
- [Mastering JavaScript: Multiple Ways to Generate a Two-Dimensional Array](https://dev.to/yanhaijing/mastering-javascript-multiple-ways-to-generate-a-two-dimensional-array-cpg)

**[⬆ back to top](#table-of-contents)**
