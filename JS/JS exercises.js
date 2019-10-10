
function firstNonRepeated(s) {
  const answer = s.split('').filter((item, index) => index === s.lastIndexOf(item) && index === s.indexOf(item));
  return answer[0] || null
}

console.log(firstNonRepeated('test'));