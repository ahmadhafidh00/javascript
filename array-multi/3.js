let kalimat = "saya suka makan"; // expected output: [ 'saya', 'suka', 'makan' ]

function splitBySpace(sentence) {
  const result = [];
  let temp = "";

  for (let i = 0; i <= sentence.length; i++) {
    let char = sentence[i];

    if (char === " " || char === undefined) {
      result.push(temp);
      temp = "";
    } else {
      temp += char;
    }
  }

  return result;
}

console.log(splitBySpace(kalimat));
