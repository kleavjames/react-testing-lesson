function toMatch(str1, str2) {
  let counter1 = {};
  let counter2 = {};
  let matchCount = 0;

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    counter1[char] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    counter2[char] = 1;
  }

  for (let key in counter1) {
    if (counter1[key] === counter2[key]) {
      matchCount += counter1[key];
    }
  }

  return matchCount;
}

export function getLetterMatchCount(guessedWord, secretWord) {
  return toMatch(guessedWord, secretWord);
}
