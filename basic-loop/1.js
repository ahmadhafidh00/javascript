/**
 * =============
 * FILTERED WORD
 * =============
 * Declare a new variable named "word" for storing any word.
 * Loop for each character in variable "word" and check whether the character is valid or not.
 *
 * Glossary =
 * |-------------------|
 * | Removed Character |
 * |-------------------|
 * | "!"               |
 * |-------------------|
 * | "@"               |
 * |-------------------|
 * | "#"               |
 * |-------------------|
 * | "$"               |
 * |-------------------|
 *
 * If there is any character matched with the glossary above then removed the character from variable "newWord".
 * If the character is " " (space) then replace it with "_" (underscore).
 * Display the new word with the filtered word in your terminal.
 *
 */
let word = "#! L@ve J@v@$cr!pt. s@ Much";
let newWord = ""; // Expected Output: '_Lve_Jvcrpt._s_Much'

for (let i = 0; i < word.length; i++) {
  let char = word[i]; // #, !, (spasi), L, @, v, e, dst

  // jika karakter adalah spasi
  if (char === " ") {
    newWord += "_";
  }
  // jika karakter biasa
  if (char !== "!" && char !== "@" && char !== "#" && char !== "$") {
    newWord += char;
  }
}

console.log(newWord);
