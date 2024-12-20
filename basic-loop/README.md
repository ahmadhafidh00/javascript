# Basic Loop

## Table of Contents

1. [Introduction](#introduction)
2. [Perbedaan Antara `while` dan `do...while`](#perbedaan-antara-while-dan-dowhile)
3. [Flag Variables](#flag-variables)
4. **Practice**
   - [filtered-word](1.js)
   - [reversed-word](2.js)
   - [replaced-character](3.js)
5. [Resources](#resources)

## Introduction

Di dalam JavaScript, terdapat tiga jenis loop yang sering digunakan untuk
mengulang suatu kode atau blok perintah berulang kali. Ketiga loop tersebut
adalah `for...loop`, `while...loop`, dan `do...while loop`. Masing-masing
memiliki cara penggunaan yang berbeda, dan cocok digunakan dalam situasi
tertentu.

### 1. `for...loop`

Loop ini digunakan ketika jumlah iterasi (pengulangan) sudah diketahui
sebelumnya. Ini adalah jenis loop yang paling sering digunakan ketika kita
ingin mengulang sebuah aksi berdasarkan kondisi tertentu yang bisa dihitung.

**Sintaks:**

```javascript
for (initialization; condition; increment / decrement) {
  // kode yang akan dijalankan setiap kali loop berjalan
}
```

**Penjelasan:**

- **Initialization**: Inisialisasi variabel yang digunakan untuk mengontrol
  loop.
- **Condition**: Kondisi yang harus dipenuhi agar loop terus berjalan. Jika
  kondisi ini `false`, loop akan berhenti.
- **Increment/Decrement**: Operasi yang dilakukan setelah setiap iterasi untuk
  memperbarui variabel loop.

**Contoh:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Akan mencetak angka 0 sampai 4
}
```

**Penjelasan:**

- Variabel `i` dimulai dari 0.
- Loop akan terus berjalan selama `i < 5`.
- Setelah setiap iterasi, nilai `i` akan bertambah 1.

**[⬆ back to top](#table-of-contents)**

### 2. `while...loop`

Loop ini digunakan ketika kita tidak tahu sebelumnya berapa banyak iterasi
yang diperlukan, tetapi kita memiliki kondisi yang harus dipenuhi agar loop
berlanjut. Loop ini akan terus berjalan selama kondisi yang diberikan bernilai
`true`.

**Sintaks:**

```javascript
while (condition) {
  // kode yang akan dijalankan selama kondisi bernilai true
}
```

**Penjelasan:**

- **Condition**: Kondisi yang dicek sebelum setiap iterasi. Jika kondisi ini
  `true`, kode dalam loop akan dijalankan. Jika `false`, loop akan berhenti.

**Contoh:**

```javascript
let i = 0;
while (i < 5) {
  console.log(i); // Akan mencetak angka 0 sampai 4
  i++;
}
```

**Penjelasan:**

- Loop ini akan mencetak angka dari 0 sampai 4.
- Variabel `i` dimulai dari 0 dan akan bertambah 1 di setiap iterasi hingga
  kondisi `i < 5` menjadi `false`.

**[⬆ back to top](#table-of-contents)**

### 3. `do...while loop`

`do...while` mirip dengan `while...loop`, tetapi perbedaannya adalah bahwa
kondisi untuk menghentikan loop dicek setelah kode di dalam loop dijalankan.
Ini berarti kode di dalam loop akan selalu dijalankan setidaknya sekali,
meskipun kondisi awalnya `false`.

**Sintaks:**

```javascript
do {
  // kode yang akan dijalankan setidaknya satu kali
} while (condition);
```

**Penjelasan:**

- **Kode di dalam blok `do`** selalu dijalankan sekali terlebih dahulu.
- **Condition**: Kondisi yang dicek setelah setiap iterasi. Jika kondisi ini
  `true`, loop akan terus berjalan. Jika `false`, loop akan berhenti.

**Contoh:**

```javascript
let i = 0;
do {
  console.log(i); // Akan mencetak angka 0 sampai 4
  i++;
} while (i < 5);
```

**Penjelasan:**

- Variabel `i` dimulai dari 0.
- Kode di dalam `do` dijalankan setidaknya sekali, meskipun kondisi `i < 5`
  baru dicek setelah itu.

### Perbandingan dan penggunaan:

- **`for...loop`** lebih cocok digunakan ketika kita sudah tahu jumlah iterasi
  atau kita ingin iterasi berdasarkan sebuah variabel yang dihitung.
- **`while...loop`** lebih cocok digunakan jika kita tidak tahu berapa kali
  loop perlu dijalankan dan ingin melanjutkan loop selama kondisi tertentu
  masih terpenuhi.
- **`do...while`** digunakan jika kita ingin memastikan kode di dalam loop
  dieksekusi minimal sekali, terlepas dari apakah kondisi awalnya benar atau
  tidak.

Dengan memahami perbedaan ini, kita dapat memilih loop yang paling sesuai untuk
situasi tertentu dalam pemrograman.

**[⬆ back to top](#table-of-contents)**

## **Perbedaan Antara `while` dan `do...while`**

Perbedaan utama antara **`while...loop`** dan **`do...while` loop** terletak
pada **waktu pengecekan kondisi** dan **jumlah iterasi yang dijamin**.

### 1. `while...loop`

- **Pengecekan Kondisi Sebelum Eksekusi Kode**: Pada `while...loop`,
  **kondisi diperiksa terlebih dahulu** sebelum kode di dalam loop dieksekusi.
  Jika kondisi awalnya **sudah `false`**, maka kode di dalam loop
  **tidak akan dijalankan sama sekali**.

**Sintaks:**

```javascript
while (condition) {
  // kode yang akan dijalankan selama kondisi true
}
```

**Contoh:**

```javascript
let i = 5;
while (i < 5) {
  console.log(i); // Tidak ada output karena kondisi i < 5 sudah false
  i++;
}
```

- **Kapan Loop Berhenti?**: Loop berhenti ketika kondisi yang dievaluasi
  menjadi `false`. Jika kondisi awalnya sudah `false`, maka loop
  **tidak akan dijalankan sama sekali**.

**[⬆ back to top](#table-of-contents)**

### 2. `do...while` loop

- **Pengecekan Kondisi Setelah Eksekusi Kode**: Pada `do...while loop`,
  **kode di dalam blok `do` dijalankan terlebih dahulu** sebelum mengecek
  kondisi. Artinya, **kode akan selalu dijalankan minimal sekali**, bahkan jika
  kondisi awalnya `false`.

**Sintaks:**

```javascript
do {
  // kode yang akan dijalankan setidaknya sekali
} while (condition);
```

**Contoh:**

```javascript
let i = 5;
do {
  console.log(i); // Akan mencetak 5 sekali
  i++;
} while (i < 5);
```

- **Kapan Loop Berhenti?**: Loop ini akan terus berjalan selama kondisi yang
  dievaluasi setelah setiap iterasi masih `true`. Jika kondisi menjadi
  `false`, loop akan berhenti. Namun, yang membedakan adalah bahwa kode dalam
  `do` akan tetap **dijalankan setidaknya sekali**, meskipun kondisi awalnya
  sudah `false`.

### Perbandingan utama

| Fitur                  | `while...loop`                                                                              | `do...while` loop                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Pengecekan Kondisi** | Sebelum eksekusi kode                                                                       | Setelah eksekusi kode                                                                   |
| **Minimal Eksekusi**   | Bisa tidak dijalankan sama sekali jika kondisi awal sudah `false`                           | Selalu dijalankan minimal sekali, meskipun kondisi awalnya `false`                      |
| **Penggunaan**         | Digunakan jika kita tidak tahu jumlah iterasi dan ingin mengulang selama kondisi terpenuhi. | Digunakan jika kita ingin memastikan blok kode dijalankan minimal sekali.               |
| **Contoh Kasus**       | Mengulangi proses hingga kondisi tertentu tercapai.                                         | Menampilkan menu atau meminta input pengguna minimal sekali sebelum validasi dilakukan. |

**[⬆ back to top](#table-of-contents)**

### Contoh kasus:

- **`while...loop`**: Misalkan kita ingin meminta input pengguna hingga mereka
  memasukkan angka yang valid.

  ```javascript
  let number;
  while (isNaN(number)) {
    number = prompt("Masukkan angka: ");
  }
  alert("Angka yang valid: " + number);
  ```

  Jika pengguna langsung memasukkan angka yang valid, loop tidak dijalankan.

- **`do...while` loop**: Misalkan kita ingin menampilkan menu ke pengguna
  setidaknya satu kali dan meminta konfirmasi untuk mengulang atau tidak.
  ```javascript
  let repeat;
  do {
    repeat = confirm("Apakah Anda ingin melanjutkan?");
  } while (repeat);
  ```
  Loop ini selalu menampilkan menu konfirmasi minimal sekali, meskipun pengguna
  langsung memilih untuk tidak melanjutkan.

### Kesimpulan:

- Gunakan **`while...loop`** jika kondisi untuk melanjutkan loop perlu dicek
  **sebelum** eksekusi.
- Gunakan **`do...while` loop** jika Anda perlu memastikan bahwa kode dalam
  loop dieksekusi **setidaknya satu kali**, terlepas dari kondisi awal.

**[⬆ back to top](#table-of-contents)**

## **Flag Variables**

**Flag variables** adalah variabel yang digunakan untuk
**menandai atau mengontrol status tertentu** dalam program, biasanya berupa
nilai boolean (`true` atau `false`). Flag ini sering digunakan dalam
pemrograman untuk **mengontrol alur program** atau untuk
**menyatakan status tertentu** dalam program, seperti apakah suatu kondisi
telah tercapai atau apakah suatu proses telah selesai.

Di JavaScript, flag variables biasanya digunakan untuk mengendalikan
perulangan, kondisi, atau bahkan untuk menandakan apakah suatu operasi berhasil
atau tidak.

### Penggunaan flag variables

#### 1. **Mengontrol alur program**

Flag variable sering digunakan untuk mengontrol apakah suatu blok kode akan
dijalankan atau tidak, tergantung pada status flag tersebut. Misalnya, dalam
sebuah program yang memiliki proses dengan beberapa tahapan, flag dapat
digunakan untuk memeriksa apakah tahap sebelumnya telah berhasil atau tidak
sebelum melanjutkan ke tahap berikutnya.

**Contoh: Menggunakan Flag untuk Mengecek Status**

```javascript
let isUserAuthenticated = false;

function authenticateUser() {
  // Proses autentikasi (misalnya, cek password, token, dll.)
  // Jika berhasil, set flag menjadi true
  isUserAuthenticated = true;
}

function accessDashboard() {
  if (isUserAuthenticated) {
    console.log("Welcome to the Dashboard!");
  } else {
    console.log("Please authenticate first.");
  }
}

// Simulasi
authenticateUser();
accessDashboard(); // Output: Welcome to the Dashboard!
```

Dalam contoh ini, flag `isUserAuthenticated` digunakan untuk memastikan bahwa
pengguna hanya bisa mengakses dashboard jika mereka sudah berhasil
diautentikasi.

#### 2. **Kontrol dalam Perulangan (Looping)**

Flag dapat digunakan untuk mengontrol perulangan agar berhenti pada kondisi
tertentu. Misalnya, jika kita ingin menghentikan perulangan di tengah jalan
ketika kondisi tertentu tercapai, kita bisa menggunakan flag.

**Contoh: Menggunakan Flag untuk Menghentikan Perulangan**

```javascript
let found = false;
let numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 4) {
    found = true;
    break; // Hentikan loop ketika angka 4 ditemukan
  }
}

if (found) {
  console.log("Number 4 found!");
} else {
  console.log("Number 4 not found.");
}
```

Pada contoh ini, flag `found` digunakan untuk menandakan apakah angka 4
ditemukan dalam array. Setelah angka 4 ditemukan, flag di-set menjadi `true`
dan perulangan dihentikan menggunakan `break`.

**[⬆ back to top](#table-of-contents)**

#### 3. **Menangani Keberhasilan atau Kegagalan Operasi**

Flag sering digunakan untuk menandakan apakah suatu operasi berhasil atau
gagal. Misalnya, dalam operasi asynchronous seperti AJAX atau operasi dengan
API, flag digunakan untuk menandakan status keberhasilan atau kegagalan.

**Contoh: Menggunakan Flag untuk Menandakan Keberhasilan atau Kegagalan**

```javascript
let isSuccess = false;

function fetchDataFromAPI() {
  // Simulasi request data
  let dataReceived = true; // Misalnya, data diterima dengan sukses

  if (dataReceived) {
    isSuccess = true;
    console.log("Data fetched successfully.");
  } else {
    isSuccess = false;
    console.log("Failed to fetch data.");
  }
}

// Simulasi pemanggilan API
fetchDataFromAPI();

if (isSuccess) {
  console.log("Proceed with processing the data.");
} else {
  console.log("Try again later.");
}
```

Flag `isSuccess` digunakan untuk menentukan apakah data dari API berhasil
diambil atau tidak. Berdasarkan status flag ini, program dapat melanjutkan ke
proses berikutnya atau memberikan pesan kesalahan.

#### 4. **Mengecek Kondisi Pengulangan yang Kompleks**

Dalam beberapa kasus, kita mungkin ingin menggunakan flag untuk melacak
kondisi yang lebih kompleks selama pengulangan, misalnya apakah kita sudah
menemukan elemen yang memenuhi syarat dalam sebuah array.

**Contoh: Flag untuk Mengecek Kondisi Tertentu di dalam Loop**

```javascript
let isEvenFound = false;
let numbers = [1, 3, 5, 7, 8, 9, 11];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    isEvenFound = true;
    break; // Hentikan loop jika angka genap ditemukan
  }
}

if (isEvenFound) {
  console.log("Found an even number.");
} else {
  console.log("No even numbers found.");
}
```

Flag `isEvenFound` digunakan untuk memeriksa apakah ada angka genap di dalam
array. Jika ditemukan, flag akan diubah menjadi `true` dan loop berhenti.
Setelah loop selesai, kita dapat mengambil tindakan berdasarkan status flag.

### Ciri-ciri umum penggunaan flag:

1. **Tipe Data Boolean**: Flag biasanya berupa variabel boolean
   (`true`/`false`).
2. **Mengontrol Alur Program**: Flag digunakan untuk mempengaruhi jalannya
   eksekusi program, seperti mengaktifkan atau menonaktifkan blok kode
   tertentu.
3. **Menangani Keberhasilan atau Kegagalan**: Flag digunakan untuk menandakan
   apakah suatu operasi berhasil atau gagal.
4. **Menghentikan atau Melanjutkan Proses**: Flag dapat digunakan untuk
   menghentikan perulangan atau proses lain berdasarkan kondisi tertentu.

### Kesimpulan:

Flag variables sangat berguna untuk mengontrol logika program, terutama dalam
hal pengulangan dan kondisi. Dengan menggunakan flag, kita bisa dengan mudah
menandakan status atau kondisi tertentu dan membuat keputusan berdasarkan
nilai flag tersebut, misalnya untuk menghentikan loop, menangani keberhasilan
operasi, atau mengontrol alur program.

**[⬆ back to top](#table-of-contents)**

## Resources

- [Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [What is a flag variable?](https://stackoverflow.com/questions/17402125/what-is-a-flag-variable)

**[⬆ back to top](#table-of-contents)**
