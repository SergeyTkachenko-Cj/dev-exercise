
function addLetters(...letters) {
  const cat = [...letters];
  const res = cat.map((i) => i.charCodeAt(0) - 96);
  const x = eval(res.join('+'));
  const y = x % 26 || 26;
  return String.fromCharCode(y + 96);
}

console.log(addLetters('d', 'w', 'd', 'n', 'i', 'o', 'e'));
