const obj = {
  width: 2,
  height: 4,
  length: 6,
};

function volumeOfBox(sizes) {
  const { width, height, length } = sizes;
  // Volume is length * width * height
  return length * width * height;
}

console.log(volumeOfBox(obj)); // Output: 48

/**
 * ALGORITMA
 * 1. Ambil nilai `width`, `height`, dan `length` dari objek yang diberikan.
 * 2. Kalikan ketiga nilai tersebut.
 * 3. Kembalikan hasil perkalian sebagai volume.
 */
