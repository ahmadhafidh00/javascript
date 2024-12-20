/**
 * ==================
 * REPLACED CHARACTER
 * ==================
 * Declare a new variable named "word" for storing any word.
 * Loop for each character in variable "word" and replace any vowel character inside the word with number.
 *
 * Glossary =
 * |------------|--------------|
 * | Character  | Replace With |
 * |------------|--------------|
 * | "a" OR "A" |      4       |
 * |------------|--------------|
 * | "i" OR "I" |      1       |
 * |------------|--------------|
 * | "e" OR "E" |      3       |
 * |------------|--------------|
 * | "o" OR "O" |      0       |
 * |------------|--------------|
 *
 * Display the new word with the replaced character in your terminal.
 *
 */
let word = "aieo world!";
let newWord = ""; // Output: 4130 w0rld!

// v1 - Using if-else statement
for (let i = 0; i < word.length; i++) {
  if (word[i] === "a" || word[i] === "A") {
    newWord += "4";
  } else if (word[i] === "i" || word[i] === "I") {
    newWord += "1";
  } else if (word[i] === "e" || word[i] === "E") {
    newWord += "3";
  } else if (word[i] === "o" || word[i] === "O") {
    newWord += "0";
  } else {
    newWord += word[i];
  }
}
console.log(newWord);

newWord = ""; // Reset the newWord variable

// v2 - Using switch statement
for (let i = 0; i < word.length; i++) {
  switch (word[i]) {
    case "a":
    case "A":
      newWord += "4";
      break;
    case "i":
    case "I":
      newWord += "1";
      break;
    case "e":
    case "E":
      newWord += "3";
      break;
    case "o":
    case "O":
      newWord += "0";
      break;
    default:
      newWord += word[i];
  }
}
console.log(newWord);
