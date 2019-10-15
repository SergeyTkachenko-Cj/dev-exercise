
function addLetters(...letters) {
  return String.fromCharCode((eval([...letters].map(i => i.charCodeAt(0) - 96).join('+')) % 26 || 26) + 96)
}

console.log(addLetters("o", "r", "c", "b", "r", "h", "n", "g", "s", "c"));