function toMatch(guessed, secret) {
  let guessedObj = {};
  let secretObj = {};
  let matchCount = 0;

  for (let i = 0; i < guessed.length; i++) {
    let char = guessed[i];
    guessedObj[char] = 1;
  }

  for (let i = 0; i < secret.length; i++) {
    let char = secret[i];
    secretObj[char] = 1;
  }

  for (let key in guessedObj) {
    if (guessedObj[key] === secretObj[key]) {
      matchCount += guessedObj[key];
    }
  }

  return matchCount;
}

export function getLetterMatchCount(guessedWord, secretWord) {
  return toMatch(guessedWord, secretWord);
}
