/**
 * =============
 * REVERSED WORD
 * =============
 * Declare a new variable named "word" for storing any word.
 * Loop for each character in variable "word" and add it into variable "newWord" with reversed version of the word.
 * Display the new word with the reversed word in your terminal.
 *
 */
let word = "hello world!";
let newWord = ""; // Expected Output: !dlrow olleh

// v1 - Reverse the word using increment loop
for (let i = 0; i < word.length; i++) {
  let char = word[i]; // h, e, l, l, o, (spasi), w, o, r, l, d, !
  newWord = char + newWord;
}
console.log(newWord);

newWord = ""; // Reset the newWord variable

// v2 - Reverse the word using decrement loop
for (let i = word.length - 1; i >= 0; i--) {
  let reversedChar = word[i]; // !, d, l, r, o, w, (spasi), o, l, l, e, h
  newWord += reversedChar;
}
console.log(newWord);
